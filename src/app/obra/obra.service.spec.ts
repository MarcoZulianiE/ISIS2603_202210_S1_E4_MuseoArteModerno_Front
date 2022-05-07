/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObraService } from './obra.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Obra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ObraService]
    });
  });

  it('should ...', inject([ObraService], (service: ObraService) => {
    expect(service).toBeTruthy();
  }));
});
