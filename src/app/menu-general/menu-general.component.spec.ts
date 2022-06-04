/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MenuGeneralComponent } from './menu-general.component'

describe('MenuGeneralComponent', () => {
 let component: MenuGeneralComponent;
 let fixture: ComponentFixture<MenuGeneralComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ MenuGeneralComponent ],
     providers: []
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(MenuGeneralComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual( "MUSEOS" );
  });

});
