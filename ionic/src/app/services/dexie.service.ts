import { Injectable, signal } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { ILoginForm } from '../UI/loginform/loginform.component';
import { IWallet } from './web3.service';
import { IElection } from '../UI/election-list/election.interface';

export interface IUser {
  id: number;                
  wallet?: string; 
  pk?: string;    
  email: string;      
  password: string;
  status?: boolean;
  walletStatus?: boolean;
  authType?: 'email'|'oauth';
}


@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {

 async setWallet(wallet: IWallet) {
  await this.users.update(1, { wallet: wallet.address, pk: wallet.privateKey })
  }
  
  private userSignal = signal<IUser | undefined>(undefined);
  get user(){
    this.refresh();
    return this.userSignal;
  }

  private electionsSignal = signal<IElection[] | undefined>(undefined);
  get electionList(){
    this.updateElectionsSignal();
    return this.electionsSignal
  } 
  
  users!: Table<IUser, number>;
  elections!: Table<IElection, string>;
  

  constructor() {
    super('ngDexieDB'); 
    this.version(1).stores({
      users: '++id, email, wallet, pk, status, walletStatus, authType', 
      elections: 'id, mainVotingAddress'//, name, description, candidates, votingCallsAddress, votingFuncAddress, ECaddress, fastECmulAddress, parties, mpcBatchSize, rmBatchSize, start, end, SK'
    });
    this.refresh();
  }

  async updateUser(user: IUser){
  try{
    await this.users.update(1, user);
  }catch(e){
    console.log(e);
  }finally{
    this.refresh();
  }
  }

  async setUser(user: ILoginForm){
   try{
     this.users.put({
       id: 1,
       email: user.email,
       password: user.password
      });
    }catch(e){
      console.log(e);
    }finally{
      this.refresh();
    }

  }


  public getUser(){
    return this.users.get(1);
  }

  async refresh(){
    this.userSignal.set(await this.getUser());
  }

  public async addOrUpdateElectionRecord(election: IElection): Promise<void> {
    const existingRecord = await this.elections.where('id').equals(election.id).first();
    
    if (existingRecord) {
      await this.elections.update(existingRecord, {...election} );
      console.log(`Záznam s adresou "${election.mainVotingAddress}" byl aktualizován.`);
      return;
    } else {
      await this.elections.add({...election});
      console.log(`Nový záznam přidán s ID: ${election.mainVotingAddress}`);
      return;
    }
  }

  public updateElections(elections: IElection[]) {
    for(const election of elections){
      this.addOrUpdateElectionRecord(election);
    }
  }

  public getElection(address: string): Promise<IElection | undefined>{
    return this.elections.where('mainVotingAddress').equals(address).first();
  }

  public getElectionsFromDexie(): Promise<IElection[]>{
    return this.elections.toArray()
  }

  private async updateElectionsSignal(){
    this.electionsSignal.set(await this.getElectionsFromDexie());
  }
}