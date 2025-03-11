import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IUser } from '../../services/dexie.service';
import { CommonModule } from '@angular/common';
import { WalletGeneratorComponent } from "../wallet-generator/wallet-generator.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'UI-profile-card',
  standalone: true,
  imports: [CommonModule, WalletGeneratorComponent, RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
@Output() registerWallet: EventEmitter<void> = new EventEmitter();
@Input() user!: IUser;
@Input() onlineStatus!: boolean;
}
