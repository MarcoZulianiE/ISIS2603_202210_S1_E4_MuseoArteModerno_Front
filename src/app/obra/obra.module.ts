import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraListComponent } from './obra-list/obra-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ObraListComponent],
  declarations: [ObraListComponent]
})
export class ObraModule { }
