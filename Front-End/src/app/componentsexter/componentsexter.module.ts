import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './optionNadvar/gastos/gastos.component';
import { IngresosComponent } from './optionNadvar/ingresos/ingresos.component';



@NgModule({
  declarations: [
    IngresosComponent,
    GastosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsexterModule { }
