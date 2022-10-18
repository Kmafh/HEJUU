import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './optionNadvar/gastos/gastos.component';
import { IngresosComponent } from './optionNadvar/ingresos/ingresos.component';
import { IngresosbodyComponent } from './optionNadvar/ingresosbody/ingresosbody.component';
import { IngresosadminComponent } from './optionNadvar/ingresosadmin/ingresosadmin.component';



@NgModule({
  declarations: [
    IngresosComponent,
    GastosComponent,
    IngresosbodyComponent,
    IngresosadminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsexterModule { }
