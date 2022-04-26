import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistaModule } from './artista/artista.module';
import {MovimientoartisticoModule} from './movimientoartistico/movimientoartistico.module';
<<<<<<< Updated upstream
import { CiudadModule } from './ciudad/ciudad.module';


import {PaisModule} from './pais/pais.module';
=======
import { MuseoModule } from './museo/museo.module';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovimientoartisticoModule,
    ArtistaModule,
<<<<<<< Updated upstream
    CiudadModule,
    HttpClientModule,
    PaisModule
=======
    MuseoModule,
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
