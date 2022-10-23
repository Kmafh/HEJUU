import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gastos/gasto';
import { GastosbodyService } from './gastosbody.service';

@Component({
  selector: 'app-gastosbody',
  templateUrl: './gastosbody.component.html'
})
export class GastosbodyComponent implements OnInit {

  constructor(private gastoService: GastosbodyService) { }

  gasto: Gasto[] = [];
  ngOnInit(): void {
    this.gastoService.getIngresos().subscribe(
      gasto => this.gasto=gasto
  )}

}
