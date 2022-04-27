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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovimientoartisticoModule,
    ArtistaModule,
    CiudadModule,
    HttpClientModule,
    PaisModule,
    MuseoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
