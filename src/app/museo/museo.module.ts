import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseoListComponent } from './museo-list/museo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuseoListComponent],
  exports: [MuseoListComponent]
})
export class MuseoModule { }
