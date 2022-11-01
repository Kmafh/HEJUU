import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndextopComponent } from './indextop/indextop.component';
import { IndexbuttonComponent } from './indexbutton/indexbutton.component';
import { CincuentaComponent } from './indexbutton/cincuenta.component';



@NgModule({
  declarations: [
    IndextopComponent,
    IndexbuttonComponent,
    CincuentaComponent
  ],
  imports: [ CommonModule ],
  exports: [ IndextopComponent,CincuentaComponent ]
})
export class BodyModule { }
