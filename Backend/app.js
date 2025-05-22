// #region Imports
const OAuthConf = require("./OAuth/google.json");
const { getGoogleOAuthTokens, getGoogleUser } = require("./OAuth/OAuth.js");
const db = require("./database.js");

const JWTService = require("./utils/jwt.service");
const mailer = require("./utils/mailservice");

const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const deserializeUser = require("./utils/deserializeUser");
const cfg = require("./config.json");
const sbVote = require("./SBvote.js");

const web3 = new (require("web3"))(cfg.network);
const authorityAcc = web3.eth.accounts.privateKeyToAccount(cfg.account_pk);

const {Calendar, createEvent} = require("./utils/calendar");
const calendar = new Calendar();
// #endregion

// #region Initialization
const app = express();
init();

app.use(
  cors({
    origin: [   
    'http://localhost:4200',
    'capacitor://localhost',
    'ionic://localhost',        
    'https://localhost',
     cfg.url],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyparser.json({ limit: "50mb" }));
//app.use(deserializeUser);
// #endregion

// #region Routes
app.get("/GoogleClient", getGoogleClient);
app.get("/api/session/oauth/google", googleOAuthHandler);
app.get("/verify", verifyAccount);
app.post("/register", register);
app.post("/login", login);
app.post("/resetPW", resetPassword);
app.post("/setNewPw", setNewPw);
app.post("/verifyCookie", verifyCookie);
app.post("/reissue", reissueSession);
app.post("/enrollVoters", isAuthorized, isAdmin, enrollVoters);
app.post("/enrollVoter", isAuthorized, enrollVoter);
app.post("/createElection", isAuthorized, isAdmin, createElection);
app.post("/getElections", isAuthorized, getElections);
app.post("/isAdmin", isAuthorized, isUserAdmin);

app.post("/submitVote", isAuthorized, submitVote);
app.post("/splitGroups", isAuthorized, isAdmin, splitGroups);
app.post("/finishSetup", isAuthorized, isAdmin, finishSetup);
app.post("/precomputeMPC", isAuthorized, isAdmin, precomputeMPC);
app.post("/computeMPCs", isAuthorized, isAdmin, computeMPCs);
app.post("/computeBlindedVotesSum", isAdmin, isAuthorized, ComputeBlindedVotesSum);
app.post("/computeGroupTallies", isAdmin, isAuthorized, computeGrouptallies);
app.post("/repair", isAdmin, repairVotes )
// #endregion

// #region Initialization Functions
async function init() {
  await db.connect();
  web3.eth.accounts.wallet.add(authorityAcc);
  await redeploy();
}

async function redeploy() {
  try {
    const elections = await db.getAllElections();

    for (const election of elections) {
      const address = election.mainVotingAddress;

      const code = await web3.eth.getCode(address);
      if (code === "0x") {
        const updatedElection = await sbVote.deployContracts(election);
        await db.updateElection(election._id, updatedElection);
      }

      scheduleElectionEvents(election);
    }
  } catch (e) {
    console.error(e);
  }
}

function scheduleElectionEvents(election) {
    const startSignUpEvent = {
      date: election.startSignUp,
      fn: sbVote.initiateSignUpPhase(election.mainVotingAddress),
    };  

    calendar.addEvent(startSignUpEvent);

    const startEvent = {
      date: election.start,
      fn: sbVote.initiateVotingPhase(election.mainVotingAddress),
    };
    calendar.addEvent(startEvent);
    
    const endEvent = {
      date: election.end,
      fn: () => sbVote.initiateTallyPhase(election.mainVotingAddress, election.fastECmulAddress, election.ECaddress),
    };
    calendar.addEvent(endEvent);
}

// #endregion

// #region Utility Functions
function getGoogleClient(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.json({
    clientId: OAuthConf.ClientID,
    redirectURL: OAuthConf.RedirectURL,
  });
  res.status(200);
}

function handleError(error, res) {
  console.error(error);
  if (!error || !(error?.status)) {
    return res.status(500).json({ message: "internal error" });
  }
  return res.status(error.status).json({ message: error.message });
}
// #endregion

// #region Authentication
async function register(req, res) {
  try {
    const userInfo = req.body;
    const code = await db.createVoter(...Object.values(userInfo));
    mailer.sendVerificationEmail(userInfo.name, userInfo.email, code);

    return res.status(200).json({ message: "OK" }).send();
  } catch (error) {
    return handleError(error, res);
  }
}

async function login(req, res) {
  try {
    const userInfo = req.body;
    const uid = await db.login(...Object.values(userInfo));
    
    const voter = await db.findAccount({ _id: uid });
    const result = await setAccessCookie(req, res, voter._id, voter.role);

    return result.status(200).send();
  } catch (error) {
    return handleError(error, res);
  }
}

async function setNewPw(req, res) {
  try {
    const { code, password } = req.body;
    const token = await db.findResetPWToken(code);
    const result = await db.setNewPassword(token, password);
    if (result) {
      res.status(200).json({ message: "OK" }).send();
    } else {
      res.status(500).json({ message: "Error" }).send();
    }
  } catch (e) {
    console.error(e);
    return handleError(e, res);
  }
}

async function resetPassword(req, res) {
  try {
    const email = req.body.email;
    const account = await db.findAccount({ email });
    if (account) {
      const token = await db.createResetPWToken(account._id);
      mailer.sendResetPwEmail(email, token.resetToken);
    } else {
      res.status(500).send();
    }
  } catch (e) {
    console.error(e);
    return handleError(e, res);
  }
}

async function verifyAccount(req, res) {
  try {
    const verificationCode = req.query.code;

    if (!verificationCode || verificationCode.match(/verified/gi)) {
      return res.status(400).json({ message: "Invalid verification code." });
    }

    const user = await db.verifyAccount(verificationCode);
    if (!user) {
      return res.status(400).json({ message: "Invalid verification code." });
    }

    await setAccessCookie(req, res, user._id, user.role);
    res.status(200).json({ message: "Ok" }).redirect(config.url).send();
  } catch (error) {
    handleError(error, res);
  }
}

async function setAccessCookie(req, res, uid, role) {
  try {
    const refreshToken = JWTService.signJwt(
      { uid },
      { expiresIn: 30 * 24 * 60 * 60 * 1000 } // 7 days
    );
    const hashedRefreshToken = db.generatePasswordHash(refreshToken);
    const isAdmin = role === 'admin'? true: false;
    const session = await db.createSession(
      uid, 
      isAdmin,
      req.ip,
      req.get("user-agent") ?? "",
      hashedRefreshToken
    );

    const accessToken = JWTService.signJwt(
      { uid: uid, session: session._id },
      { expiresIn: 900 }
    );
    const tokenCookieOptions = {
      maxAge: 9000000,
      httpOnly: false,
      path: "/",
      sameSite: "lax",
      secure: false,
    };

    res.cookie("accessToken", accessToken, { ...tokenCookieOptions });
    res.cookie("refreshToken", hashedRefreshToken, {
      ...tokenCookieOptions,
      maxAge: 846e5,
    });
    return res;
  } catch (e) {
    handleError(e, res);
  }
}

async function reissueSession(req, res) {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) {
      throw { status: 401, message: "Refresh token not provided" };
    }
    const session = await db.findSession(token);
    if (!session) {
      throw { status: 401, message: "Invalid refresh token" };
    }
    const uid = session.uid;
    if (new Date() > session.expiresAt) {
      throw { status: 401, message: "Refresh token expired" };
    }
    await db.removeSessions(uid);
    const voter = await db.findAccount({ _id: uid });
    await setAccessCookie(req, res, uid, voter.role);
    res
      .json({
        email: voter.email,
        name: voter.name,
        walletStatus: voter.walletStatus,
        authType: voter.authType,
        status: voter.status,
      })
      .send();
    return;
  } catch (e) {
    handleError(e, res);
  }
}

async function googleOAuthHandler(req, res) {
  try {
    const code = req.query.code;
    const { id_token, access_token } = await getGoogleOAuthTokens(code);
    const GoogleUser = await getGoogleUser(id_token, access_token);

    const user = await db.findAndUpdateAccount(
      {
        email: GoogleUser.email,
        authType: "oauth",
      },
      {
        email: GoogleUser.email,
        name: GoogleUser.name,
        authType: "oauth",
        status: true,
      },
      {
        upsert: true,
        new: true,
      }
    );

    await setAccessCookie(req, res, user.uid, user.role);
    res.redirect(`${cfg.url}/register?email=${encodeURIComponent(user.email)}`);
  } catch (e) {
    return res.redirect(cfg.url);
  }
}

async function verifyCookie(req, res) {
  res.status(200);
  res.json(isAuthorized(req));
  res.send();
}
// #endregion

// #region Voting
async function submitVote(req, res) {
  try {
    const { address, vote } = req.body;
    const result = await sbVote.submitVote(address, vote);
    res.status(200).json({ message: "OK" }).send();
  } catch (e) {
    return handleError(e, res);
  }
}

async function enrollVoter(req, res) {
  try {
    const { contract, wallet } = req.body;
    const uid = JWTService.decode(req.cookies.accessToken).uid;
    const election = await db.addVoter(contract, wallet, uid);
    if (election) {
      res.status(200);
      res.json({ message: "Ok", election: {isRegistered: election.isRegistered, ...election}});
      res.send();
    }
  }catch(e){
    console.error(e);
    handleError(e, res);
  }
}

async function enrollVoters(req, res) {
  try {
    const address = req.body.address;
    await sbVote.enrollVoters(address);
    res.status(200);
    res.send();
  } catch (e) {
    console.error(e);
    handleError(e, res);
  }
}

async function splitGroups(req, res) {
  try {
    const address = req.body.address;
    await sbVote.splitGroups(address);
    res.status(200);
    res.send();
  } catch (e) {
    handleError(e, res);
  }
}

async function precomputeMPC(req, res) {
  try {
    const address = req.body.address;
    const result = await sbVote.precomputeMPCkeys(address);
    res.body = { result };
    res.status(200);
    res.send();
  } catch (error) {
    handleError(
      { status: 500, message: "Operation failed due to an internal error" },
      res
    );
  }
}

async function computeMPCs(req, res) {
  try {
    const address = req.body.address;
    await sbVote.computeMPCKeys(address);
    res.status(200);
    res.send();
  } catch (error) {
    handleError(
      { status: 500, message: "Operation failed due to an internal error" },
      res
    );
  }
}

async function ComputeBlindedVotesSum(req, res) {
  try {
    const address = req.body.address;
    const result = await sbVote.computeBlindedVotesSum(address);
    res.body = { result };
    res.status(200);
    res.send();
  } catch (error) {
    handleError(
      { status: 500, message: "Operation failed due to an internal error" },
      res
    );
  }
}

async function computeGrouptallies(req, res) {
  try {
    const address = req.body.address;
    const fastECmulAddress = req.body.fastECmulAddress;
    const ECaddress = req.body.ECaddress;
    const result = await sbVote.computeGroupTallies(address, fastECmulAddress, ECaddress);
    res.body = { result };
    res.status(200);
    res.send();
  } catch (error) {
    handleError(
      { status: 500, message: "Operation failed due to an internal error" },
      res
    );
  }
}

async function finishSetup(req, res) {
  try {
    const address = req.body.address;
    sbVote.finishSignUp(address);
    res.status(200);
    res.send();
  } catch (e) {
    handleError(e, res);
  }
}
async function repairVotes(req,res){
  try{
    const address = req.body.address;
    sbVote.prepareToRepairVotes(address);
    res.status(200);
    res.send();
  }catch(e){
    handleError(e, res);
  }
}

// #endregion

// #region Election Management
async function createElection(req, res) {
  try {
    const electionObject = req.body;
    const election = await sbVote.deployContracts(electionObject);
    await db.createElection(election);
    scheduleElectionEvents(election);
    sbVote.sendStageEmail(sbVote.stages.SETUP, election.mainVotingAddress);
    res.json({ address: election.mainVotingAddress });
    res.status(200);
    res.send();
  } catch (e) {
    handleError(e, res);
  }
}

async function getElections(req, res) {
  try {
    const token = JWTService.decode(req.cookies.accessToken).uid;
    const elections = await db.getAllElections(token);
    if (elections) {
      res.status(200);
      res.json(
        elections.map((election) => ({
          ...election,
          id: election._id.toString(),
          candidates: election.candidates.map((candidate, i) =>({index: i, ...candidate}))
        }))
      );
    } else {
      res.status(200);
      res.json({ message: "no active elections found" });
    }
    res.send();
  } catch (e) {
    handleError(e);
  }
}
// #endregion

// #region Middleware
function isAuthorized(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return anauthorized(req, res);
  }
  try {
    const { valid, expired, expirationDate } = JWTService.verifyJwt(token);
    if (next) {
      next();
    }

    return { valid: valid && !expired, expirationDate };
  } catch (error) {
    return anauthorized(req, res);
  }
}

function isAdmin(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return anauthorized(req, res);
  }

  try {
    const { uid } = JWTService.decode(token);
    db.findAccount({ _id: uid }).then((user) => {
      if (user.role === "admin") {
        return next();
      } else {
        return anauthorized(req, res);
      }
    });
  } catch (error) {
    return anauthorized(req, res);
  }
}

async function isUserAdmin(req, res) {
  try {
    const { email } = req.body;
    const user = await db.findAccount({ email });
    const isAdmin = user?.role === "admin";
    res.status(200).json({ isAdmin });
  } catch (error) {
    handleError(error, res);
  }
}

async function anauthorized(req, res) {
  res.status(401);
  res.json({ message: "You are anauthorized to perform this action" });
}

async function deserializeUser(req, res, next) {
  const accessToken =
    get(req, "cookies.accessToken") ??
    get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  const refreshToken =
    get(req, "cookies.refreshToken") ?? get(req, "headers.x-refresh");

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = jwt.verifyJwt(accessToken);

  if (decoded) {
    req.locals = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await db.reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);

      res.cookie("accessToken", newAccessToken, {
        maxAge: 900000,
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false,
      });
    }

    const result = jwt.verifyJwt(newAccessToken);
    res.locals.user = result.decoded;
    return next();
  }

  return next();
}
// #endregion

module.exports = app;
