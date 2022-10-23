import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingresos/ingreso';
import { IngresosbodyService } from './ingresosbody.service';

@Component({
  selector: 'app-ingresosbody',
  templateUrl: './ingresosbody.component.html'
})
export class IngresosbodyComponent implements OnInit {

  ingreso: Ingreso[] = [];
  constructor(private ingresoService: IngresosbodyService) { }

  ngOnInit(): void {
    this.ingresoService.getIngresos().subscribe(
      ingreso => this.ingreso=ingreso
    );
  }

}
