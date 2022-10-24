import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Ingreso } from '../ingresos/ingreso';
import { IngresosbodyService } from '../ingresosbody/ingresosbody.service';

@Component({
  selector: 'app-addingreso',
  templateUrl: './addingreso.component.html'
})
export class AddingresoComponent implements OnInit {

  public ingreso: Ingreso= new Ingreso();

  constructor(private ingresoService: IngresosbodyService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uploadIngreso();
  }
  refresh(): void { window.location.reload(); }

  public uploadIngreso(): void{
    console.log("Clicked!");
    console.log(this.ingreso.subject);
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.ingresoService.getIngreso(id).subscribe(
          (ingreso)=>this.ingreso=ingreso
        )
      }
    })
  }
  public create(): void{
    console.log("Clicked!");
    console.log(this.ingreso.subject);
    this.ingresoService.create(this.ingreso)
    .subscribe(INGRESO =>{
      this.router.navigate(['/ingresos'])
      swal('Nuevo Ingreso',`Has ingresado ${this.ingreso.subject} con éxito`,'success')
    }
    )
  }
  update():void{
    this.ingresoService.update(this.ingreso)
    .subscribe( ingreso => {
      this.router.navigate(['/ingresos'])
      swal('Ingreso Actualizado',`Ingreso ${ingreso.subject} actualizado con éxito`,'success')
  })
  }
}
