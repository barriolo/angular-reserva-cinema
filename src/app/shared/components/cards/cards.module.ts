import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from '../pipes/pipes.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { CommonComponentsModule } from '../common/common.module';



@NgModule({
  declarations: [
    MovieCardComponent,
    DetailCardComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PipesModule,
    NgCircleProgressModule.forRoot({
    }),
    MatButtonModule,
    CommonComponentsModule,
    MatDialogModule
  ],
  exports: [
    MovieCardComponent
  ]
})
export class CardsModule { }
