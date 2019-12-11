import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { BuscaCep } from '../models/busca-cep-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService extends ApiMoviedb {

  constructor(
    private http: HttpClient
  ) {
    super();
   }

   getCep(cep) {
    return this.http.get(`${this.buscaCep}/${cep}/json`)
     .pipe(
       map((res: BuscaCep) => res)
     );
  }
}
