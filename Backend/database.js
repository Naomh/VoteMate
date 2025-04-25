const mongo = require("mongoose");
const connection = "mongodb://127.0.0.1/SBvote"
;
const crypto = require("crypto");
const { error } = require("console");

const electionModel = require("./db-models/election.model");
const accountModel = require("./db-models/account.model");
const sessionModel = require("./db-models/session.model");
const walletModel = require("./db-models/wallet.model");
const resetPasswordModel = require("./db-models/resetPasswordToken.model")

class db {
  constructor() {
    this.electionModel = electionModel;
    this.accountModel = accountModel;
    this.sessionModel = sessionModel;
    this.walletModel = walletModel;
    this.resetPasswordModel = resetPasswordModel;
  }

  // #region GENERAL
  async connect() {
    const interval = setInterval(() => {
      mongo
        .connect(connection, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("connected successfully!");
          clearInterval(interval);
        })
        .catch((err) => {
          console.log("connecttion failed!", err);
          console.log("Next attempt in 5 secconds.");
        });
    }, 5000);
  }

  throwInternalError(error) {
    console.log(error);
    throw { status: 500, message: `Internal Server Error.` };
  }

  generatePasswordHash(password) {
    return crypto.createHash("sha512").update(password).digest("hex");
  }
  // #endregion

  // #region ACCOUNT
  async createVoter(name, email, password) {
    const voter = await this.accountModel.findOne({ email: email });
    if (voter) {
      throw { status: 409, message: "User with this email already exists." };
    }
    const verificationCode = crypto.randomBytes(25).toString("hex");
    await this.accountModel.findOneAndUpdate(
      {
        email: email,
      },
      {
        email: email,
        name: name,
        password: this.generatePasswordHash(password),
        authType: "email",
        verificationCode: verificationCode,
        status: false,
        WalletStatus: false,
      },
      {
        upsert: true,
        new: true,
      }
    );
    return verificationCode;
  }

  async findAccount(query) {
    return await this.accountModel.findOne(query).lean();
  }

  findAndUpdateAccount(query, update, options = {}) {
    try {
      return this.accountModel.findOneAndUpdate(query, update, options);
    } catch (error) {
      this.throwInternalError(error);
    }
  }

  async getVoterCount() {
    return await this.accountModel.countDocuments({ walletStatus: true });
  }

  async login(email, password) {
    const user = await this.accountModel.findOne({ email: email });
    if (!user || this.generatePasswordHash(password) !== user.password) {
      throw {
        status: 401,
        message: "Invalid email or password. Please try again.",
      };
    }
    if (user.authType === "oauth") {
      throw {
        status: 403,
        message:
          "This account is registered using OAuth. Please log in using your Google account.",
      };
    }
    return user._id;
  }

  verifyAccount(code) {
    return this.accountModel.findOneAndUpdate(
      { verificationCode: code },
      { status: true, verificationCode: "verified" }
    );
  }

  createResetPWToken(uid){
    const result = [];
    while (result.length < 6) {
      const code = Math.floor(Math.random() * 75) + 48;
      if (
        (code >= 48 && code <= 57) || 
        (code >= 65 && code <= 90) || 
        (code >= 97 && code <= 122)
      ) {
        result.push(String.fromCharCode(code));
      }
    }
    const token = result.join('');

    const entry = new resetPasswordModel({uid, resetToken: token });
    return entry.save();
  }
  // #endregion
  async findResetPWToken(token) {
    const PwToken = await this.resetPasswordModel.findOne({ resetToken: token }).lean();
    if (!PwToken) {
      throw { status: 404, message: "Token not found." };
    }
    await resetPasswordModel.deleteOne({ resetToken: token });
    return PwToken;
  }

  setNewPassword(pwToken, newPassword) {
    const uid = pwToken.uid;
    const hash = this.generatePasswordHash(newPassword);
    console.log("New password hash:", hash);
    return this.accountModel.findOneAndUpdate(
      { _id: uid },
      { password: hash },
      { new: true })
  }

  // #region SESSION
  async createSession(userId, ip, userAgent, refreshToken) {
    const session = await this.sessionModel.create({
      uid: userId,
      userAgent: userAgent,
      ipAddress: ip,
      refreshToken: refreshToken,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });

    return session.toJSON();
  }

  updateSession(query, update) {
    return this.sessionModel.updateOne(query, update);
  }

  findSessions(query) {
    return this.sessionModel.find(query).lean();
  }

  findSession(refreshToken) {
    return this.sessionModel.findOne({ refreshToken: refreshToken }).lean();
  }

  removeSessions(uid) {
    return this.sessionModel.deleteMany({ uid: uid });
  }
  // #endregion

  // #region WALLET
  findWallet(query) {
    return this.walletModel.findOne(query);
  }

  async createWallet(address) {
    return await this.walletModel.findOneAndUpdate(
      {
        address: address,
      },
      {
        address: address,
      },
      {
        upsert: true,
        new: true,
      }
    );
  }

  async getVoterWallets(skip = 0, takeUntil = -1) {
    if (takeUntil > 0) {
      return await this.walletModel.find().skip(skip).limit(takeUntil);
    } else {
      return await this.walletModel.find().skip(skip);
    }
  }
  // #endregion

  // #region ELECTION
  async createElection(election) {
    try {
      const newElection = new this.electionModel({
        ...election,
      });

      const savedElection = await newElection.save();
      console.log("Election created:", savedElection);
      return savedElection;

    } catch (error) {
      console.error("Error creating election:", error);
      throw error;
    }
  }

  async updateElection(key, election) {
    try {
      const updatedElection = await this.electionModel.findOneAndUpdate(
        { _id: key },
        {
          ECaddress: election.ECaddress,
          mainVotingAddress: election.mainVotingAddress,
          fastECmulAddress: election.fastECmulAddress,
          votingBoothDeployerAddress: election.votingBoothDeployerAddress,
          votingCallsAddress: election.votingCallsAddress,
          votingFuncAddress: election.votingFuncAddress,
        },
        { upsert: true }
      );
      //console.log(updatedElection);
      return updatedElection;
    } catch (error) {
      console.log("Error updating election", error);
      throw error;
    }
  }

  async addVoter(contractAddress, voterAddress) {
    try {
      const updatedElection = await this.electionModel.findOneAndUpdate(
        { mainVotingAddress: contractAddress },
        { $addToSet: { voters: voterAddress } },
        { new: true }
      );
      console.log("Voter added:", updatedElection);
      return updatedElection;
    } catch (error) {
      console.error("Error adding voter:", error);
      throw error;
    }
  }

  deleteElection(address) {
    try {
      return this.electionModel.findOneAndDelete({
        mainContractAddress: address,
      });
    } catch (error) {
      console.error("Error deleting election:", error);
      throw error;
    }
  }

  getAllElections() {
    try {
      return this.electionModel.find();
    } catch (error) {
      console.error("Error fetching all elections:", error);
      throw error;
    }
  }
  async findElection(address) {
    try {
      return this.electionModel.findOne({ mainVotingAddress: address });
    } catch (error) {
      console.error("Error fetching election:", error);
      throw error;
    }
  }
  // #endregion

}

module.exports = new db();
