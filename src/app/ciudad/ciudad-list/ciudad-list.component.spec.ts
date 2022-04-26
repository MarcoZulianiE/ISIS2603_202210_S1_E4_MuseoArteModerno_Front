/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CiudadListComponent } from './ciudad-list.component';

describe('CiudadListComponent', () => {
  let component: CiudadListComponent;
  let fixture: ComponentFixture<CiudadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
