import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraListComponent } from './obra-list/obra-list.component';
import { ObraDetailComponent } from './obra-detail/obra-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ObraListComponent],
  declarations: [ObraListComponent, ObraDetailComponent]
})
export class ObraModule { }
