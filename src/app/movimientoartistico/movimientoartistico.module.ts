import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovimientoartisticoListComponent} from './movimientoartistico-list/movimientoartistico-list.component';
import {MovimientoartisticoDetalleComponent} from './movimientoartistico-detalle/movimientoartistico-detalle.component';
import { MovimientoArtisticoRoutingModule } from './movimientoartistico-routing.module';;

@NgModule({
  imports: [
    CommonModule,
    MovimientoArtisticoRoutingModule
  ],
  declarations: [MovimientoartisticoListComponent, MovimientoartisticoDetalleComponent],
  exports: [MovimientoartisticoListComponent]
})
export class MovimientoartisticoModule { }
