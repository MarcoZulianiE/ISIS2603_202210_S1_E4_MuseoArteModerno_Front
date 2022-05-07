/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovimientoartisticoService } from './movimientoartistico.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Movimientoartistico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovimientoartisticoService]
    });
  });

  it('should ...', inject([MovimientoartisticoService], (service: MovimientoartisticoService) => {
    expect(service).toBeTruthy();
  }));
});
