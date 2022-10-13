import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructmenuComponent } from './structmenu/structmenu.component';
import { CentermenuComponent } from './centermenu/centermenu.component';
import { NadvarusertopComponent } from './nadvarusertop/nadvarusertop.component';
import { NadvartopComponent } from './nadvartop/nadvartop.component';



@NgModule({
  declarations: [
    StructmenuComponent,
    CentermenuComponent,
    NadvarusertopComponent,
    NadvartopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:      [ StructmenuComponent  ]
})
export class HeaderModule { }
