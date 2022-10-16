import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionNadvarComponent } from './option-nadvar/option-nadvar.component';
import { IngresosComponent } from './option-nadvar/ingresos.component';
import { GastosComponent } from './optionNadvar/gastos/gastos.component';



@NgModule({
  declarations: [
    OptionNadvarComponent,
    IngresosComponent,
    GastosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsexterModule { }
