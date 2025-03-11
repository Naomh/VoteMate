import BN from 'bn.js'

export interface IElection{
    id: string,
    name: string,
    description: string,
    mainVotingAddress: string,
    votingCallsAddress: string,
    votingFuncAddress: string,
    fastECmulAddress: string,
    ECaddress: string,
    candidates: ICandidate[],
    parties: IParty[],
    mpcBatchSize?: Number,
    rmBatchSize?: Number,
    start: string,
    end: string,
    SK?: string,
}

export interface ICandidate{
    name: string,
    index: number,
    party: string,
    bio: string,
}

export interface IParty{
    name: string,
    acronym: string,
    eRef: number,
    vRef: number   
}

export interface IElectionQuery{
    name: string,
    description: string,
    candidates: ICandidate[],
    parties: IParty[],
    start: string,
    end: string,
    SK?: string,
}