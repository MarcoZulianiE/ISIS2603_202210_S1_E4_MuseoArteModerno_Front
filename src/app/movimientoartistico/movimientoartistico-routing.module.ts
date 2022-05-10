import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientoartisticoListComponent } from './movimientoartistico-list/movimientoartistico-list.component';
import { MovimientoartisticoDetalleComponent } from './movimientoartistico-detalle/movimientoartistico-detalle.component';

const routes: Routes = [{
  path: 'movimientoartistico',
  children: [
        {
          path: 'list',
          component: MovimientoartisticoListComponent
        },
        {
          path: ':id',
          component: MovimientoartisticoListComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoArtisticoRoutingModule{}
