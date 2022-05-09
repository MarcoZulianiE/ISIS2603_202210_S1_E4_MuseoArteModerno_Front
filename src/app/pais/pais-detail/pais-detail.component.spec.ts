/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisDetailComponent } from './pais-detail.component';
import { Movimientoartistico } from "src/app/movimientoartistico/movimientoartistico";
import {Artista} from "src/app/artista/artista";
import {Ciudad} from "src/app/ciudad/ciudad";
import {Museo} from "src/app/museo/museo";

describe('PaisDetailComponent', () => {
  let component: PaisDetailComponent;
  let fixture: ComponentFixture<PaisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
