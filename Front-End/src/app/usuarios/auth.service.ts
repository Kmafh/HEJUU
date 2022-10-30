import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    const urlEndpoint = 'http://localhost:8080/oauth/token';
    const credenciales = btoa('hejuu' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
    console.log("USUARIO: " + usuario.username);
    let params = new URLSearchParams();
    
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    console.log("Params: " + params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
  }
}
