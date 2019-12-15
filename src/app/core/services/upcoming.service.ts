import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UpcomingMovie } from '../models/upcoming-model';
import { Genres } from '../models/genres-model';
import { runInThisContext } from 'vm';

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
        map((res: any) => res.results)
      );
   }

   getGenres() {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=pt-Br&page=1`)
     .pipe(
       map((res: any) => res.genres)
     );
  }

  getImagesByMovie(idMovie) {
    return this.http.get(`${this.baseUrl}movie/${idMovie}/images?api_key=${this.apiKey}`)
      .pipe(
        map((res: any) => res)
      );
  }

  saveReserve(reserve) {
    return this.http.post('http://localhost/reserva', reserve)
      .pipe(
        map((res: any) => res)
      );
  }
}
