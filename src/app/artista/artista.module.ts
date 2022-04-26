import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtistaListComponent],
  exports: [ArtistaListComponent]
})
export class ArtistaModule { }
