/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuseoService } from './museo.service';

describe('Service: Museo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuseoService]
    });
  });

  it('should ...', inject([MuseoService], (service: MuseoService) => {
    expect(service).toBeTruthy();
  }));
});
