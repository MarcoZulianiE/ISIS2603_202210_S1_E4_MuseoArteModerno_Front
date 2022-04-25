/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovimientoartisticoListComponent } from './movimientoartistico-list.component';

describe('MovimientoartisticoListComponent', () => {
  let component: MovimientoartisticoListComponent;
  let fixture: ComponentFixture<MovimientoartisticoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoartisticoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoartisticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
