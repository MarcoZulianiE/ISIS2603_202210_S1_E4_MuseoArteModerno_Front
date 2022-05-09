/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseoDetailComponent } from './museo-detail.component';
import { faker } from '@faker-js/faker';
import { MuseoDetail } from '../museo-detail';
import { Pais } from 'src/app/pais/pais';

describe('MuseoDetailComponent', () => {
  let component: MuseoDetailComponent;
  let fixture: ComponentFixture<MuseoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
