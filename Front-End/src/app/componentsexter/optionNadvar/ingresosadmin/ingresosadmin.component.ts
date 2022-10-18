import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-ingresosadmin',
  templateUrl: './ingresosadmin.component.html'
})
export class IngresosadminComponent implements OnInit {

  constructor() { }
  dell:boolean=false;
  nav1title: String=Constsa.NAV_OPTION_INGRESS.options1.title;
  nav2title: String=Constsa.NAV_OPTION_INGRESS.options2.title;
  nav3title: String=Constsa.NAV_OPTION_INGRESS.options3.title;
  ngOnInit(): void {
  }

}
