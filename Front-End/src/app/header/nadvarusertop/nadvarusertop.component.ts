import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-nadvarusertop',
  templateUrl: './nadvarusertop.component.html'
})
export class NadvarusertopComponent implements OnInit {

  login:boolean=Constsa.LOGIN;
  User:string="Kamaflash"
  constructor() { }

  ngOnInit(): void {
  }

}
