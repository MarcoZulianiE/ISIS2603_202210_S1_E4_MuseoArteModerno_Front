import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGeneralComponent } from './menu-general/menu-general.component';

const routes: Routes = [
  { path: '', component: MenuGeneralComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
