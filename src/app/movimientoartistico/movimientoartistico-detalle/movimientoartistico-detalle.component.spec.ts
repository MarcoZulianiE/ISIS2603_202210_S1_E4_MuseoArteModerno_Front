/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovimientoartisticoDetalleComponent } from './movimientoartistico-detalle.component';
import { faker } from '@faker-js/faker';
import { MovimientoartisticoDetail } from '../movimientoartistico-detail';
import { Pais } from 'src/app/pais/pais';

describe('MovimientoartisticoDetailComponent', () => {
 let component: MovimientoartisticoDetalleComponent;
 let fixture: ComponentFixture<MovimientoartisticoDetalleComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ MovimientoartisticoDetalleComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(MovimientoartisticoDetalleComponent);
   component = fixture.componentInstance;


   let pais = new Pais(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.image.imageUrl()
  );

   component.movimientoDetail= new MovimientoartisticoDetail(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.date.past(),
    [],
    [],
    [],
    pais
  );

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an img element', () => {
  expect(debug.query(By.css('img')).attributes['alt']).toEqual(
    component.movimientoDetail.nombre
  );
});
});
