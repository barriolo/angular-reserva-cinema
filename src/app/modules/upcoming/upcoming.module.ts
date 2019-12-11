import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesUpcomingComponent } from './pages/list-movies-upcoming/list-movies-upcoming.component';
import { ReserveMovieUpcomingComponent } from './pages/reserve-movie-upcoming/reserve-movie-upcoming.component';



@NgModule({
  declarations: [ListMoviesUpcomingComponent, ReserveMovieUpcomingComponent],
  imports: [
    CommonModule
  ]
})
export class UpcomingModule { }
