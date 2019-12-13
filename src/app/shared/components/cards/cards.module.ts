import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from '../pipes/pipes.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PipesModule,
    NgCircleProgressModule.forRoot({
    }),
    MatButtonModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class CardsModule { }
