import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObraListComponent } from './obra-list/obra-list.component';
import { ObraDetailComponent } from './obra-detail/obra-detail.component';

const routes: Routes = [
  { path: 'obras/list', component: ObraListComponent },
  { path: 'obras/:id', component: ObraDetailComponent, outlet: 'detalle' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class ObraRoutingModule{}
