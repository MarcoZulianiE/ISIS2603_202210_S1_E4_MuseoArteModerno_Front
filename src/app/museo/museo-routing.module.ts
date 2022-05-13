import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseoListComponent } from './museo-list/museo-list.component';
import { MuseoDetailComponent } from './museo-detail/museo-detail.component';

const routes: Routes = [{
  path: 'museos',
  children: [
        {
          path: 'list',
          component: MuseoListComponent
        },
        {
          path: ':id',
          component: MuseoDetailComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseoRoutingModule{}
