import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovimientoartisticoListComponent} from './movimientoartistico-list/movimientoartistico-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovimientoartisticoListComponent],
  exports: [MovimientoartisticoListComponent]
})
export class MovimientoartisticoModule { }
