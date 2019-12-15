import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { BuscaCep } from '../models/busca-cep-model';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

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
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get(`${this.buscaCep}${cep}/json`);
      }
    }
    return of({});
  }
}
