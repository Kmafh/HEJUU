import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Ingreso } from '../ingresos/ingreso';
import { IngresosbodyService } from './ingresosbody.service';


@Component({
  selector: 'app-ingresosbody',
  templateUrl: './ingresosbody.component.html'
})
export class IngresosbodyComponent implements OnInit {

  ingreso: Ingreso[] = [];
  constructor(private ingresoService: IngresosbodyService,private activatedRoute: ActivatedRoute) { }
  algo:boolean=false
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
