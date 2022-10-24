import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingreso } from '../ingresos/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosbodyService {

  private urlEndPoint: string = "http://localhost:8080/api/ingresos"
  private httpHearders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getIngresos(): Observable<Ingreso[]>{
    return this.http.get<Ingreso[]>( this.urlEndPoint);
  }
  create(ingreso:Ingreso) : Observable<Ingreso>{
    return this.http.post<Ingreso>(this.urlEndPoint, ingreso , {headers:this.httpHearders})
  }

  getIngreso(id:number): Observable<Ingreso>{
    return this.http.get<Ingreso>( `${this.urlEndPoint}/${id}`);
  }
  update(ingreso:Ingreso) : Observable<Ingreso>{
    return this.http.put<Ingreso>( `${this.urlEndPoint}/${ingreso.id}`,ingreso , {headers:this.httpHearders});
  }
  delete(id:number): Observable<Ingreso>{
    return this.http.delete<Ingreso>( `${this.urlEndPoint}/${id}`,{headers:this.httpHearders});
  }
}
