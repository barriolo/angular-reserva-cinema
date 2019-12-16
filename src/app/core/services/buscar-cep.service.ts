import { Injectable } from '@angular/core';
import { ApiMoviedb } from 'src/app/moviedb-config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

const listCountry = 'assets/list-country.json';
@Injectable({
  providedIn: 'root'
})
export class BuscarCepService extends ApiMoviedb {

  constructor(
    private http: HttpClient,
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

  getCountry(): Observable<any> {
    return this.http.get(listCountry)
    .pipe(
      map((res: any) => res)
    );
  }
}
