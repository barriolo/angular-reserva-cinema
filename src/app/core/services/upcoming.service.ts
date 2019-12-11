import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UpcomingMovie } from '../models/upcoming-model';
import { Genres } from '../models/genres-model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService extends ApiMoviedb {

  constructor(
    private http: HttpClient
  ) {
    super();
   }

   getUpcomingMovies() {
     return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=pt-Br&page=1`)
      .pipe(
        map((res: UpcomingMovie[]) => res)
      );
   }

   getGenres() {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=pt-Br&page=1`)
     .pipe(
       map((res: Genres[]) => res)
     );
  }
}
