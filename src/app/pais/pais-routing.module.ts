import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

const routes: Routes = [
  { path: 'paises/list', component: PaisListComponent },
  { path: 'paises/:id', component: PaisDetailComponent, outlet: 'detalle' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule{}
