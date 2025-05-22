import { inject, Injectable, signal } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { ILoginForm } from '../UI/loginform/loginform.component';
import { IWallet, Web3Service } from './web3.service';
import { IElection } from '../UI/election-list/election.interface';
import { Address } from 'web3';
import { id } from 'ethers';
import { HttpService } from './http.service';

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
  private httpSVC = inject(HttpService);

  private _isAdmin = signal<boolean>(false);
  get isAdmin(){
    return this._isAdmin
  }
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

  public async logout() {
    try {
      await this.users.clear();
      await this.elections.clear();
      this.userSignal.set(undefined);
      this.electionsSignal.set([]);
      this.electionSignal.set(undefined);
      this._isAdmin.set(false);
    } catch (e) {
      console.error('Error during logout:', e);
    }
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
    } else {
      await this.elections.add({...election });
      console.log(`Nový záznam přidán s ID: ${election.mainVotingAddress}`);
    }
  }

  public async updateElections(elections: IElection[]) {
    for (const election of elections) {
     await this.addOrUpdateElectionRecord(election);
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
    try{
      const elections = await this.httpSVC.getAvailableElections();
      await this.updateElections(elections);
    }catch(e){
      console.error(e);
    }
    const user = await this.getUser();
    if(user?.pk && user.password){
      this.web3SVC.getWalletfromPk(user?.pk, user?.password)
    }
    this.userSignal.set(user);
    await this.updateElectionsSignal();
    if(user){
      this._isAdmin.set((await this.httpSVC.isAdmin(user)).isAdmin);
    }
  }

  public async updateElectionsSignal(reloadStage = true) {
    let elections = await this.getElectionsFromDexie();
    if(reloadStage){  
       elections = await Promise.all(
        elections.map(async (election) => {
          const stage = Number(await this.web3SVC.getStage(election.mainVotingAddress) ?? -1);
          return {...election, stage};
        })
      );
    }else{
      elections = this.electionsSignal().map((election, index) => ({...elections[index], stage: election.stage}))
    }
     
    this.electionsSignal.set(elections as (IElection&{stage:number})[]);
  }
  //#endregion
}
