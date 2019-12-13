import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';



@NgModule({
  declarations: [TruncatePipe, FilterByNamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TruncatePipe,
    FilterByNamePipe
  ]
})
export class PipesModule { }
