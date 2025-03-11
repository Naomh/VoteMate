// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
//pragma solidity ^0.8.17;
pragma experimental ABIEncoderV2;

import "./VotingBoothC.sol";

// Author: Ivana Stančíková
// Deployer of voting booths
// used by MainVotingC to deploy booth contracts
contract VotingBoothDeployer {
    function deployBooth(
        uint _votersCnt,
        string[] memory _candidates,
        uint[] memory _candidateGens,
        uint _mpcBatchSize,
        uint _mpcRmBatchSize,
        address _mainVotingC,
        address _authority,
        address _votingfunc,
        address _votingcalls
    )
        public
        returns (VotingBoothC)
    {
        VotingBoothC booth = new VotingBoothC(
            _votersCnt,
            _candidates,
            _candidateGens,
            _mpcBatchSize,
            _mpcRmBatchSize,
            _mainVotingC,
            _authority,
            _votingfunc,
            _votingcalls
        );

        return booth;
    }
}