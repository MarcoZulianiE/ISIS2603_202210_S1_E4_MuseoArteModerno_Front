/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Pais } from 'src/app/pais/pais';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

import { CiudadDetail } from '../ciudad-detail';
import { CiudadListComponent } from './ciudad-list.component';
import { CiudadService } from '../ciudad.service';

describe('CiudadListComponent', () => {
  let component: CiudadListComponent;
  let fixture: ComponentFixture<CiudadListComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CiudadListComponent ],
      providers:[CiudadService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadListComponent);
    component = fixture.componentInstance;
    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );
    component.ciudades = [
      new CiudadDetail(faker.datatype.number(),faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      pais
      ),
    ];
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.ciudades[0].nombre
    );
  });

  it('should have a h5 element with card-title class', () => {
    expect(debug.query(By.css('h5')).attributes['class']).toEqual( "card-title" );
  });

});
