/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObraService } from './obra.service';

describe('Service: Obra', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObraService]
    });
  });

  it('should ...', inject([ObraService], (service: ObraService) => {
    expect(service).toBeTruthy();
  }));
});
