import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import { CiudadDetailComponent } from './ciudad-detail/ciudad-detail.component';

const routes: Routes = [
  { path: 'ciudades/list', component: CiudadListComponent },
  { path: 'ciudades/:id', component: CiudadDetailComponent, outlet: 'detalle' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule{}
