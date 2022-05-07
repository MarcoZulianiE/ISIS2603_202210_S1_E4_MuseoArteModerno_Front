/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtistaListComponent } from './artista-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Pais } from 'src/app/pais/pais';
import { ArtistaDetail } from '../artista-detail';
import { ArtistaService } from '../artista.service';

describe('ArtistaListComponent', () => {
 let component: ArtistaListComponent;
 let fixture: ComponentFixture<ArtistaListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ArtistaListComponent ],
     providers: [ ArtistaService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ArtistaListComponent);
   component = fixture.componentInstance;

   let pais = new Pais(
     faker.datatype.number(),
     faker.lorem.sentence(),
     faker.lorem.sentence()
   );
   component.artistas = [
     new ArtistaDetail(faker.datatype.number(),faker.lorem.sentence(),
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

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.artistas[0].nombre
    );
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

});
