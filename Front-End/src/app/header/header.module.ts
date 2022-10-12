import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructmenuComponent } from './structmenu/structmenu.component';



@NgModule({
  declarations: [
    StructmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:      [ StructmenuComponent  ]
})
export class HeaderModule { }
