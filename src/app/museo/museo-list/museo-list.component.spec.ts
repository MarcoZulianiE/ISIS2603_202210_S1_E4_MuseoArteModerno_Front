/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MuseoListComponent } from './museo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Pais } from 'src/app/pais/pais';
import { MuseoDetail } from '../museo-detail';
import { MuseoService } from '../museo.service';

describe('MuseoListComponent', () => {
  let component: MuseoListComponent;
  let fixture: ComponentFixture<MuseoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MuseoListComponent ],
      providers: [ MuseoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoListComponent);
    component = fixture.componentInstance;

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );
    component.museos = [
      new MuseoDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      [],
      faker.datatype.number(),
      pais,
      [],
      [],
      []),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button element ', () => {
    expect(debug.query(By.css('button')).attributes['title']).toEqual( "filtrar" );
  }
  );

  it('should have a h5 element with card-title class', () => {
    expect(debug.query(By.css('h5')).attributes['class']).toEqual( "card-title" );
  }
  );

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.museos[0].nombre
    );
  }
  );

});
