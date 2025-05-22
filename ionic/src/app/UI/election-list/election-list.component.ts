import { ChangeDetectorRef, Component, computed, inject, OnInit, OnDestroy, signal, Signal, WritableSignal } from '@angular/core';
import { DexieService } from '../../services/dexie.service';
import { CommonModule } from '@angular/common';
import { ElectionCardComponent } from "../election-card/election-card.component";
import { IElection } from './election.interface';
import { ESort } from '../../interfaces/sort.enum';
import { Web3Service } from '../../services/web3.service';
import { ElectionStage } from '../../pipes/electionstage.pipe';

@Component({
    selector: 'UI-election-list',
    imports: [CommonModule, ElectionCardComponent],
    templateUrl: './election-list.component.html',
    styleUrl: './election-list.component.scss'
})
export class ElectionListComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    this.dexieSVC.refresh();
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkIfMobile.bind(this));
  }
  
  private changeDetector = inject(ChangeDetectorRef);
  private dexieSVC = inject(DexieService);
  private web3SVC = inject(Web3Service);
  
  private term = signal<string | undefined>(undefined);
  private stage = signal<string | undefined>(undefined);
  private sort: ESort = ESort.none;
  
  protected user = this.dexieSVC.user;
  protected elections = computed(this.electionFn.bind(this));
  protected filtersExpanded = false;
  protected isMobile = false;

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 800;
    if (!this.isMobile) {
      this.filtersExpanded = true; 
    }
  }

  private electionFn(){
    const term = this.term();
    const stageFilter = this.stage();
 
    const termFiltered = this.dexieSVC.electionList().filter((election) => {
      if(!term){
        return true;
      }
      const regexp = new RegExp(term, 'gi')
      return regexp.test(election.name)
    });
    const stageFiltered = termFiltered.filter((election) => {
      if(!stageFilter){
        return true
      };
      const stage = election.stage;
      return stage === ElectionStage[stageFilter as keyof typeof ElectionStage];
    })
    
    return stageFiltered
}

  protected refresh(){
    this.dexieSVC.refresh()
  }

  protected sortFn(elementA: IElection, elementB: IElection){
    if(this.sort === ESort.none){
      return 0
    }
    
    const comparison = elementA.name.localeCompare(elementB.name);
    return this.sort === ESort.up ? comparison : -comparison;
  }

  protected filterElections(event: Event): void{
    this.term.set((<HTMLInputElement>event.target).value);
  }

  protected toggleSort(): void{
    this.sort = (this.sort + 1) % (Object.keys(ESort).length / 2);
  }

  protected filterStage(event: Event): void{
    this.stage.set((<HTMLSelectElement>event.target).value);
  }

  protected toggleFilters(): void {
      if (this.isMobile) {
          this.filtersExpanded = !this.filtersExpanded;
      }
  }

}
