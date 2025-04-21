import { Component, inject, Input, OnInit } from '@angular/core';
import { DexieService, IUser } from '../../services/dexie.service';
import { ProfileCardComponent } from "../../UI/profile-card/profile-card.component";
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-profile',
    imports: [ProfileCardComponent, CommonModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent{
  private dexieSVC = inject(DexieService);
  private httpSVC = inject(HttpService);
  
  protected user = this.dexieSVC.user;
  protected onlineStatus = this.httpSVC.OnlineStatus;

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
