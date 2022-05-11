import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';

const routes: Routes = [{
  path: 'artistas',
  children: [
        {
          path: 'list',
          component: ArtistaListComponent
        },
        {
          path: ':id',
          component: ArtistaDetailComponent
        },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistaRoutingModule{}
