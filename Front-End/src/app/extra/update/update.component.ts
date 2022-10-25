import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingreso } from 'src/app/componentsexter/optionNadvar/ingresos/ingreso';
import { IngresosbodyService } from 'src/app/componentsexter/optionNadvar/ingresosbody/ingresosbody.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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
    console.log("Creado!");
    console.log(this.ingreso.subject);
    this.ingresoService.create(this.ingreso)
    .subscribe(json =>{
      this.router.navigate(['/ingresos'])
      swal('Nuevo Ingreso',`Has ingresado ${json.ingreso.subject} con éxito`,'success')
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
