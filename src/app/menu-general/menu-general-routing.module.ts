import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuGeneralComponent } from './menu-general.component';

const routes: Routes = [
  { path: 'menuGeneral', component: MenuGeneralComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuGeneralRoutingModule{}
