import { Component, computed, inject, Input, OnInit, signal, effect } from '@angular/core';
import { DexieService, IUser } from '../../services/dexie.service';
import { ProfileCardComponent } from "../../UI/profile-card/profile-card.component";
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { Web3Service } from '../../services/web3.service';

@Component({
    selector: 'app-profile',
    imports: [ProfileCardComponent, CommonModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent{
  private dexieSVC = inject(DexieService);
  private httpSVC = inject(HttpService);
  private web3SVC = inject(Web3Service);

  protected user = this.dexieSVC.user;
  protected onlineStatus = this.httpSVC.OnlineStatus;
  protected userBalance = signal<number | undefined>(undefined);

  constructor() {
    effect(async () => {
      const user = this.user();
      if (user && user.wallet) {
        this.userBalance.set(Number(await this.web3SVC.checkBalance(user.wallet)));
      } else {
        this.userBalance.set(undefined);
      }
    });
  }

  protected async onLogout(){
    this.dexieSVC.logout();
  }

  protected async registerWallet() {
    try{
      const user = this.user();
      if(!user || !user.wallet){
        throw new Error('No wallet found');
      }
    
    }catch{
      throw new Error('Wallet registration failed')
    }
  }

}
