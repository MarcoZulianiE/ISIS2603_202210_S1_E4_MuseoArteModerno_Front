import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistaModule } from './artista/artista.module';
import {MovimientoartisticoModule} from './movimientoartistico/movimientoartistico.module';
import { CiudadModule } from './ciudad/ciudad.module';



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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
