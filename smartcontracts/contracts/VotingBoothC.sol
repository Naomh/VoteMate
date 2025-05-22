pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf), Ivana Stančíková
// Contract for voting booth
// deployed for each group of voters
contract VotingBoothC {

    string[] public candidates;
    uint[2][] public candidateGens;

    uint votersCnt;
    uint[2][] public votersPKs;
    uint[2][] public MpcPKs;

    uint public sizeHash;

    uint[] public notVotedIdxs;
    uint submittedVotersRepair = 0;

    // compute blinded votes sum batching
    uint blindedVotesCnt = 0;
    uint VS_start = 0;
    uint VS_batch = 1000;
    uint[3] public blindedVotesSum;

    int[] tally; // stored as pairs of decomposed scalars

    // Secp256k1 curve parameters
    uint[2] public G = [0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798, 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8]; // common generator for voters - base points
    uint public NN = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141; // modulus for private keys (i.e., order of G)
    uint public PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F; // modulus for public keys (i.e., field size)
    uint public A = 0;
    uint public B = 7;
    uint public Lambda = 0x5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72; // a root of the characteristic polynomial of the endomorphism of the curve
    uint public Beta = 0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee; // constant on the curve (endomorphism)

    // State preservation for batching of MPC key computation
    uint public MPC_start = 0; // idx of the voter that is at the begining of batching sliding window
    uint public MPC_batch; // the size of the batch
    uint[3] public MPC_act_left = [G[0], G[1], 1];
    uint[3][] public MPC_right_markers;

    // Batching right side for MPC computation
    uint public RM_start = 1;
    uint public RM_batch;
    uint[3] public RM_act = [G[0], G[1], 1];

    // Mappings
    mapping(address => bool) public votersWithPK; // mapping of voters that submitted eph. keys
    mapping(address => uint) public votersPKidx; // mapping of addresses of voters to index in votersPKs array
    mapping(uint => uint) public lastRepairedIdx; // last faulty index repaired by voter
    mapping(uint => bool) public submittedRepairKeys;
    mapping(uint => uint[2]) public blindedVotes;
    mapping(uint => uint) votes;

    // Events
    event SingUpFinished();
    event RightMarkersComputed();
    event MPCKeysComputedEvent();
    event MissingVotesEvent(uint[] notVotedIdxs);
    event RepairedBVoteEvent(uint[2] blindedVote);
    event BlindedVotesSumComputed();
    event TallyCompleted(int[] tally);

    // Addrs of contracts and authority
    address public votingFuncAddr;
    address public votingCallsAddr;
    address mainVotingC;
    address authority;

    // Stages
    enum StageEnum { SETUP, SIGNUP, PRE_VOTING, VOTING, FAULT_REPAIR, TALLY }
    StageEnum public stage;

    // Modifiers
    modifier eligibleVoter(address voter) {
        (bool success, bytes memory data) = mainVotingC.call(
            abi.encodeWithSignature("isVoterEligibleInBooth(address)", voter)
        );
        require(success, "isVoterEligibleInBooth() failed.");

        bool ret = abi.decode(data, (bool));
        require(ret, "Not eligible voter.");
        _;
    }

    modifier voterSubmittedPK(address voter) {
        require(votersWithPK[voter], "Voter does not submitted eph. key.");
        _;
    }

    modifier callerIsMainC() {
        require(msg.sender == mainVotingC, "Only main contract can collect tally.");
        _;
    }

    modifier fromAuthority() {
        require(msg.sender == authority, "Only authority can call this function.");
        _;
    }

    modifier notSubmittedRepairKeyYet(uint idx) {
        require(!submittedRepairKeys[idx], "Voter already submitted repair key.");
        _;
    }

    modifier inStage(StageEnum _stage) {
        require(_stage == stage, "Wrong stage detected.");
        _;
    }

    constructor(
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
    {
        mainVotingC = _mainVotingC;
        authority = _authority;
        MPC_batch = _mpcBatchSize;
        RM_batch = _mpcRmBatchSize;

        votingFuncAddr = _votingfunc;
        votingCallsAddr = _votingcalls;

        votersCnt = _votersCnt;

        for (uint i = 0; i < _candidates.length; i++) {
            candidates.push(_candidates[i]);
            votes[i] = 0;
            candidateGens.push([_candidateGens[2*i], _candidateGens[2*i + 1]]);
            tally.push(0);
            tally.push(0);
        }

        stage = StageEnum.SIGNUP;
    }

    // Helper function to handle delegatecall and revert with detailed error message
    function handleDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        (bool success, bytes memory returnData) = target.delegatecall(data);
        if (!success) {
            if (returnData.length > 0) {
                // Extract revert reason from return data
                assembly {
                    let returndata_size := mload(returnData)
                    revert(add(returnData, 32), returndata_size)
                }
            } else {
                revert("delegatecall failed without error message.");
            }
        }
        return returnData;
    }

    // Called by each voter to submit her public key
    function submitVotersPK(uint[2] memory _voterPK)
        public 
        eligibleVoter(msg.sender)
        inStage(StageEnum.SIGNUP)
    {
        votersPKidx[msg.sender] = votersPKs.length;
        votersPKs.push(_voterPK);
        votersWithPK[msg.sender] = true;

        if(votersPKs.length == votersCnt ) {
            stage = StageEnum.PRE_VOTING;
            emit SingUpFinished();
        }
    }

    // Change of stage if not all voters submitted PKs
    function changeStageToPreVoting()
        public
        inStage(StageEnum.SIGNUP)
        fromAuthority()
    {
        stage = StageEnum.PRE_VOTING;
        (bool success, bytes memory data) = mainVotingC.call(abi.encodeWithSignature("changeStageToPreVoting()"));
        require(success, "delegatecall failed.");

        emit SingUpFinished();
    }
  
    // Called by authority repeatedly,
    // precomputes right-side values for MPC keys computation
    function buildRightMarkers4MPC()
        public
        fromAuthority()
        inStage(StageEnum.PRE_VOTING)
    {   
        require(votingFuncAddr != address(0), "votingFuncAddr is not set");
        handleDelegateCall(votingFuncAddr, abi.encodeWithSignature("buildRightMarkers4MPC()"));

        if (RM_start == votersPKs.length) {
            emit RightMarkersComputed();
        }
    }

    // Called by authority (in batches),
    // computes MPC keys for all voters,
    // requires precomputed modular inverses
    // inv_mod_mpc1 - inv mod for right side of substraction
    // inv_mod_mpc2 - inv mod for result (mpc key)
    function computeMPCKeys(uint[] memory inv_mod_mpc2, uint[] memory inv_mod_mpc1)
        public
        fromAuthority()
        inStage(StageEnum.PRE_VOTING)
    {
        handleDelegateCall(
            votingFuncAddr,
            abi.encodeWithSignature("computeMPCKeys(uint256[],uint256[])", inv_mod_mpc2, inv_mod_mpc1)
        );

        if (votersCnt == MpcPKs.length) {
            stage = StageEnum.VOTING;
            emit MPCKeysComputedEvent();
        }
    }
    
    function recordVote(uint vote) 
        public
        fromAuthority() 
    {
        require(vote < candidates.length, 'invalid candidate');
        votes[vote]++;
    }
    

    // Called by voter to submit her vote,
    // requires elements of 1-of-k zero-knowledge proof
    // requires modular inverses for values comapred in proof validation
    function submitVote(
        uint[] memory proof_A,
        uint[] memory proof_B,
        int[] memory proof_r,
        int[] memory proof_d,
        uint[2] memory vote,
        uint[] memory mod_invs
    ) 
        public 
        voterSubmittedPK(msg.sender)
        inStage(StageEnum.VOTING)
    {
        handleDelegateCall(
            votingFuncAddr,
            abi.encodeWithSignature(
                "submitVote(uint256[],uint256[],int256[],int256[],uint256[2],uint256[])",
                proof_A, proof_B, proof_r, proof_d, vote, mod_invs
            )
        );

        if (votersPKs.length == blindedVotesCnt) {
            stage = StageEnum.TALLY;
            (bool s, ) = mainVotingC.call(abi.encodeWithSignature("changeStageToTally()"));
            require(s, "changeStageToTally() call failed.");
        }
    }

    // If not all voters sumbited votes,
    // changes stage to allow vote repairs
    function changeStageToFaultRepair()
        public
        inStage(StageEnum.VOTING)
    {
        stage = StageEnum.FAULT_REPAIR;

        for (uint i = 0; i < votersPKs.length; i++) {
            if(blindedVotes[i][0] == 0){
                notVotedIdxs.push(i);
            }
        }
        emit MissingVotesEvent(notVotedIdxs);
    }

    // Called by voter to repair her vote,
    // requires modular inverses for values comapred in proof validation,
    // requires elements of zero-knowledge proof for each key
    function repairBlindedVote(
        uint[] memory mod_invs,
        int[] memory proof_r,
        int[] memory h_decomp,
        uint[] memory proof_m1,
        uint[] memory proof_m2, 
        uint[] memory blindedKeys,
        uint[] memory faultyIdx,
        uint myIdx
    )
        public
        inStage(StageEnum.FAULT_REPAIR)
        notSubmittedRepairKeyYet(myIdx) 
    {
        handleDelegateCall(
            votingFuncAddr,
            abi.encodeWithSignature(
                "repairBlindedVote(uint256[],int256[],int256[],uint256[],uint256[],uint256[],uint256[],uint256)", 
                mod_invs, proof_r, h_decomp, proof_m1, proof_m2, blindedKeys, faultyIdx, myIdx)
        );

        if(submittedRepairKeys[myIdx] == true) {
            emit RepairedBVoteEvent(blindedVotes[myIdx]);
        }

        // all active voters repaired their blinded votes
        if(votersPKs.length - notVotedIdxs.length == submittedVotersRepair) {
            stage = StageEnum.TALLY;
            (bool s, ) = mainVotingC.call(abi.encodeWithSignature("changeStageToTally()"));
            require(s, "changeStageToTally() call failed.");
        }
    }

    // Called repeatedly to compute sum of all blinded votes
    function computeBlindedVotesSum() public {
        handleDelegateCall(votingFuncAddr, abi.encodeWithSignature("computeBlindedVotesSum()"));

        if (VS_start == votersPKs.length) {
            emit BlindedVotesSumComputed();
        }
    }

    // Verifies tally provided by authority,
    // requires tally (as decomposed scalars) and modular inverses
    function computeTally(int[] memory c_decom, uint[2] memory modinv)
        public
        fromAuthority()
        inStage(StageEnum.TALLY)
    {
        handleDelegateCall(
            votingFuncAddr,
            abi.encodeWithSignature("computeTally(int256[],uint256[2])", c_decom, modinv)
        );

        // inform voters
        emit TallyCompleted(tally);

        // pass result to main contract
        (bool s, ) =  mainVotingC.call(abi.encodeWithSignature("provideBoothTally(int256[])", tally));
        require(s, "changeStageToTally() call failed.");
    }

    // // // Calls // // //
    function getCntOfVoters() public view returns (uint) {
        return votersCnt;
    }
    function getCntOfSubmitedPKs() public view returns (uint) {
        return votersPKs.length;
    }

    function getCntOfMarkersMPC() public view returns (uint) {
        return MPC_right_markers.length;
    }

    function getCntOfMpcPKs() public view returns (uint) {
        return MpcPKs.length;
    }

    function getCntOfBlindedVotes() public view returns (uint) {
        return blindedVotesCnt;
    }

    function getBlindedVote(uint id) public view returns (uint[2] memory) {
        return blindedVotes[id];
    }

    function getBoothStage() public view returns (uint boothStage) {
        return uint(stage);
    }

    function getVotes(uint id) public view  fromAuthority() returns (uint) {
        return votes[id];
    }

    // Precomp of modular inverses for MPC key computation
    // use .call()
    function modInvCache4MPCBatched(uint start_idx, uint[3] memory last_left)
        public
        inStage(StageEnum.PRE_VOTING)
        returns(uint[] memory, uint[] memory, uint[3] memory)
    {
        (bool success, bytes memory data) = votingCallsAddr.delegatecall(
            abi.encodeWithSignature("modInvCache4MPCBatched(uint256,uint256[3])", start_idx, last_left)
        );
    
        require(success,  "delegatecall failed.");

        (uint[] memory a, uint[] memory b, uint[3] memory c) = abi.decode(data, (uint[], uint[], uint[3]));

        return (a, b, c);
    }

    // Precomp of modular inverses for vote submit
    // use .call()
    function modInvCache4SubmitVote(
        uint[] memory proof_B,
        int[] memory proof_r,
        int[] memory proof_d,
        uint[2] memory vote
    )
        public
        returns (uint[] memory)
    {
        (bool success, bytes memory data) = votingCallsAddr.delegatecall(
            abi.encodeWithSignature(
                "modInvCache4SubmitVote(uint256[],int256[],int256[],uint256[2])", 
                proof_B, proof_r, proof_d, vote)
            );

        require(success, "delegatecall failed.");

        uint[] memory ret = abi.decode(data, (uint[]));

        return ret;
    }

    // Precomp of modular inverses for tally computation
    // use .call()
    function modInvCache4Tally(int[] memory c_decom) public returns (uint[2] memory) {

        (bool success, bytes memory data) = votingCallsAddr.delegatecall(
            abi.encodeWithSignature("modInvCache4Tally(int256[])", c_decom)
        );

        require(success, "delegatecall failed.");

        uint[2] memory ret = abi.decode(data, (uint[2]));

        return ret;
    }

    // Precomp of modular inverses for vote repeair
    // use .call()
    function modInvCache4repairVote(
        uint[] memory faultyIdx,
        uint[] memory blindedKeys,
        uint myIdx,
        int[] memory proof_r,
        int[] memory h_decomp
    )
        public
        returns (uint[] memory)
    {

        (bool success, bytes memory data) = votingCallsAddr.delegatecall(
            abi.encodeWithSignature("modInvCache4repairVote(uint256[],uint256[],uint256,int256[],int256[])", 
            faultyIdx, blindedKeys, myIdx, proof_r, h_decomp)
        );

        require(success, "delegatecall failed.");

        uint[] memory ret = abi.decode(data, (uint[]));

        return ret;
    }
}
