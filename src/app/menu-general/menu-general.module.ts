import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuGeneralComponent } from './menu-general.component';
import { MenuGeneralRoutingModule } from './menu-general-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenuGeneralRoutingModule
  ],
  declarations: [MenuGeneralComponent]
})
export class MenuGeneralModule { }
