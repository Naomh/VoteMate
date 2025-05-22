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
      startSignUp: ['', Validators.required],
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
}

  protected async loadCandidates(event: Event){
    this.candidates = await this.loadJsonFile(event);
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
      const partyKeys: JsonObject = {};
      const parties: IParty[] = this.parties['items'].map((item: JsonObject) => {
        partyKeys[item['partyId']] = item['acronym'];
        const party = {
          name: item['fullName'],
          acronym: item['acronym'],
          eref: item['partyId'],
          vref: item['voterId']
        };
        return party;
      });
      return {parties, partyKeys};      
    }catch(e){
      throw new Error('Invalid data format of parties');
    }
  }

  private async processCandidates(partyKeys: JsonObject): Promise<ICandidate[]>{
    try{
      const candidates: ICandidate[] = this.candidates['items'].map((item: JsonObject, index: number) => {
        const name = `${item['titleBefore'] ?? ''} ${item['firstName']} ${item['lastName']} ${item['titleAfter'] ?? ''}`.trim();
        const candidate: ICandidate = {
          index: index,
          name,
          party: partyKeys[item['partyId']],
          bio: item['profession'],
        };
        return candidate;
      });
      return candidates;
    }catch(e){
      throw new Error('Invalid data format of candidates');
    }
  }
}
