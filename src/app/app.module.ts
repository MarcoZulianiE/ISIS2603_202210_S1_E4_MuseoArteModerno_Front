import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistaModule } from './artista/artista.module';
import {MovimientoartisticoModule} from './movimientoartistico/movimientoartistico.module';
import { CiudadModule } from './ciudad/ciudad.module';
import {PaisModule} from './pais/pais.module';
import { MuseoModule } from './museo/museo.module';
import { ObraModule } from './obra/obra.module';
//import { MapComponent } from './@core/components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    //MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovimientoartisticoModule,
    ArtistaModule,
    CiudadModule,
    ObraModule,
    HttpClientModule,
    PaisModule,
    MuseoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
