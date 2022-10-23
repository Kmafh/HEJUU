import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './optionNadvar/gastos/gastos.component';
import { IngresosComponent } from './optionNadvar/ingresos/ingresos.component';
import { IngresosbodyComponent } from './optionNadvar/ingresosbody/ingresosbody.component';
import { IngresosadminComponent } from './optionNadvar/ingresosadmin/ingresosadmin.component';
import { GastosbodyComponent } from './optionNadvar/gastosbody/gastosbody.component';
import { GastosadminComponent } from './optionNadvar/gastosadmin/gastosadmin.component';
import { FuturoComponent } from './optionNadvar/gastosfuturo/futuro.component';
import { FuturoadminComponent } from './optionNadvar/futuroadmin/futuroadmin.component';
import { AddingresoComponent } from './optionNadvar/ingresosadmin/addingreso.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IngresosComponent,
    GastosComponent,
    IngresosbodyComponent,
    IngresosadminComponent,
    GastosbodyComponent,
    GastosadminComponent,
    FuturoComponent,
    FuturoadminComponent,
    AddingresoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsexterModule { }
