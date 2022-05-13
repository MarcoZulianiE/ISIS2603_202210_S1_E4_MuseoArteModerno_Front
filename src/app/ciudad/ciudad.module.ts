import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';
import { CiudadDetailComponent } from './ciudad-detail/ciudad-detail.component';
import { CiudadRoutingModule } from './ciudad-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CiudadRoutingModule
  ],
  declarations: [CiudadListComponent,CiudadDetailComponent],
  exports:[CiudadListComponent]
})
export class CiudadModule { }
