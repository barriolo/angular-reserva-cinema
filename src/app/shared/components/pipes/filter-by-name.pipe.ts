import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {
  transform(moviesName: any[], search: string): any[] {
    if (!moviesName) {
      return [];
    }
    if (!search) {
      return moviesName;
    }
    search = search.toLowerCase();
    return moviesName.filter( item => {
      return item.title.toLowerCase().includes(search);
    });
  }
}

