/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MovimientoartisticoListComponent } from './movimientoartistico-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MovimientoartisticoDetail} from "../movimientoartistico-detail";
import { Pais } from 'src/app/pais/pais';
import {MovimientoartisticoService} from '../movimientoartistico.service'

describe('MovimientoartisticoDetalleComponent', () => {
  let component: MovimientoartisticoListComponent;
  let fixture: ComponentFixture<MovimientoartisticoListComponent>;
  let debug = DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MovimientoartisticoListComponent ],
      providers: [MovimientoartisticoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoartisticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
     );

  component.artistas = [new MovimientoartisticoDetail(faker.datatype.number(), faker.lorem.sentence(), faker.image.imageUrl(), faker.lorem.sentence(), faker.date.pas(), [], [], [], pais)];
  fixture.detectChanges();
  debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
