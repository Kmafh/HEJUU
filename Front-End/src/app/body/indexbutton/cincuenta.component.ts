import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cincuenta',
  templateUrl: './cincuenta.component.html'
})
export class CincuentaComponent implements OnInit {

  hability:boolean=true;
  habiliityex:boolean=false;
  lista: string[]=["Frigorifico","Television"];
  select: string;
  constructor() { }

  ngOnInit(): void {
  }
  formateaValor(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }
  sumar(valor1:number, valor2:number): number {
    result : Number;
    return this.formateaValor((valor1*valor2)*0.28);
  }
  sumarMes(valor1:number, valor2:number): number {
    result : Number;
    return this.formateaValor(((valor1*valor2)*0.28)*30);
  }
}
