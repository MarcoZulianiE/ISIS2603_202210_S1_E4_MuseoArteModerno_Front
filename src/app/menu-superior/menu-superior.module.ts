import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior.component';
import { MenuSuperiorRoutingModule } from './menu-superior-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuSuperiorRoutingModule
  ],
  declarations: [MenuSuperiorComponent]
})
export class MenuSuperiorModule { }
