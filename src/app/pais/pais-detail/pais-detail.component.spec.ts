/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { faker } from '@faker-js/faker';
import { PaisDetailComponent } from './pais-detail.component';
import { Movimientoartistico } from "src/app/movimientoartistico/movimientoartistico";
import {Artista} from "src/app/artista/artista";
import {Ciudad} from "src/app/ciudad/ciudad";
import {Museo} from "src/app/museo/museo";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Pais } from 'src/app/pais/pais';
import { PaisDetail } from '../pais-detail';



describe('PaisDetailComponent', () => {
  let component: PaisDetailComponent;
  let fixture: ComponentFixture<PaisDetailComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [PaisDetailComponent],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetailComponent);
    component = fixture.componentInstance;

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    component.paisDetail = new PaisDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      faker.date.past(),
      pais,
      pais,
      [],
      [],
      []
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
      component.paisDetail.nombrePais
    );
  });

  it('should have an h3 element for pais name', () => {
    expect(debug.query(By.css('h3')).attributes['title']).toEqual(
      'nom_pais'
    );
  });
});
