import { Component, inject } from '@angular/core';
import { DexieService } from '../../services/dexie.service';
import { CommonModule } from '@angular/common';
import { ElectionCardComponent } from "../election-card/election-card.component";

@Component({
  selector: 'UI-election-list',
  standalone: true,
  imports: [CommonModule, ElectionCardComponent],
  templateUrl: './election-list.component.html',
  styleUrl: './election-list.component.scss'
})
export class ElectionListComponent {
  private dexieSVC = inject(DexieService)
  protected elections = this.dexieSVC.electionList;
  protected user = this.dexieSVC.user;
}
