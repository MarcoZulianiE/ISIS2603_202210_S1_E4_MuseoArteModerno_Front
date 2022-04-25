/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovimientoartisticoService } from './movimientoartistico.service';

describe('Service: Movimientoartistico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimientoartisticoService]
    });
  });

  it('should ...', inject([MovimientoartisticoService], (service: MovimientoartisticoService) => {
    expect(service).toBeTruthy();
  }));
});
