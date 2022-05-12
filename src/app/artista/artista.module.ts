import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';
import { ArtistaRoutingModule } from './artista-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistaRoutingModule
  ],
  declarations: [ArtistaListComponent,ArtistaDetailComponent],
  exports: [ArtistaListComponent,ArtistaDetailComponent]
})
export class ArtistaModule { }
