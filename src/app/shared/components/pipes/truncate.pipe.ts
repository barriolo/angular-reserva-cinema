import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: string, numberTruncate: number): string {
    if (str) {
      const takeFirst1 = str.substring(0, numberTruncate);
      if (str.length > numberTruncate) {
        return takeFirst1.trim().concat('...');
      }
      return takeFirst1;
    }
    return;
  }

}
