import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndextopComponent } from './body/indextop/indextop.component';
import { GastosComponent } from './componentsexter/optionNadvar/gastos/gastos.component';
import { IngresosComponent } from './componentsexter/optionNadvar/ingresos/ingresos.component';
import { IngresosbodyComponent } from './componentsexter/optionNadvar/ingresosbody/ingresosbody.component';
import { UpdateComponent } from './extra/update/update.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: IndextopComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'ingresos/page/:page', component: IngresosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
