import { inject, Injectable, signal } from '@angular/core';
import { IElection } from '../UI/election-list/election.interface';
import { DexieService, IUser } from './dexie.service';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    private dexieSVC = inject(DexieService);
    private web3SVC = inject(Web3Service);

    private userSignal = signal<IUser | undefined>(undefined);
    get user() {
      return this.userSignal;
    }
  
    private electionsSignal = signal<IElection[]>([]);
    get electionList() {
      return this.electionsSignal;
    }
  
    private electionSignal = signal<IElection | undefined>(undefined);
    get selectedElection() {
      return this.electionSignal;
    }

    public async selectElection(id: string) {
      const election = await this.dexieSVC.getElectionById(id);
      this.electionSignal.set(election);
    }


    public async reloadElectionsSignal() {
      this.electionsSignal.set(await this.dexieSVC.getElectionsFromDexie());
    }


    public async refresh() {
      this.userSignal.set(await this.dexieSVC.getUser());
      this.reloadElectionsSignal();
    }
  constructor() { }
}
