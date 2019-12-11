import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UpcomingMovie } from '../models/upcoming-model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService extends ApiMoviedb {

  constructor(
    private http: HttpClient
  ) {
    super();
   }

   getUpcomingMovies(){
     return this.http.get(this.baseUrl)
      .pipe(
        map((res: UpcomingMovie[]) => res)
      );
   }
}
