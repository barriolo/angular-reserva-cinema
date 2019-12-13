import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesUpcomingComponent } from './pages/list-movies-upcoming/list-movies-upcoming.component';
import { ReserveMovieUpcomingComponent } from './pages/reserve-movie-upcoming/reserve-movie-upcoming.component';
import { UpcomingService } from 'src/app/core/services/upcoming.service';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/components/pipes/pipes.module';



@NgModule({
  declarations: [ListMoviesUpcomingComponent, ReserveMovieUpcomingComponent],
  imports: [
    CommonModule,
    CardsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PipesModule
  ],
  exports: [
    ListMoviesUpcomingComponent
  ],
  providers: [
    UpcomingService
  ]
})
export class UpcomingModule { }
