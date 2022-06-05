/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PaisListComponent } from './pais-list.component';
import { PaisService } from '../pais.service';
import { faker } from '@faker-js/faker';
import { Pais } from 'src/app/pais/pais';
import { PaisDetail } from '../pais-detail';


describe('PaisListComponent', () => {
  let component: PaisListComponent;
  let fixture: ComponentFixture<PaisListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PaisListComponent ],
      providers: [ PaisService ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(PaisListComponent);
    component = fixture.componentInstance;

    let pais = new Pais(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );
    component.paises = [
      new PaisDetail(faker.datatype.number(),faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      faker.date.past(),
      pais,
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
   });

   it('should have a h5 element with card-title class', () => {
     expect(debug.query(By.css('h5')).attributes['class']).toEqual( "card-title" );
   });

   it('should have an img element ', () => {
     expect(debug.query(By.css('img')).attributes['alt']).toEqual(
       component.paises[0].nombrePais
     );
   });

 });

