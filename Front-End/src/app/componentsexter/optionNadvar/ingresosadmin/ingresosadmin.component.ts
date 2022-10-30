import { Component, OnInit ,AfterViewInit, ViewChild} from '@angular/core';
import { Constsa } from 'src/app/Constsa';
import swal from 'sweetalert2';
import { Ingreso } from '../ingresos/ingreso';
import { IngresosbodyService } from '../ingresosbody/ingresosbody.service';
import {ActivatedRoute, Router} from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { tap } from 'rxjs';

@Component({
  selector: 'app-ingresosadmin',
  templateUrl: './ingresosadmin.component.html'
})
export class IngresosadminComponent implements OnInit {
  _router: any;
  _location: any;

  constructor(private ingresoService: IngresosbodyService,private router: Router,private activatedRoute: ActivatedRoute) { }
  dell:boolean=false;
  upd:boolean=false;
  nav1title: String=Constsa.NAV_OPTION_INGRESS.options1.title;
  nav2title: String=Constsa.NAV_OPTION_INGRESS.options2.title;
  nav3title: String=Constsa.NAV_OPTION_INGRESS.options3.title;
  ingreso: Ingreso[] = [];
  paginator: any;
  text:boolean=false;
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      let page:number = +params.get('page');
      if(!page)page=0;
      
    this.ingresoService.getIngresos(page)
    .pipe(
      tap(response => {
        console.log("IngresosComponent: tap3");
        (response.content as Ingreso[]).forEach(ingreso =>  console.log("IngresoAdmin"));
      })
    ).subscribe(response =>{
      this.ingreso=response.content as Ingreso[];
      this.paginator=response;
    } );
  })
}
  delete(ingreso:Ingreso):void{
    swal({
      title: 'Estás seguro?',
      text: "No podrás revertirlo!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
          this.ingresoService.delete(ingreso.id).subscribe(
            response => {
              this.ingreso=this.ingreso.filter(cli => cli !== ingreso)
              swal(
                'Eliminado!',
                `Ingreso ${ingreso.subject} ha sido eliminado.`,
                'success'
              )
            })
          }
             
    })
    
  }
  
  refresk(): void {
    window.location.reload();
  }
}
