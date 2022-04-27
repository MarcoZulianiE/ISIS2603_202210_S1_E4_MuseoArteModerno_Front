/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObraListComponent } from './obra-list.component';

describe('ObraListComponent', () => {
  let component: ObraListComponent;
  let fixture: ComponentFixture<ObraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
