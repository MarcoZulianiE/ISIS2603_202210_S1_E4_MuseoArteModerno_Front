import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraListComponent } from './obra-list/obra-list.component';
import { ObraDetailComponent } from './obra-detail/obra-detail.component';
import { ObraRoutingModule } from './obra-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObraRoutingModule
  ],
  exports: [ObraListComponent, ObraDetailComponent],
  declarations: [ObraListComponent, ObraDetailComponent]
})
export class ObraModule { }
