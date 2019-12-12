import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PipesModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class CardsModule { }
