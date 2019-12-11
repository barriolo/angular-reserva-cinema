import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesUpcomingComponent } from './pages/list-movies-upcoming/list-movies-upcoming.component';
import { ReserveMovieUpcomingComponent } from './pages/reserve-movie-upcoming/reserve-movie-upcoming.component';
import { UpcomingService } from 'src/app/core/services/upcoming.service';



@NgModule({
  declarations: [ListMoviesUpcomingComponent, ReserveMovieUpcomingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListMoviesUpcomingComponent
  ],
  providers: [
    UpcomingService
  ]
})
export class UpcomingModule { }
