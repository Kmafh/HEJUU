import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-structmenu',
  templateUrl: './structmenu.component.html',
  styleUrls: ['./structmenu.component.css']
})
export class StructmenuComponent implements OnInit {

  login:boolean=Constsa.LOGIN;
  User:string="Kamaflash"
  constructor() { }

  ngOnInit(): void {
  }

}
