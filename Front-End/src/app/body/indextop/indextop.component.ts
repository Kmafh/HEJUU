import { Component, OnInit } from '@angular/core';
import { Constsa } from '../../Constsa';

@Component({
  selector: 'app-indextop',
  templateUrl: './indextop.component.html',
  styleUrls: ['./indextop.component.css']
})
export class IndextopComponent implements OnInit {

  
  title=Constsa.WELLCOME.title;
  body=Constsa.WELLCOME.body;
  footer=Constsa.WELLCOME.footer;
  footeroption1=Constsa.WELLCOME.footeroption1;
  footerOpton2=Constsa.WELLCOME.footerOpton2;
  footerOpton3=Constsa.WELLCOME.footerOption3;
  footerOpton4=Constsa.WELLCOME.footerOption4;
  hability:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
