import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { PaisRoutingModule } from './pais-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PaisRoutingModule
  ],
  declarations: [PaisListComponent, PaisDetailComponent],
  exports: [PaisListComponent]
})
export class PaisModule { }
