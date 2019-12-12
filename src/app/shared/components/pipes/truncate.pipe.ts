import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: string): string {
    const takeFirst1 = str.substring(0, 150);

    if (str.length > 200) {
      return takeFirst1.trim().concat('...');
    }

    return takeFirst1;
  }

}
