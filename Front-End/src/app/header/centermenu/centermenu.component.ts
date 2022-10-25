import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-centermenu',
  templateUrl: './centermenu.component.html'
})
export class CentermenuComponent implements OnInit {

  login:boolean=Constsa.LOGIN;
  User:string="Kamaflash"
  constructor() { }

  ngOnInit(): void {
  }

}
