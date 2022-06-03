/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtistaDetailComponent } from './artista-detail.component';
import { faker } from '@faker-js/faker';
import { ArtistaDetail } from '../artista-detail';
import { Pais } from 'src/app/pais/pais';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ArtistaDetailComponent', () => {
  let component: ArtistaDetailComponent;
  let fixture: ComponentFixture<ArtistaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ArtistaDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaDetailComponent);
    component = fixture.componentInstance;

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    component.artistaDetail = new ArtistaDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      faker.date.past(),
      pais,
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
  });

  it('should have a div element for the detail', () => {
    expect(debug.query(By.css('div')).attributes['class']).toEqual('detalle');
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.artistaDetail.nombre
    );
  });

  it('should have an h3 element for artist name', () => {
    expect(debug.query(By.css('h3')).attributes['title']).toEqual(
      'nom_artista'
    );
  });
});
