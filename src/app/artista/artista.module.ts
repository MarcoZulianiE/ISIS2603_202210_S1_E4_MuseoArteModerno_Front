import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtistaListComponent,ArtistaDetailComponent],
  exports: [ArtistaListComponent,ArtistaDetailComponent]
})
export class ArtistaModule { }
