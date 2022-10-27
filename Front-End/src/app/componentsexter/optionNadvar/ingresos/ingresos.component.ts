import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { IngresosbodyService } from '../ingresosbody/ingresosbody.service';
import { Ingreso } from './ingreso';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor(private ingresoService: IngresosbodyService,private activatedRoute: ActivatedRoute) { }
  ingreso: Ingreso[] = [];
  ngOnInit(): void {
    let page =0;
    this.activatedRoute.paramMap.subscribe(params => {
      let page:number = +params.get('page');
      if(!page)page=0;
    this.ingresoService.getIngresos(page)
    .pipe(
      tap(response => {
        console.log("IngresosComponent: tap3");
        (response.content as Ingreso[]).forEach(ingreso =>{

        })
      })
    ).subscribe(response => this.ingreso=response.content as Ingreso[]);
  })
  }

}
