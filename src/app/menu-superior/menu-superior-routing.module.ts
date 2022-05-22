import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior.component';

const routes: Routes = [
  { path: 'menusup', component: MenuSuperiorComponent, outlet: 'menusup' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuSuperiorRoutingModule{}
