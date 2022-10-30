import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constsa } from 'src/app/Constsa';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Usuario } from 'src/app/usuarios/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nadvarusertop',
  templateUrl: './nadvarusertop.component.html'
})
export class NadvarusertopComponent implements OnInit {

  login2: boolean = Constsa.LOGIN;
  User: string = "Kamaflash"
  sessionmouse:boolean=false
  usuario: Usuario;
  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal('Error Login','Username o password vacías!', 'error');
      return;
    }
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(response => {
      console.log("Response dentro: " + response);
      this.router.navigate(['/ingresos']);
      swal('Login',`Bienvenido ${response.username}`,'success');
    })
    console.log(this.usuario);
  }
}
