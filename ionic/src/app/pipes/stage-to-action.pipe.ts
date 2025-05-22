import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stageToAction'
})
export class StageToActionPipe implements PipeTransform {

  transform(value: bigint | number): string | undefined{
    switch(value){
      case -1:
      case 0n:
      case 1n:
      case 2n: return 'preview'
      case 3n: return 'go vote'
      case 4n: return 'repair'
      case 5n: return 'view results'
    }
    return undefined;
  }

}
