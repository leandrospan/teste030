import { TestBed } from '@angular/core/testing';

import { BancodedadosService } from './bancodedados.service';

describe('BancodedadosService', () => {
  let service: BancodedadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancodedadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
