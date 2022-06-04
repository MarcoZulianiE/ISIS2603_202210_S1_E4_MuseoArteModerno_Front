/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseoDetailComponent } from './museo-detail.component';
import { faker } from '@faker-js/faker';
import { MuseoDetail } from '../museo-detail';
import { Pais } from 'src/app/pais/pais';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('MuseoDetailComponent', () => {
  let component: MuseoDetailComponent;
  let fixture: ComponentFixture<MuseoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ MuseoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoDetailComponent);
    component = fixture.componentInstance;

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    component.museoDetail = new MuseoDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      [],
      faker.datatype.number(),
      pais,
      [],
      [],
      []
    );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }
  );

  it('should have a div element for the detail', () => {
    expect(debug.query(By.css('div')).attributes['class']).toEqual('detalle');
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.museoDetail.nombre
    );
  }
  );

  it('should have an h3 element for museums name', () => {
    expect(debug.query(By.css('h3')).attributes['title']).toEqual(
      'nom_museo'
    );
  }
  );

});
