/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ObraListComponent } from './obra-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Pais } from 'src/app/pais/pais';
import { Museo } from 'src/app/museo/museo';
import { Artista } from 'src/app/artista/artista';
import { Movimientoartistico } from 'src/app/movimientoartistico/movimientoartistico';
import { ObraDetail } from '../obra-detail';
import { ObraService } from '../obra.service';

describe('obraListComponent', () => {
 let component: ObraListComponent;
 let fixture: ComponentFixture<ObraListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ObraListComponent ],
     providers: [ ObraService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ObraListComponent);
   component = fixture.componentInstance;

   let pais = new Pais(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.image.imageUrl()
  );
  let museo = new Museo(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    [],
    faker.datatype.number(),
    pais
  );
  let movimiento = new Movimientoartistico (
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.date.past(),
    pais
  )
  let artista  =new Artista(faker.datatype.number(),faker.lorem.sentence(),
     faker.image.imageUrl(),
     faker.date.past(),
     faker.date.past(),
     pais,
     pais)
   component.obras = [
     new ObraDetail(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.date.past(),
       faker.image.imageUrl(),
       museo,
       artista,
       movimiento
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

//  it('should have an img element ', () => {
//   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
//     component.obras[0].nombre
//   );
// });

});
