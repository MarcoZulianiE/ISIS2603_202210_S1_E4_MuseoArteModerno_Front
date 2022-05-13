import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

const routes: Routes = [{
  path: 'paises',
  children: [
        {
          path: 'list',
          component: PaisListComponent
        },
        {
          path: ':id',
          component: PaisDetailComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule{}
