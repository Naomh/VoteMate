import { Pipe, PipeTransform } from '@angular/core';

export enum ElectionStage {
  unreachable = -1,
  setup = 0,
  signup = 1,
  preVoting = 2,
  voting = 3,
  faultRepair = 4,
  tally = 5
}

@Pipe({
  name: 'electionstage',
  standalone: true
})
export class ElectionstagePipe implements PipeTransform {

  transform(value: bigint | number): string | undefined{
    switch(value){
      case -1: return 'unreachable'
      case 0n: return 'setup'
      case 1n: return 'signup'
      case 2n: return 'pre voting'
      case 3n: return 'voting'
      case 4n: return 'fault repair'
      case 5n: return 'tally'
    }
    return undefined;
  }

}
