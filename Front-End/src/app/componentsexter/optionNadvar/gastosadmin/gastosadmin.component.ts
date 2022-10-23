import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';
import { Gasto } from '../gastos/gasto';
import { GastosbodyService } from '../gastosbody/gastosbody.service';
import { IngresosbodyService } from '../ingresosbody/ingresosbody.service';

@Component({
  selector: 'app-gastosadmin',
  templateUrl: './gastosadmin.component.html'
})
export class GastosadminComponent implements OnInit {

  dell:boolean=false;
  nav1title: String=Constsa.NAV_OPTION_INGRESS.options1.title;
  nav2title: String=Constsa.NAV_OPTION_INGRESS.options2.title;
  nav3title: String=Constsa.NAV_OPTION_INGRESS.options3.title;
  constructor(private gastosService: GastosbodyService) { }
  gasto: Gasto[] = [];
  ngOnInit(): void {
    this.gastosService.getIngresos().subscribe(
      gasto => this.gasto=gasto)
  }

}
