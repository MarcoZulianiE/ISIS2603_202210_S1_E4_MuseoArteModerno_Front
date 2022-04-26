/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistaService } from './artista.service';

describe('Service: Artista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistaService]
    });
  });

  it('should ...', inject([ArtistaService], (service: ArtistaService) => {
    expect(service).toBeTruthy();
  }));
});
