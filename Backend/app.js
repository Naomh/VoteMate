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

const app = express();

const Calendar = require("./utils/calendar");
const calendar = new Calendar();

init();
//deployElection('ElectionA', ['kocour','lišák', 'kohout','myšák'])
//deployElection('ElectionB', ['Pepa','Honza', 'Adam', 'Rudolf', 'Květoslav'])

app.use(
  cors({
    origin: ["http://localhost:4200", cfg.url],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyparser.json({ limit: "50mb" }));
//app.use(deserializeUser);

app.get("/GoogleClient", getGoogleClient);
app.get("/api/session/oauth/google", googleOAuthHandler);
app.get("/verify", verifyAccount);
app.post("/register", register);
app.post("/login", login);
app.post("/resetPW", resetPassword)
app.post("/verifyCookie", verifyCookie);
app.post("/reissue", reissueSession);
app.post("/enrollVoters", isAuthorized, enrollVoters);
app.post("/enrollVoter", isAuthorized, enrollVoter);
app.post("/createElection", isAuthorized, createElection);
app.post("/getElections", isAuthorized, getElections);

app.post("/submitVote", isAuthorized, submitVote);
app.post("/splitGroups", isAuthorized, splitGroups);
app.post("/finishSetup", isAuthorized, finishSetup);
app.post("/precomputeMPC", isAuthorized, precomputeMPC);
app.post("/computeMPCs", isAuthorized, computeMPCs);
app.post("/computeBlindedVotesSum", isAuthorized, ComputeBlindedVotesSum);
app.post("/computeGroupTallies", isAuthorized, computeGrouptallies);

async function init() {
  await db.connect();
  web3.eth.accounts.wallet.add(authorityAcc);
  //assignElections();
  await redeploy();
  //db.createElection('Test', ['Jenda', 'Alena', 'Karel'], '0xA8aBf213F4E18c5796c66f4225E03Fc47D6977A3', '0x72Ca4FA730991EED9A2602a11921876bE1d04bdF', '0x973766DDc9Ff2faAeee43a9b6d0762d66Bb913a0', '0x123259B1451b9d88352BBDdfc8ACA66B681333a1', [], 3, 100)
}


async function redeploy() {
  try {
    const elections = await db.getAllElections();

    for (const election of elections) {
      const address = election.mainVotingAddress;

      const code = await web3.eth.getCode(address);
      if (code === "0x") {
        const updatedElection = await sbVote.deployContracts(election);
        db.updateElection(election._id, updatedElection);
      }

      const startEvent = {
        date: election.start,
        fn: () => sbVote.enrollVoters(election.address),
      };
      calendar.addEvent(startEvent);

      const endEvent = {
        date: election.end,
        fn: () => sbVote.tally(election.address),
      };
      calendar.addEvent(endEvent);
    }
  } catch (e) {
    console.error(e);
  }
}

function getGoogleClient(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.json({
    clientId: OAuthConf.ClientID,
    redirectURL: OAuthConf.RedirectURL,
  });
  res.status(200);
}

function handleError(error, res) {
  if (!error?.status) {
    return res.status(500).json({ message: "internal error" });
  }
  return res.status(error.status).json({ message: error.message });
}

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
    const result = await setAccessCookie(req, res, uid);

    return result.status(200).send();
  } catch (error) {
    return handleError(error, res);
  }
}

async function submitVote(req, res) {

  try{
    const { address, vote } = req.body;
    const result = await sbVote.submitVote(address, vote);
    res.status(200).json({ message: "OK" }).send();
  }catch(e){
    console.log(e);
    return handleError(e, res);
  }
}

async function resetPassword(req, res){
  try{
    const email = req.body.email;
    const account = await db.findAccount({email})
    if(account){
      const token = await db.createResetPWToken(account._id)
      mailer.sendResetPwEmail(email, token.resetToken);
    }
  }catch(e){
    console.error(e);
    return handleError(error, res);
  }
  finally{
    res
    .status(200)
    .send();
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

    await setAccessCookie(req, res, user._id);
    res.status(200).json({ message: "Ok" }).redirect(config.url).send();
  } catch (error) {
    handleError(error, res);
  }
}

async function setAccessCookie(req, res, uid) {
  try {
    const refreshToken = JWTService.signJwt(
      { uid: uid },
      { expiresIn: 30 * 24 * 60 * 60 * 1000 } // 7 days
    );
    const hashedRefreshToken = db.generatePasswordHash(refreshToken);
    const session = await db.createSession(
      uid,
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
    await setAccessCookie(req, res, uid);
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

    await setAccessCookie(req, res, user.uid);
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

async function registerWallet(req, res) {
  try {
    const user = await db.findAccount({ uid: req.locals.uid });

    if (!user.status) {
      throw {
        status: 401,
        message:
          "Only verified users can register a wallet. Please verify your account",
      };
    }

    if (user.walletStatus) {
      throw {
        status: 401,
        message: "A wallet has been already registered from this account.",
      };
    }

    await db.createWallet(req.body.adress);
    await db.findAndUpdateAccount({ uid: user.uid }, { walletStatus: true });
    res.status(200).json({ message: "OK" }).send();
  } catch (e) {
    handleError(e, res);
  }
}

function isAuthorized(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return anauthorized(req, res);
  }
  try {
    const { valid, expired, expirationDate } = JWTService.verifyJwt(token);
    console.log(valid, expired, expirationDate);
    if (next) {
      next();
    }

    return { valid: valid && !expired, expirationDate };
  } catch (error) {
    return anauthorized(req, res);
  }
}

async function anauthorized(req, res) {
  res.status(401);
  res.json({ message: "You are anauthorized to perform this action" });
}

async function createElection(req, res) {
  try {
    const electionObject = req.body;
    const election = await sbVote.deployContracts(electionObject);
    db.createElection(election);
    res.json({ address: election.mainVotingAddress });
    res.status(200);
    res.send();
  } catch (e) {
    handleError(e, res);
  }
}

async function getElections(req, res) {
  try {
    const elections = await db.getAllElections();

    if (elections) {
      res.status(200);
      res.json(
        elections.map((election) => ({
          id: election._id.toString(),
          mainVotingAddress: election.mainVotingAddress,
          ECaddress: election.ECaddress,
          fastECmulAddress: election.fastECmulAddress,
          votingFuncAddress: election.votingFuncAddress,
          votingCallsAddress: election.votingCallsAddress,
          description: election.description,
          name: election.name,
          mpcBatchSize: election.mpcBatchSize,
          rmBatchSize: election.rmBatchSize,
          candidates: election.candidates.map((candidate, index) => ({
            name: candidate.name,
            bio: candidate.bio,
            party: candidate.party,
            index,
          })),
          parties: election.parties,
          start: election.start,
          end: election.end,
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

async function enrollVoter(req, res) {
  try {
    const { contract, wallet } = req.body;
    const election = db.addVoter(contract, wallet);
    if (election) {
      res.status(200);
      res.json({ message: "Ok" });
      res.send();
    }
  } catch (e) {
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
    const result = await sbVote.computeMPCKeys(address);
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

async function ComputeBlindedVotesSum(req, res) {
  try {
    console.log("computeBlindedVotesSum");
    const address = req.body.address;
    const result = await sbVote.computeBlindedVotesSum(address);
    res.body = { result };
    res.status(200);
    res.send();
  } catch (error) {
    console.log(error);
    handleError(
      { status: 500, message: "Operation failed due to an internal error" },
      res
    );
  }
}

async function computeGrouptallies(req, res) {
  try {
    const address = req.body.address;
    const ECaddress = req.body.ECaddress;
    const result = await sbVote.computeGroupTallies(address, ECaddress);
    res.body = { result };
    res.status(200);
    res.send();
  } catch (error) {
    console.log(error);
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

module.exports = app;
