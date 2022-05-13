import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseoListComponent } from './museo-list/museo-list.component';
import { MuseoDetailComponent } from './museo-detail/museo-detail.component';
import { MuseoRoutingModule } from './museo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MuseoRoutingModule
  ],
  declarations: [MuseoListComponent, MuseoDetailComponent],
  exports: [MuseoListComponent, MuseoDetailComponent]
})
export class MuseoModule { }
