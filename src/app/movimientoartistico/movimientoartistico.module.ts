import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovimientoartisticoListComponent} from './movimientoartistico-list/movimientoartistico-list.component';
import {MovimientoartisticoDetalleComponent} from './movimientoartistico-detalle/movimientoartistico-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovimientoartisticoListComponent, MovimientoartisticoDetalleComponent],
  exports: [MovimientoartisticoListComponent]
})
export class MovimientoartisticoModule { }
