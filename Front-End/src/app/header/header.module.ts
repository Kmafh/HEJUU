import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructmenuComponent } from './structmenu/structmenu.component';
import { CentermenuComponent } from './centermenu/centermenu.component';
import { NadvarusertopComponent } from './nadvarusertop/nadvarusertop.component';
import { NadvartopComponent } from './nadvartop/nadvartop.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BodyModule } from '../body/body.module';



@NgModule({
  declarations: [
    StructmenuComponent,
    CentermenuComponent,
    NadvarusertopComponent,
    NadvartopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BodyModule
  ],
  exports:      [ 
    StructmenuComponent, 
    CentermenuComponent  
  ]
})
export class HeaderModule { }
