import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndextopComponent } from './body/indextop/indextop.component';
import { GastosComponent } from './componentsexter/optionNadvar/gastos/gastos.component';
import { IngresosComponent } from './componentsexter/optionNadvar/ingresos/ingresos.component';

const routes: Routes = [
  { path: '', component: IndextopComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'gastos', component: GastosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
