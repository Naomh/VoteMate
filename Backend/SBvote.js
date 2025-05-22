// #region Imports
const MainContract = require("./contracts/MainVotingC.json");
const BoothDeployerContract = require("./contracts/VotingBoothDeployer.json");
const BoothContract = require("./contracts/VotingBoothC.json");
const ECcontract = require("./contracts/EC.json");
const FastECmulContract = require("./contracts/FastEcMul.json");

const config = require("./config.json");
const Authority = require("../smartcontracts/lib/authority.js");
const Utils = require("../smartcontracts/lib/utils.js");
const ec = require('simple-js-ec-math');

const { deployContract, link } = require("./utils/contractDeployer.js");
const db = require("./database.js");

const Web3 = require("web3");
const web3 = new Web3(config.network);
const authorityAcc = web3.eth.accounts.privateKeyToAccount(config.account_pk);
const faucetAcc = web3.eth.accounts.privateKeyToAccount(config.faucet_pk);

const utils = new Utils();
const _ = require('lodash');
const mailservice = require("./utils/mailservice.js");
const { bruteforce } = require("./utils/bruteforce.js");


const G = new ec.ModPoint(BigInt(config.Gx), BigInt(config.Gy));
const curve = new ec.Curve(0n, 7n, BigInt(config.NN) , BigInt(config.PP), G);
// #endregion


const stages = {SETUP: 0n, SIGNUP: 1n, PRE_VOTING: 2n, VOTING: 3n, FAULT_REPAIR: 4n, TALLY: 5n};
// #region *Utility Functions*
// ***
// ***
// ***

// #region sendEth
async function sendEth(address) {
  console.log("[sendEth] Entered");
  if (!Web3.utils.isAddress(address)) {
    return false;
  }

  const tx = {
    from: faucetAcc.address,
    to: address,
    value: config.gas_amount_to_user
  };

  try {
    const gas = await web3.eth.estimateGas(tx);
    await web3.eth.sendTransaction({ ...tx, gas });
    console.log("[sendEth] Completed");
    return true;
  } catch (e) {
    console.error(e);
    console.log("[sendEth] Completed");
    return false;
  }
}
// #endregion

// #region sendStageEmail
async function sendStageEmail(stage, address){
  console.log('[sendStageEmail] entered');
  const election = await db.findElection(address);
  const voters = await db.getEmailsOfRegisteredUsers(address);
  const name = election.name;
  const id = election._id;
  try{

    for(const voter of voters){
      switch(stage){
        case stages.SETUP:{
          mailservice.sendNewElectionNotification(voter, name, id, election.startSignUp);
          break;
        }
        case stages.SIGNUP:{
          mailservice.sendSignUpNotification(voter, name, id, election.start);
          break;
        }
        case stages.VOTING:{
          mailservice.sendVotingNotification(voter, name, id, election.end);
          break;
        }
        case stages.FAULT_REPAIR:{
          mailservice.sendFaultRepairNotification(voter, name, id);
          break;
        }
        case stages.TALLY:{
          mailservice.sendTallyNotification(voter, name, id);
          break;
        }
      }
    }
  } catch(e){
    console.error(e);
  }
  console.log('[sendStageEmail] Completed');
}
// #endregion

// #region changeStage
async function changeStage(address, stage) {
  console.log("[changeStage] Entered"); 
  const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
  const method = mainVotingC.methods.changeStage(stage);
  const tx = sendTransaction(method);
  sendStageEmail(stage, address);
  console.log("[changeStage] Completed");
  return tx;
}
// #endregion

// #region sendTransaction
async function sendTransaction(method, address = authorityAcc.address) {
  console.log("[sendTransaction] Entered");
  try {
    const gas = await method.estimateGas({ from: address });
    const tx = await method.send({ from: address, gas });
    console.log("[sendTransaction] Completed");
    return tx;
  } catch (e) {
    console.error(e);
    console.log("[sendTransaction] Completed");
    return false;
  }
}
// #endregion

// #region getboothCnt
async function getboothCnt(mainVotingC) {
  console.log("[getboothCnt] Entered");
  const voterCnt = await mainVotingC.methods.getCntOfEligibleVoters().call();
  const boothCnt = Math.ceil(voterCnt / config.split_batch);
  console.log("[getboothCnt] Completed");
  return boothCnt;
}
// #endregion

// #endregion

// #region *Voting Functions*
// ***
// ***
// ***


// #region computeBlindedVotesSum
async function computeBlindedVotesSum(address) {
  console.log("[ComputeBlindedVotesSum] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  const boothCnt = await getboothCnt(mainVotingC);

  for(let i = 0; i < boothCnt; i ++){
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    )
    while(true){
      const method = boothContract.methods.computeBlindedVotesSum();
      const tx = await sendTransaction(method);

      if(tx.events.BlindedVotesSumComputed){
        console.log('BlindedVotesSumComputed');
        break;
      }
    }
  }
  console.log("[ComputeBlindedVotesSum] Completed");
}
// #endregion

// #region bruteforceTally
async function bruteforceTally(address, ECaddress){
  console.log("[BruteforceTally] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  const ecC = await new web3.eth.Contract(ECcontract.abi, ECaddress);

  const boothCnt = await getboothCnt(mainVotingC);
  const candidatesCnt = Number(await mainVotingC.methods.getCntOfCandidates().call());
  
  const candGens = [];
  for(let i = 0; i < candidatesCnt; i++){
    const x = BigInt(await mainVotingC.methods.candidateGens(i, 0).call());
    const y = BigInt(await mainVotingC.methods.candidateGens(i, 1).call());
    candGens.push({x, y});
  }


  const boothTallies = [];
  for(let i = 0; i < boothCnt; i++){
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    
    const voteCnt = Number(await boothContract.methods.getCntOfBlindedVotes().call());

    const x = BigInt(await boothContract.methods.blindedVotesSum(0).call());
    const y = BigInt(await boothContract.methods.blindedVotesSum(1).call());
    const z = BigInt(await boothContract.methods.blindedVotesSum(2).call());
    const {0: x_affine, 1: y_affine} = await ecC.methods.toAffine(x, y, z, config.PP).call();
    const bvoteSum = {x: BigInt(x_affine), y: BigInt(y_affine)};

    const generator = bruteforce(voteCnt, candidatesCnt);
    for(const results of generator){
      console.log(results);
      let sum = curve.g;
      for(let j = 0; j < results.length; j++){
        const factor = BigInt(results[j]);
        if(factor === 0n){
          continue;
        }
        const partial = curve.multiply(candGens[j], factor);
        sum = sum ? curve.add(sum, partial) : partial;
      }
      if(bvoteSum.x === sum.x && bvoteSum.y === sum.y){
        boothTallies.push(results);
        break;
      }
    }
  }

  console.log("[bruteforceTally] Completed");
  return boothTallies;
}
// #endregion

// #region computeGroupTallies
async function computeGroupTallies(address, fastECaddress, ecAddress) {
  console.log("[computeGroupTallies] Entered");
  const tallies = await bruteforceTally(address, ecAddress);

  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  const fastEC = await new web3.eth.Contract(FastECmulContract.abi, fastECaddress);

  const candidatesCnt = await mainVotingC.methods.getCntOfCandidates().call();
  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );

    const boothTally = tallies[i];
    let decomp = [];
    for (let j = 0; j < candidatesCnt; j++) {
      const candidateTally = boothTally[j];
      console.log(`[computeGroupTallies] Booth ${i}, Candidate ${j}, Booth Tally:`, candidateTally);

      const tmpItems = await fastEC.methods.decomposeScalar(
        Web3.utils.numberToHex(candidateTally.toString(10)),
        config.NN,
        config.lambda
      ).call();

      console.log(`[computeGroupTallies] Booth ${i}, Candidate ${j}, Decomposed:`, tmpItems);
      decomp.push(BigInt(tmpItems[0]));
      decomp.push(BigInt(tmpItems[1]));
    }

    const invModArrs = await boothContract.methods.modInvCache4Tally(
      utils.BIarrayToHexUnaligned(decomp)
    ).call({ from: authorityAcc.address });

    console.log(`[computeGroupTallies] Booth ${i}, invModArrs:`, invModArrs);

    const method = boothContract.methods.computeTally(
      utils.BIarrayToHexUnaligned(decomp),
      invModArrs
    );
    await sendTransaction(method);
  }

  let finalTallyStr = [];
  const finalTally = await mainVotingC.methods.getFinalTally().call({ from: authorityAcc.address });
  console.log(finalTally);
  for (let i = 0; i < candidatesCnt; i++) {
    var comp = (BigInt(finalTally[2 * i].toString()) + BigInt(finalTally[2 * i + 1].toString()) * BigInt(config.lambda)) % BigInt(config.NN);
    finalTallyStr.push(comp.toString());
  }
  console.log("Final Tally:", finalTallyStr);

  console.log("[computeGroupTallies] Completed");
}
// #endregion

// #region submitVote
async function submitVote(address, vote) {
  boothContract = await new web3.eth.Contract(BoothContract.abi, address);
  const method = boothContract.methods.recordVote(Number(vote));
  const tx = await sendTransaction(method);
  console.log(tx);
}
// #endregion

// #region precomputeMPCkeys
async function precomputeMPCkeys(address) {
  console.log("[precomputeMPCkeys] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  
  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    
 //   const rightMarkersComputed = await boothContract.methods.rightMarkersComputed().call();

    while (true) {
      try{
          const method = boothContract.methods.buildRightMarkers4MPC();
          const tx = await sendTransaction(method);
          if (!tx) {
            return false;
          }      
        
          if (tx.events?.RightMarkersComputed) {
            console.log('***rightMarkersComputed');
            break;
          }
        }catch(e){
          console.error(e);
        }
      }
  }
  console.log("[precomputeMPCkeys] Completed");
}
// #endregion

// #region finishSignUp
async function finishSignUp(address) {
 // await submitPKs(address)

  console.log("[finishSignUp] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    
    const stage = boothContract.methods.getBoothStage().call()
    if(stage === stages.SIGNUP){
    const method = boothContract.methods.changeStageToPreVoting();
    await sendTransaction(method);
  }
  }
  changeStage(address, stages.PRE_VOTING);
  console.log("[finishSignUp] Completed");
}
// #endregion

// #region computeMPCKeys
async function computeMPCKeys(address) {
  console.log("[computeMPCKeys] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    const boothVotersCnt = await boothContract.methods.getCntOfSubmitedPKs().call();


    const g_x = utils.toPaddedHex(config.Gx, 32);
    const g_y = utils.toPaddedHex(config.Gy, 32);
    let act_left = [g_x, g_y, 1];
    console.log('boothVotersCnt:', boothVotersCnt);
    for (let j = 0; j < boothVotersCnt; j += config.mpc_batch_size) {
      try {

        j = Math.min(j, boothVotersCnt - 1);
        const invModArrsMPC = await boothContract.methods
        .modInvCache4MPCBatched(j, act_left)
        .call();

        act_left = invModArrsMPC[2];

        const method = boothContract.methods.computeMPCKeys(
          invModArrsMPC[1],
          invModArrsMPC[0]
        );
        await sendTransaction(method);
      } catch (e) {
        console.error(e);
      }
    }
  }
  changeStage(address, stages.VOTING);
}
// #endregion

// #region enrollVoters
async function enrollVoters(address) {
  console.log("[enrollVoters] Entered");
  const election = await db.findElection(address);
  const voters_c = election.voterCount;
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  for (let i = 0; i < voters_c; i += config.enroll_batch) {
    let cnt =
      i + config.enroll_batch - 1 < voters_c
        ? config.enroll_batch
        : voters_c % config.enroll_batch;

    let batch = await db.getVotersByRange(address, i, cnt);
    const method = mainVotingC.methods.enrollVoters(batch);

    const result = await sendTransaction(method);
    if (result) {
      for(const address of batch){
        await sendEth(address);
      } 
    }
  }

 // await enrollVotersTest(address);
  console.log("[enrollVoters] Completed");
}
// #endregion

// #region splitGroups
async function splitGroups(address) {
  console.log("[splitGroups] Entered");
  const election = await db.findElection(address);
  const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
  const voterCnt = await mainVotingC.methods.getCntOfEligibleVoters().call();

  for (let i = 0; i < voterCnt; i += config.split_batch) {
    const method = mainVotingC.methods.splitGroups(i, config.split_batch, 1);
    const tx = await sendTransaction(method);
  }

  for (
    let i = 0;
    i < Math.ceil(voterCnt / config.split_batch);
    i += config.deploy_batch
  ) {
    const method = mainVotingC.methods.deployBooths(
      i,
      config.deploy_batch,
      election.votingFuncAddress,
      election.votingCallsAddress
    );
    await sendTransaction(method);
  }
  await changeStage(address, stages.SIGNUP);
  console.log("[splitGroups] Completed");
}
// #endregion



// #region prepareToRepairVotes
async function prepareToRepairVotes(address) {
  console.log('[prepareToRepairVotes] Entered');
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  let flag = false; // if any of the booth requires a recovery phase

  const boothCnt = await getboothCnt(mainVotingC);
  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );

    const pkCnt = await boothContract.methods.getCntOfSubmitedPKs().call();
    const bvoteCnt = await boothContract.methods.getCntOfBlindedVotes().call();

    if(pkCnt != bvoteCnt){
      continue;
    }
      flag = true;
      const method = boothContract.methods.changeStageToFaultRepair();
      const tx = await sendTransaction(method);

    const notVotedIDxs = tx.events['MissingVotesEvent'].returnValues.notVotedIdxs;
    console.log(`[prepareToRepairVotes] Booth ${i}, notVotedIDxs:`, notVotedIDxs);
  }
  await changeStage(address, stages.FAULT_REPAIR);
  

  console.log('[prepareToRepairVotes] Completed');
  return flag
}
// #endregion

// #region deployContracts
async function deployContracts(election) {
  console.log("[deployContracts] Entered");
  const candidates = election.candidates.map((candidate) => candidate.name);
  const n = candidates.length;

  if (n < 2) {
    throw new Error("election with less than 2 candidates cannot be created");
  }

  const authority = new Authority(
    n,
    10,
    config.Gx,
    config.Gy,
    config.PP,
    config.NN,
    1,
    0
  );

  const ECaddress = await deployContract(ECcontract);

  let fastECmulContract = _.cloneDeep(require("./contracts/FastEcMul.json"));
  fastECmulContract = await link(fastECmulContract, ECcontract.contractName, ECaddress);
  const fastECmulAddress = await deployContract(FastECmulContract);

  let votingFuncContract = _.cloneDeep(require("./contracts/VotingFunc.json"));
  votingFuncContract = await link(votingFuncContract, ECcontract.contractName, ECaddress);
  votingFuncContract = await link(votingFuncContract, fastECmulContract.contractName, fastECmulAddress);
  const votingFuncAddress = await deployContract(votingFuncContract);

  let VotingCallsContract = _.cloneDeep(require("./contracts/VotingCalls.json"));
  VotingCallsContract = await link(VotingCallsContract, ECcontract.contractName, ECaddress);
  VotingCallsContract = await link(VotingCallsContract, fastECmulContract.contractName, fastECmulAddress);
  const votingCallsAddress = await deployContract(VotingCallsContract);

  const boothDeployerAddress = await deployContract(BoothDeployerContract);

  const mainVotingAddress = await deployContract(MainContract, [
    candidates,
    authority.candidateGens,
    config.mpc_batch_size,
    config.rm_batch_size,
    boothDeployerAddress,
  ]);

  const newElection = {
    ...election,
    ECaddress,
    fastECmulAddress,
    boothDeployerAddress,
    mainVotingAddress,
    votingFuncAddress,
    votingCallsAddress,
    mpcBatchSize: 3,
    rmBatchSize: 100,
  };
  console.log("election deployed", election.name, mainVotingAddress);
  console.log("[deployContracts] Completed");
  return newElection;
}
// #endregion

// #endregion

//#region *phases*
// ***
// ***
// ***

// #region initiateSignUpPhase
function initiateSignUpPhase(address){
  return async () => {
    await enrollVoters(address);
    await splitGroups(address);
  }  
}
// #endregion

// #region initiateVotingPhase
function initiateVotingPhase(address){
  return async () => {
    await finishSignUp(address);
    await precomputeMPCkeys(address);
    await computeMPCKeys(address);
  }  
}
// #endregion

// #region initiateTallyPhase
function initiateTallyPhase(address, fastECmulAddress, ecAddress){
  return async () => {
    const repair = await prepareToRepairVotes(address);
    if(repair){
      return {time: 60 * 60 * 1000} //postpone by an hour
    }
    await computeBlindedVotesSum(address);
    await computeGroupTallies(address, fastECmulAddress, ecAddress);
  }  
}
// #endregion

// #endregion
// ***

// #region Exports
module.exports = {
  finishSignUp,
  deployContracts,
  enrollVoters,
  splitGroups,
  precomputeMPCkeys,
  computeMPCKeys,
  computeBlindedVotesSum,
  computeGroupTallies,
  submitVote,
  initiateSignUpPhase,
  initiateVotingPhase,
  initiateTallyPhase,
  prepareToRepairVotes,
  sendStageEmail,
  stages
};
// #endregion
