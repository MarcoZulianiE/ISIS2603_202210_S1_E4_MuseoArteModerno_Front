/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaisService } from './pais.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Pais', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaisService]
    });
  });

  it('should ...', inject([PaisService], (service: PaisService) => {
    expect(service).toBeTruthy();
  }));
});
