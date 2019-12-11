import { TestBed } from '@angular/core/testing';

import { BuscarCepService } from './buscar-cep.service';

describe('BuscarCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscarCepService = TestBed.get(BuscarCepService);
    expect(service).toBeTruthy();
  });
});
