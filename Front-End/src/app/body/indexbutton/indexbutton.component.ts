import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-indexbutton',
  templateUrl: './indexbutton.component.html',
  styleUrls: ['./indexbutton.component.css']
})
export class IndexbuttonComponent implements OnInit {

  constructor() { }
  title=Constsa.WELLCOME.title;
  body=Constsa.WELLCOME.body;
  footer=Constsa.WELLCOME.footer;
  footeroption1=Constsa.WELLCOME.footeroption1;
  footerOpton2=Constsa.WELLCOME.footerOpton2;
  footerOpton3=Constsa.WELLCOME.footerOption3;
  footerOpton4=Constsa.WELLCOME.footerOption4;
  hability:boolean=false
  indextitleoption1=Constsa.INDEXOPTIONS.options1.title;
  indextitleoption2=Constsa.INDEXOPTIONS.options2.title;
  indextitleoption3=Constsa.INDEXOPTIONS.options3.title;
  indexBodyOption1=Constsa.INDEXOPTIONS.options1.body;
  indexBodyOption2=Constsa.INDEXOPTIONS.options2.body;
  indexBodyOption3=Constsa.INDEXOPTIONS.options3.body;
  ngOnInit(): void {
  }

}
