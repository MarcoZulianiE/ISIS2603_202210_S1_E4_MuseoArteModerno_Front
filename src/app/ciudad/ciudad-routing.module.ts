import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import { CiudadDetailComponent } from './ciudad-detail/ciudad-detail.component';

const routes: Routes = [{
  path: 'ciudades',
  children: [
        {
          path: 'list',
          component: CiudadListComponent
        },
        {
          path: ':id',
          component: CiudadDetailComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule{}
