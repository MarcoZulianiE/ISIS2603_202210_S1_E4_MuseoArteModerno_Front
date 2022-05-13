import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObraListComponent } from './obra-list/obra-list.component';
import { ObraDetailComponent } from './obra-detail/obra-detail.component';

const routes: Routes = [{
  path: 'obras',
  children: [
        {
          path: 'list',
          component: ObraListComponent
        },
        {
          path: ':id',
          component: ObraDetailComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObraRoutingModule{}
