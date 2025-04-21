pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import "./VotingBoothDeployer.sol";

// Author: Ivana Stančíková
// Main voting contract
// splits voters to groups, deploys booth contracts, collect final tally
contract MainVotingC {

    uint constant MIN_GROUP_SIZE = 3;

    uint votingGroupsCnt = 0;

    address public authority;
    string[] public candidates;
    uint[2][] public candidateGens;
    uint[] public candidateGens_f;
    address[] public eligibleVoters; // all eligible voters

    // Mappings
    mapping(address => bool) public isVoterEligible;
    mapping(address => uint) public votersGroup; // voter's address => voter's group
    mapping(uint => address[]) public groupsVoters; // group => voters in group
    mapping(uint => address) public groupBoothAddr; // group => booth contract address
    mapping(address => bool) public isAddrBooth; // address => belongs to booth?
    mapping(address => bool) public boothsInStageTally; // booth addr => is in stage Tally?
    mapping(address => bool) public boothsInStagePreVoting; // booth addr => is in stage Pre-Voting?
    mapping(address => bool) public boothTallyCollected; // booth addr => booth's tally collected?

    address boothDeployerAddr;
    VotingBoothC[] public booths;

    uint boothsInStagePreVotingCnt = 0;
    uint boothsInTallyCnt = 0; // num of booths in stage TALLY
    uint talliesCollectedCnt = 0; // num of tallies from booths already collected

    uint RM_batchSize; // batch size for MPC key precomputation
    uint MPC_batchSize; // batch size for MPC key comp

    int[] tally; // stored as pairs of decomposed scalars

    enum StageEnum { SETUP, SIGNUP, PRE_VOTING, VOTING, FAULT_REPAIR, TALLY }
    StageEnum public stage;

    // Events
    event BoothCreated(address boothAddr, uint group);
    event FinalTally(int[] finalTally);

    // Modifiers
    modifier fromAuthority() {
        require(msg.sender == authority, "Only authority can call this function.");
        _;
    }

    modifier fromBooth() {
        require(isAddrBooth[msg.sender], "Only booth can call this function.");
        _;
    }

    modifier inStage(StageEnum _stage) {
        require(_stage == stage, "Wrong stage detected.");
        _;
    }

    modifier firstFromBooth() {
        require(isAddrBooth[msg.sender], "Only booth can call this function.");
        require(boothsInStageTally[msg.sender] == false, "Booth already changed stage.");
        _;
    }

    constructor(
        string[] memory _candidates,
        uint[] memory _candidateGens,
        uint _mpcBatchSize,
        uint _mpcRmBatchSize,
        address _boothDeployer
    ) 
        public 
    {
        authority = msg.sender;

        require(_candidates.length * 2 == _candidateGens.length, "Required one generator per candidate.");
    
        for (uint i = 0; i < _candidates.length; i++) {
            candidates.push(_candidates[i]);
            candidateGens_f.push(_candidateGens[2*i]);
            candidateGens_f.push(_candidateGens[2*i + 1]);
            candidateGens.push([_candidateGens[2*i], _candidateGens[2*i + 1]]);
            tally.push(0);
            tally.push(0);
        }

        boothDeployerAddr = _boothDeployer;
        MPC_batchSize = _mpcBatchSize;
        RM_batchSize = _mpcRmBatchSize;
        stage = StageEnum.SETUP;
    }

    // Registering voters' addresses,
    // can be called repeatedly by authority
    function enrollVoters(address[] memory _voters) public
        fromAuthority()
        inStage(StageEnum.SETUP)
    {
        for (uint i = 0; i < _voters.length; i++) {
            require(!isVoterEligible[_voters[i]], "Voter was already enrolled.");
            isVoterEligible[_voters[i]] = true;
            eligibleVoters.push(_voters[i]);
        }
    }

    // Split voters to groups
    // called repeatedly for batches of voters
    // start_idx - start batch with voter with this idx
    // batch_size - how many voters to process in batch
    // groups_cnt - how many groups to split voters to
    function splitGroups(uint start_idx, uint batch_size, uint groups_cnt) public 
        fromAuthority()
        inStage(StageEnum.SETUP)
    {
        if (votingGroupsCnt == 0) { // when processing the first batch
            require((groups_cnt * MIN_GROUP_SIZE) <= eligibleVoters.length, "Too many groups requested.");
            votingGroupsCnt = groups_cnt;
        } else {
            require(votingGroupsCnt == groups_cnt, "Groups count differs between split batches.");
        }

        uint end_idx = start_idx + batch_size;
        if (end_idx > eligibleVoters.length) {
            end_idx = eligibleVoters.length;
        }
    
        for (uint i = start_idx; i < end_idx; i++) {
            uint group = i % groups_cnt;
            groupsVoters[group].push(eligibleVoters[i]);
            votersGroup[eligibleVoters[i]] = group; 
        }
    }

    // Deploy voting booth for each group
    // called repeatedly, done in batches
    // start_idx - start batch with group witthih s idx
    // batch_group_cnt - number of booths to deploy in batch
    // votingfunc, votingcalls - addresses of contracts for delegatecalls
    function deployBooths(uint start_idx, uint batch_group_cnt, address votingfunc, address votingcalls)
        public 
        fromAuthority()
        inStage(StageEnum.SETUP)
    {
        VotingBoothDeployer boothDeployer = VotingBoothDeployer(boothDeployerAddr);

        uint end_idx = start_idx + batch_group_cnt;
        if (end_idx > votingGroupsCnt) {
            end_idx = votingGroupsCnt;
        }

        // create contract for each group
        for (uint i = start_idx; i < end_idx; i++) {
            require(groupBoothAddr[i] == address(0), "Booth for this group already deployed.");

            VotingBoothC booth = boothDeployer.deployBooth(
                groupsVoters[i].length,
                candidates,
                candidateGens_f,
                MPC_batchSize,
                RM_batchSize,
                address(this),
                authority,
                votingfunc,
                votingcalls
            );

            groupBoothAddr[i] = address(booth);
            booths.push(booth);
            isAddrBooth[address(booth)] = true;

            emit BoothCreated(address(booth), i);
        }
    }

    function changeStageToPreVoting()
        public
        firstFromBooth()
    {
        boothsInStagePreVoting[msg.sender] = true;
        boothsInStagePreVotingCnt += 1;

        if(boothsInStagePreVotingCnt == booths.length){
            stage = StageEnum.PRE_VOTING;
        }
    }
    // Called by booth to announce change of stage
    function changeStageToTally()
        public 
        firstFromBooth()
    {
        boothsInStageTally[msg.sender] = true;
        boothsInTallyCnt += 1;

        if (boothsInTallyCnt == booths.length) {
            stage = StageEnum.TALLY;
        }
    }

    // Called by booth to provide its result to main contract
    function provideBoothTally(int256[] memory _tally)
        public
        inStage(StageEnum.TALLY)
        fromBooth()
    {
        require(boothTallyCollected[msg.sender] == false, "Booth's tally already collected.");

        for (uint j = 0; j < candidates.length; j++) {
            tally[2 * j] += _tally[2 * j];
            tally[2 * j + 1] += _tally[2 * j + 1];
        }

        boothTallyCollected[msg.sender] = true;
        talliesCollectedCnt += 1;

        if (talliesCollectedCnt == booths.length) {
            // emit when tally was collected from all booths
            emit FinalTally(tally);
        }
    }

    // // // Calls // // //
    function isVoterEligibleInBooth(address voter)
        public
        view 
        fromBooth()
        returns (bool)
    {
        if(!isVoterEligible[voter]) return false;

        uint group = votersGroup[voter];
        if (!(groupBoothAddr[group] == msg.sender)) return false;
        else return true;
    }

    function getCntOfCandidates() public view returns (uint) {
        return candidates.length;
    }

    function getCntOfEligibleVoters() public view returns (uint) {
        return eligibleVoters.length;
    }

    function getFinalTally() public view returns (int256[] memory) {
        require(talliesCollectedCnt == booths.length, "Tally not collected from all booths yet.");
        return tally;
    }
}