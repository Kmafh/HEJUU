import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UpdateComponent
  ]
})
export class ExtraModule { }
