/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CiudadService } from './ciudad.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { faker } from '@faker-js/faker';

describe('Service: Ciudad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CiudadService]
    });
  });

  it('should ...', inject([CiudadService], (service: CiudadService) => {
    expect(service).toBeTruthy();
  }));
});
