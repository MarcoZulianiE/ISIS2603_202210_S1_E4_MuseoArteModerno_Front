/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObraDetailComponent } from './obra-detail.component';
import { faker } from '@faker-js/faker';
import { Pais } from 'src/app/pais/pais';
import { Museo } from 'src/app/museo/museo';
import { Movimientoartistico } from 'src/app/movimientoartistico/movimientoartistico';
import { Artista } from 'src/app/artista/artista';
import { ObraDetail } from '../obra-detail';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ObraDetailComponent', () => {
  let component: ObraDetailComponent;
  let fixture: ComponentFixture<ObraDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ ObraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraDetailComponent);
    component = fixture.componentInstance;
    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );
    let museo = new Museo(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      [],
      faker.datatype.number(),
      pais
    );
    let movimiento = new Movimientoartistico (
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.date.past(),
      pais
    )
    let artista  =new Artista(faker.datatype.number(),faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.date.past(),
       faker.date.past(),
       pais,
       pais)
     component.obraDetail = new ObraDetail(
         faker.datatype.number(),
         faker.lorem.sentence(),
         faker.lorem.sentence(),
         faker.lorem.sentence(),
         faker.date.past(),
         faker.image.imageUrl(),
         museo,
         artista,
         movimiento
       );
     fixture.detectChanges();
     debug = fixture.debugElement;
   });

   it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div element for the detail', () => {
    expect(debug.query(By.css('div')).attributes['class']).toEqual('detalle');
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.obraDetail.nombre
    );
  });

  it('should have an h3 element for artist name', () => {
    expect(debug.query(By.css('h3')).attributes['title']).toEqual(
      'nom_obra'
    );
  });
});
