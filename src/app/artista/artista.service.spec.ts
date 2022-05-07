/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistaService } from './artista.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Artista', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistaService]
    });
  });

  it('should ...', inject([ArtistaService], (service: ArtistaService) => {
    expect(service).toBeTruthy();
  }));
});
