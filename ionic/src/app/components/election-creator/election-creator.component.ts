import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICandidate, IElectionQuery, IParty } from '../../UI/election-list/election.interface';
import { HttpService } from '../../services/http.service';
import { ButtonComponent } from "../../UI/button/button.component";

interface JsonObject {
  [key: string]: any;
}

@Component({
  selector: 'app-election-creator',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ButtonComponent],
  templateUrl: './election-creator.component.html',
  styleUrl: './election-creator.component.scss'
})
export class ElectionCreatorComponent {
  protected httpSVC: HttpService = inject(HttpService); 
  protected electionForm: FormGroup;
  protected parties!: JsonObject;
  protected candidates!: JsonObject;

  constructor(private fb: FormBuilder) {
    this.electionForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      candidates: [null, Validators.required],
      parties: [null, Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
  }


  async submitForm(button: ButtonComponent) {
    if (!this.electionForm.valid) {
      button.setFailure('the form is not valid')
    }
    try{
      button.state = 'loading'
      const {parties, partyKeys} = await this.processParties();
      const candidates = await this.processCandidates(partyKeys);

      const election = this.electionForm.value as IElectionQuery;
      election.candidates = candidates;
      election.parties = parties;
      const result = await this.httpSVC.createElection(election);
      if(result){
        button.setSuccess('Election created!')
      }else{
        button.setFailure('The creation didn\'t go through, try it again');
      }
    }catch(e){
      throw new Error('Election creation failed')
    }finally{
      button.state = 'ready'
    }
  }

  protected async loadParties(event: Event){
    this.parties = await this.loadJsonFile(event);
    console.log(this.parties)
}

  protected async loadCandidates(event: Event){
    this.candidates = await this.loadJsonFile(event);
    console.log(this.candidates)
  }


protected loadJsonFile(event: Event): Promise<JSON>{
  return new Promise((resolve, reject) => {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      reject("No file selected");
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        resolve(json);
      } catch (error) {
        reject("Invalid JSON file");
      }
    };

    reader.onerror = () => reject("Error reading file");
    reader.readAsText(file);
  });
}

  private async processParties(): Promise<{parties: IParty[], partyKeys: JsonObject}>{
    try{
      const partyKeys:JsonObject = {}
      const parties: IParty[] = this.parties['polozky'].map((item: JsonObject) => {
        partyKeys[item['ESTRANA']] = item['ZKRATKAE8'];
        const party = {
          name: item['NAZEVCELK'],
          acronym: item['ZKRATKAE8'],
          eref: item['ESTRANA'],
          vref: item['VSTRANA']
        }
        return party;
      });
      return {parties, partyKeys};      
    }catch(e){
      throw new Error('Invalid data format of parties');
    }
  }

  private async processCandidates(partyKeys: JsonObject): Promise<ICandidate[]>{
    console.log(partyKeys);
    try{
      const candidates: ICandidate[] = this.candidates['polozky'].map((item: JsonObject, index:number) => {
        const name = `${item['TITULPRED'] ??''} ${item['JMENO']} ${item['PRIJMENI']} ${item['TITULZA'] ??''}`.trim()
        const candidate: ICandidate = {
          index: index,
          name,
          party: partyKeys[item['ESTRANA']],
          bio: partyKeys[item['POVOLANI']],
        }
        return candidate;
      })
      return candidates
    }catch(e){
      throw new Error('Invalid data format of candidates')
    }
  }
}
