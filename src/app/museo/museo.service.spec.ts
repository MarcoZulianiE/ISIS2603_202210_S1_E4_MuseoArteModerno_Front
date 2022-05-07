/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuseoService } from './museo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Museo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MuseoService]
    });
  });

  it('should ...', inject([MuseoService], (service: MuseoService) => {
    expect(service).toBeTruthy();
  }));
});
