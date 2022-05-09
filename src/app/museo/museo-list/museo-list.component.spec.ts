/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseoListComponent } from './museo-list.component';

describe('MuseoListComponent', () => {
  let component: MuseoListComponent;
  let fixture: ComponentFixture<MuseoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
