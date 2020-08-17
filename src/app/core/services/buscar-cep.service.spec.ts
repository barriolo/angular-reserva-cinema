import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BuscarCepService } from './buscar-cep.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('BuscarCepService', () => {
  let httpMock: HttpTestingController;
  let mockService: BuscarCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient ,
        BuscarCepService
      ]
    });
    mockService = TestBed.get(BuscarCepService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(mockService).toBeTruthy();
  });

  it('should be a get method', fakeAsync(() => {
    const cep = '71725103';
    mockService.getCep(cep).subscribe((res) => {});
    const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json`);
    expect(req.request.method).toEqual('GET');
    tick(100);
    httpMock.verify();
  }));

  it('should be get cep success', fakeAsync(() => {
    const cep = '71725103';
    const endereco = {
      bairro: 'Candangolândia',
      cep: '71725-103',
      complemento: '',
      gia: '',
      ibge: '5300108',
      localidade: 'Brasília',
      logradouro: 'QR 1 Conjunto C',
      uf: 'DF',
      unidade: '',
    };
    mockService.getCep(cep).subscribe((res) => {
      expect(res).toEqual(endereco);
    });
    const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json`);
    req.flush(endereco);
    tick(100);
    httpMock.verify();
  }));

  it('should not return a zip code because a invalid cep', fakeAsync(() => {
    const cep = '713';
    const endereco = {};
    mockService.getCep(cep).subscribe((res) => {
      expect(res).toEqual(endereco);
    });
    const req = httpMock.expectOne(`https://viacep.com.br/ws/${cep}/json`);
    req.flush(endereco);
    tick(100);
    httpMock.verify();
  }));
});
