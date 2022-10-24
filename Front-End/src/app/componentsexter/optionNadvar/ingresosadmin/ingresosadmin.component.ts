import { Component, OnInit } from '@angular/core';
import { Constsa } from 'src/app/Constsa';
import swal from 'sweetalert2';
import { Ingreso } from '../ingresos/ingreso';
import { IngresosbodyService } from '../ingresosbody/ingresosbody.service';

@Component({
  selector: 'app-ingresosadmin',
  templateUrl: './ingresosadmin.component.html'
})
export class IngresosadminComponent implements OnInit {

  constructor(private ingresoService: IngresosbodyService) { }
  dell:boolean=false;
  nav1title: String=Constsa.NAV_OPTION_INGRESS.options1.title;
  nav2title: String=Constsa.NAV_OPTION_INGRESS.options2.title;
  nav3title: String=Constsa.NAV_OPTION_INGRESS.options3.title;
  ingreso: Ingreso[] = [];
  ngOnInit(): void {
    this.ingresoService.getIngresos().subscribe(
      ingreso => this.ingreso=ingreso)
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
}
