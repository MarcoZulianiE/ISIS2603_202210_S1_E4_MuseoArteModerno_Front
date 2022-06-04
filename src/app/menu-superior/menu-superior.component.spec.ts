/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MenuSuperiorComponent } from './menu-superior.component'

describe('MenuSuperiorComponent', () => {
 let component: MenuSuperiorComponent;
 let fixture: ComponentFixture<MenuSuperiorComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ MenuSuperiorComponent ],
     providers: []
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(MenuSuperiorComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h3 element ', () => {
    expect(debug.query(By.css('h3')).attributes['class']).toEqual( "menu-item" );
  });

});
