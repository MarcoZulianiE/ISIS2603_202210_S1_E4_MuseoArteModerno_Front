import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientoartisticoListComponent } from './movimientoartistico-list/movimientoartistico-list.component';
import { MovimientoartisticoDetalleComponent } from './movimientoartistico-detalle/movimientoartistico-detalle.component';

const routes: Routes = [
  { path: 'movimientosartisticos/list', component: MovimientoartisticoListComponent },
  { path: 'movimientosartisticos/:id', component: MovimientoartisticoDetalleComponent, outlet: 'detalle' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoArtisticoRoutingModule{}
