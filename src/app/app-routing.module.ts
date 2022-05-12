import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseoListComponent } from './museo/museo-list/museo-list.component';

const routes: Routes = [
  { path: '', component: MuseoListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
