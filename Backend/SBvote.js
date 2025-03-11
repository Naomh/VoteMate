const MainContract = require("./contracts/MainVotingC.json");
const BoothDeployerContract = require("./contracts/VotingBoothDeployer.json");
const VotingFuncContract = require("./contracts/VotingFunc.json");
const VotingCallsContract = require("./contracts/VotingCalls.json");
const BoothContract = require("./contracts/VotingBoothC.json");
const ECcontract = require("./contracts/EC.json");
const FastECmulContract = require("./contracts/FastEcMul.json");

const config = require("./config.json");
const Authority = require("../smartcontracts/lib/authority.js");
const Utils = require("../smartcontracts/lib/utils.js");

const { deployContract, link } = require("./utils/contractDeployer.js");
const db = require("./database.js");

const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:9545/");
const authorityAcc = web3.eth.accounts.privateKeyToAccount(config.account_pk);
const faucetAcc = web3.eth.accounts.privateKeyToAccount(config.faucet_pk);

const utils = new Utils();

async function sendEth(address) {
  if (!Web3.utils.isAddress(address)) {
    return false;
  }

  const tx = {
    from: faucetAcc.address,
    to: address,
    value: web3.utils.toWei("1", "ether"),
  };

  try {
    const gas = await web3.eth.estimateGas(tx);
    await web3.eth.sendTransaction({ ...tx, gas });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function precomputeMPCkeys(address) {
  console.log('precomputeMPCKeys Entered');
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const voterCnt = Number(
    await mainVotingC.methods.getCntOfEligibleVoters().call()
  );
  const boothCnt = Math.ceil(voterCnt / config.split_batch);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods["booths"](i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );

    let rightMarkersComputed = false;
    while (!rightMarkersComputed) {
      const method = await boothContract.methods.buildRightMarkers4MPC();
      const tx = await sendTransaction(method);

      if (!tx) {
        return false;
      }
      
      if (tx.events?.RightMarkersComputed) {
        rightMarkersComputed = true;
        return true;
      }
    }
  }
}

async function sendTransaction(method) {
  try {
    const gas = await method.estimateGas({ from: authorityAcc.address });
    const tx = await method.send({ from: authorityAcc.address, gas });
    return tx;
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function finishSignUp(address) {
  console.log('finishSignUp entered');
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const voterCnt = Number(
    await Number(mainVotingC.methods.getCntOfEligibleVoters().call())
  );
  const boothCnt = Math.ceil(voterCnt / config.split_batch);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );

    const method = boothContract.methods.changeStageToPreVoting();
    await sendTransaction(method);
  }

  await precomputeMPCkeys(address);
  await computeMPCKeys(address);
}

async function computeMPCKeys(address) {
  console.log('computeMPCKeys entered')
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const voterCnt = Number(
    await mainVotingC.methods.getCntOfEligibleVoters().call()
  );
  const boothCnt = Math.ceil(voterCnt / config.split_batch);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    const boothVotersCnt = await boothContract.methods.getCntOfVoters().call();

    const g_x = utils.toPaddedHex(config.Gx, 32);
    const g_y = utils.toPaddedHex(config.Gy, 32);
    let act_left = [g_x, g_y, 1];

    for (let j = 0; j < boothVotersCnt; j += config.mpc_batch_size) {
  
      const invModArrsMPC = await boothContract.methods.modInvCache4MPCBatched(i, act_left).call();
      act_left = invModArrsMPC[2];

      const method = boothContract.methods.computeMPCKeys(
        invModArrsMPC[1],
        invModArrsMPC[0]
      );
      await sendTransaction(method);
    }
  }
}

async function enrollVoters(address) {
  console.log('enrollVoters entered');
  const election = await db.findElection(address);
  const voters_c = election?.voters.length ?? 0;
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  for (let i = 0; i < voters_c; i += config.enroll_batch) {
    let cnt =
      i + config.enroll_batch - 1 < voters_c
        ? config.enroll_batch
        : voters_c % config.enroll_batch;
    let batch = election.voters.slice(i, cnt);
    const method = mainVotingC.methods.enrollVoters(batch);

    const result = await sendTransaction(method);
    if (result) {
      batch.forEach(async (address) => await sendEth(address));
    }
  }
}

async function splitGroups(address) {
  console.log('splitGroup entered');
  const election = await db.findElection(address);
  const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
  const voterCnt = await mainVotingC.methods.getCntOfEligibleVoters().call();

  for (let i = 0; i < voterCnt; i += config.split_batch) {
    const method = mainVotingC.methods.splitGroups(i, config.split_batch, 1);
    await sendTransaction(method);
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
}

async function deployContracts(election) {
  console.log(election);
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

  const fastECmulContract = require('./contracts/FastEcMul.json');
  link(fastECmulContract, ECcontract.contractName, ECaddress);
  const fastECmulAddress = await deployContract(FastECmulContract);

  const boothDeployerAddress = await deployContract(BoothDeployerContract);

  const mainVotingAddress = await deployContract(MainContract, [
    candidates,
    authority.candidateGens,
    3,
    100,
    boothDeployerAddress,
  ]);
  
  const votingFuncContract = require('./contracts/VotingFunc.json')
  link(votingFuncContract, ECcontract.contractName, ECaddress);
  link(votingFuncContract, fastECmulContract.contractName, fastECmulAddress);
  const votingFuncAddress = await deployContract(VotingFuncContract);

  const VotingCallsContract = require('./contracts/VotingCalls.json');
  link(VotingCallsContract, ECcontract.contractName, ECaddress);
  link(VotingCallsContract, fastECmulContract.contractName, fastECmulAddress);
  const votingCallsAddress = await deployContract(VotingCallsContract);

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
  return newElection;
}

async function tally(address) {
  throw new Error("Not implemented");
}

module.exports = {
  finishSignUp,
  deployContracts,
  enrollVoters,
  splitGroups,
  precomputeMPCkeys,
  tally,
};
