/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MovimientoartisticoDetalleComponent } from './movimientoartistico-detalle.component';
import {MovimientoartisticoDetail} from "../movimientoartistico-detail";
import { Pais } from 'src/app/pais/pais';

describe('MovimientoartisticoDetalleComponent', () => {
  let component: MovimientoartisticoDetalleComponent;
  let fixture: ComponentFixture<MovimientoartisticoDetalleComponent>;
  let debug = DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoartisticoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoartisticoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
     );

    component.movimientoDetail = new MovimientoartisticoDetail(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.date.pas(), [], [], [], pais);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
