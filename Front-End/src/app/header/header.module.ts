import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructmenuComponent } from './structmenu/structmenu.component';
import { CentermenuComponent } from './centermenu/centermenu.component';
import { NadvarusertopComponent } from './nadvarusertop/nadvarusertop.component';
import { NadvartopComponent } from './nadvartop/nadvartop.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StructmenuComponent,
    CentermenuComponent,
    NadvarusertopComponent,
    NadvartopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:      [ 
    StructmenuComponent, 
    CentermenuComponent  
  ]
})
export class HeaderModule { }
