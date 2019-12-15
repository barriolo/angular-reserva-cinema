import { Component, OnInit, OnDestroy } from '@angular/core';
import { UpcomingService } from 'src/app/core/services/upcoming.service';
import { UpcomingMovie } from 'src/app/core/models/upcoming-model';
import { pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Genres } from 'src/app/core/models/genres-model';

@Component({
  selector: 'app-list-movies-upcoming',
  templateUrl: './list-movies-upcoming.component.html',
  styleUrls: ['./list-movies-upcoming.component.css']
})
export class ListMoviesUpcomingComponent implements OnInit, OnDestroy {
  upcomingList: UpcomingMovie[];
  sub: any;
  genresList: Genres[];
  search: string;
  loading: boolean;
  constructor(
    private serviceUpcoming: UpcomingService
  ) { }

  ngOnInit() {
    this.getListUpcomingMovies();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getListUpcomingMovies() {
    this.loading = true;
    this.sub = this.serviceUpcoming.getUpcomingMovies()
    .pipe(
      finalize(() => {
        this.getListGenres();
        setTimeout(() => {
          this.loading = false;
        }, 200);
      })
    )
    .subscribe((res: UpcomingMovie[]) => {
      this.upcomingList = res;
    });
  }

  getListGenres() {
    this.sub = this.serviceUpcoming.getGenres()
    .subscribe((res: Genres[]) => {
      this.genresList = res;
      this.upcomingList.map((item, index) => {
        item.genres = [];
        item.genre_ids.map((genreId) => {
          this.genresList.filter((genre) => {
              if (genre.id === genreId) {
                item.genres.push(genre);
              }
          });
        });
      });
   });
  }
}
