import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';

const routes: Routes = [
  { path: 'artistas/list', component: ArtistaListComponent },
  { path: 'artistas/:id', component: ArtistaDetailComponent, outlet: 'detalle' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistaRoutingModule{}
