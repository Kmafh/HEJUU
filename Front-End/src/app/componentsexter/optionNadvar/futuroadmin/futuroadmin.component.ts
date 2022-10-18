import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-futuroadmin',
  templateUrl: './futuroadmin.component.html',
  styleUrls: ['./futuroadmin.component.css']
})
export class FuturoadminComponent implements OnInit {

  dell:boolean=false;
  nav1title: String=Constsa.NAV_OPTION_INGRESS.options1.title;
  nav2title: String=Constsa.NAV_OPTION_INGRESS.options2.title;
  nav3title: String=Constsa.NAV_OPTION_INGRESS.options3.title;
  constructor() { }

  ngOnInit(): void {
  }

}
