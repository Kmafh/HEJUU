import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';

@Component({
  selector: 'app-indexbutton',
  templateUrl: './indexbutton.component.html',
  styleUrls: ['./indexbutton.component.css']
})
export class IndexbuttonComponent implements OnInit {

  constructor() { }

  indextitleoption1=Constsa.INDEXOPTIONS.options1.title;
  indextitleoption2=Constsa.INDEXOPTIONS.options2.title;
  indextitleoption3=Constsa.INDEXOPTIONS.options3.title;
  indexBodyOption1=Constsa.INDEXOPTIONS.options1.body;
  indexBodyOption2=Constsa.INDEXOPTIONS.options2.body;
  indexBodyOption3=Constsa.INDEXOPTIONS.options3.body;
  ngOnInit(): void {
  }

}
