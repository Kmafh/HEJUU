import { DatePipe, formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of ,map, throwError} from 'rxjs';
import swal from 'sweetalert2';
import { Ingreso } from '../ingresos/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosbodyService {

  private urlEndPoint: string = "http://localhost:8080/api/ingresos"
  private httpHearders = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient, private router: Router) { }

  getIngresos(): Observable<Ingreso[]>{
    return this.http.get( this.urlEndPoint).pipe(
      map(response => {
        let ingresos = response as Ingreso[];
        return ingresos.map(ingreso => {
          let datePipe = new DatePipe('en-US');
          ingreso.create_at=datePipe.transform(ingreso.create_at, 'dd/MM/yyyy');
          return ingreso;
        })
      })
    );
  }
  create(ingreso:Ingreso) : Observable<any>{
    return this.http.post<Ingreso>(this.urlEndPoint, ingreso , {headers:this.httpHearders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e)
      })
    )
  }

  getIngreso(id): Observable<Ingreso>{
    return this.http.get<Ingreso>( `${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        console.log("Error")
        this.router.navigate(['/ingresos']);
        swal('Error al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
  update(ingreso:Ingreso) : Observable<Ingreso>{
    return this.http.put<Ingreso>( `${this.urlEndPoint}/${ingreso.id}`,ingreso , {headers:this.httpHearders})
    .pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e)
      })
    );
  }
  delete(id:number): Observable<Ingreso>{
    return this.http.delete<Ingreso>( `${this.urlEndPoint}/${id}`,{headers:this.httpHearders})
    .pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e)
      })
    );
  }
}
