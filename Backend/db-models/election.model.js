const mongo = require("mongoose");

const candidateSchema = new mongo.Schema({
  name: String,
  index: Number,
  party: String,
  bio: String,
});

const partySchema = new mongo.Schema({
  name: String,
  acronym: String,
  eRef: Number,
  vRef: Number,
});

const electionSchema = new mongo.Schema({
  id: {
    type: mongo.Schema.Types.ObjectId,
    default: new mongo.Types.ObjectId(),
  },
  name: String,
  description: String,
  candidates: [candidateSchema],
  ECaddress: String,
  mainVotingAddress: String,
  votingBoothDeployerAddress: String,
  fastECmulAddress: String,
  votingFuncAddress: String,
  votingCallsAddress: String,
  candidateGens: [{ type: Number }],
  mpcBatchSize: Number,
  rmBatchSize: Number,
  start: String,
  end: String,
  parties: {
    type: [partySchema],
    default: [],
  },
  voters: {
    type: [{ type: String }],
    default: [],
  },
});

module.exports = mongo.model("Elections", electionSchema);
