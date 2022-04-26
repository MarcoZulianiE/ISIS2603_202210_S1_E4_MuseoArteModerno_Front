import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CiudadListComponent],
  exports:[CiudadListComponent]
})
export class CiudadModule { }
