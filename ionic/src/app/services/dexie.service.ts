import { inject, Injectable, signal } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { ILoginForm } from '../UI/loginform/loginform.component';
import { IWallet, Web3Service } from './web3.service';
import { IElection } from '../UI/election-list/election.interface';
import { Address } from 'web3';
import { id } from 'ethers';

//#region Interfaces
export interface IUser {
  id: number;
  wallet?: Address;
  pk?: string;
  email: string;
  password: string;
  status?: boolean;
  walletStatus?: boolean;
  authType?: 'email' | 'oauth';
}
//#endregion

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  private web3SVC = inject(Web3Service);

  //#region Signals
  private userSignal = signal<IUser | undefined>(undefined);
  get user() {
    this.refresh();
    return this.userSignal;
  }

  private electionsSignal = signal<(IElection&{stage: number})[]>([]);
  get electionList() {
    return this.electionsSignal;
  }

  private electionSignal = signal<IElection | undefined>(undefined);
  get selectedElection() {
    return this.electionSignal;
  }
  //#endregion

  //#region Tables
  users!: Table<IUser, number>;
  elections!: Table<IElection, string>;
  //#endregion

  //#region Constructor
  constructor() {
    super('ngDexieDB');
    this.version(1).stores({
      users: '++id, email, wallet, pk, status, walletStatus, authType',
      elections: '&id', //, name, description, candidates, votingCallsAddress, votingFuncAddress, ECaddress, fastECmulAddress, parties, mpcBatchSize, rmBatchSize, start, end, SK'
    });
    this.refresh();
  }
  //#endregion

  //#region User Methods
  async setWallet(wallet: IWallet) {
    await this.users.update(1, {
      wallet: wallet.address,
      pk: wallet.privateKey,
    });
  }

  public async updateUser(user: IUser) {
    try {
      await this.users.update(1, user);
    } catch (e) {
      console.error(e);
    } finally {
      this.refresh();
    }
  }

  public async setUser(user: ILoginForm) {
    try {
      this.users.put({
        id: 1,
        email: user.email,
        password: user.password,
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.refresh();
    }
  }

  public getUser() {
    return this.users.get(1);
  }
  //#endregion

  //#region Election Methods
  public async selectElection(id: string) {
    const election = await this.getElectionById(id);
    this.electionSignal.set(election);
  }

  public async addOrUpdateElectionRecord(election: IElection): Promise<void> {
    const existingRecord = await this.elections
      .where('id')
      .equals(election.id)
      .first() ;
    if (existingRecord) {
      await this.elections.update(existingRecord, { ...election });
      console.log(
        `Záznam s adresou "${election.mainVotingAddress}" byl aktualizován.`
      );
      return;
    } else {
      await this.elections.add({...election });
      console.log(`Nový záznam přidán s ID: ${election.mainVotingAddress}`);
      return;
    }
  }

  public updateElections(elections: IElection[]) {
    for (const election of elections) {
      this.addOrUpdateElectionRecord(election);
    }
  }

  public getElection(address: string): Promise<IElection | undefined> {
    return this.elections.where('mainVotingAddress').equals(address).first();
  }

  public getElectionById(id: string): Promise<IElection | undefined> {
    return this.elections.where('id').equals(id).first();
  }

  public setkeys(address: string, SK: string) {
    this.elections.update(address, { SK });
  }

  public getElectionsFromDexie(): Promise<IElection[]> {
    return this.elections.toArray();
  }
  //#endregion

  //#region Refresh Methods
  public async refresh() {
    this.userSignal.set(await this.getUser());
    this.updateElectionsSignal();
  }

  private async updateElectionsSignal() {
    const elections = await this.getElectionsFromDexie();
    
    const electionsWithStage = await Promise.all(
      elections.map(async (election) => {
        const stage = Number(await this.web3SVC.getStage(election.mainVotingAddress) ?? -1); // async funkce
        return {...election, stage};
      })
    );

    this.electionsSignal.set(electionsWithStage);
  }
  //#endregion
}
