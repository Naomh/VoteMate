var MainVotingC = artifacts.require("MainVotingC");
var VotingFunc = artifacts.require("VotingFunc");
var VotingCalls = artifacts.require("VotingCalls");
var VotingBoothDeployer = artifacts.require("VotingBoothDeployer");
const EC = artifacts.require("EC");
const FastEcMul = artifacts.require("FastEcMul");

var config = require("../lib/config.js");
var Authority = require("../lib/authority.js");

var auth = new Authority(
    config.CANDIDATES_CNT, 
    config.VOTERS_CNT,
    config.Gx,
    config.Gy,
    config.PP,
    config.NN,
    config.GROUPS_CNT, 
    config.FAULTY_VOTERS
);

module.exports = function (deployer, network, accounts) {
    var authority_addr = accounts[0];


    deployer.deploy(EC).then(() => {
        console.log("EC address: ", EC.address);
    });

    deployer.link(EC, FastEcMul);
    deployer.deploy(FastEcMul).then(() => {
        console.log("FastEcMul address: ", FastEcMul.address);
    });
    deployer.link(EC, MainVotingC);
    deployer.link(FastEcMul, MainVotingC);
    
    deployer.link(EC, VotingFunc);
    deployer.link(FastEcMul, VotingFunc);

    deployer.link(EC, VotingCalls);
    deployer.link(FastEcMul, VotingCalls);

    deployer.link(EC, VotingBoothDeployer);
    deployer.link(FastEcMul, VotingBoothDeployer);
    deployer.deploy(VotingBoothDeployer, {from: authority_addr}).then(() => {
        console.log("VotingBoothDeployer address: ", VotingBoothDeployer.address)
        console.log('candGens', auth.candidateGens)
        deployer.deploy(MainVotingC, ['Jenda', 'Alena', 'Karel'], auth.candidateGens, config.MPC_BATCH_SIZE, config.RM_BATCH_SIZE, 
            VotingBoothDeployer.address, {from: authority_addr}).then(() => {
            console.log("MainVotingC address: ", MainVotingC.address);
        })
    });
    //deployer.deploy(MainVotingC, auth.candidates, auth.candidateGens, config.MPC_BATCH_SIZE, {from: authority_addr, gas: 12.5 * 1000 * 1000});

    deployer.deploy(VotingFunc, {from: authority_addr}).then(() => {
        console.log("VotingFunc address: ", VotingFunc.address);
    });
    deployer.deploy(VotingCalls, {from: authority_addr}).then(() => {
        console.log("VotingCalls address: ", VotingCalls.address);
    });

};