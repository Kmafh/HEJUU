import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../gastos/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosbodyService {

  private urlEndPoint: string = "http://localhost:8080/api/gastos"

  constructor(private http: HttpClient) { }

  getIngresos(): Observable<Gasto[]>{
    return this.http.get<Gasto[]>( this.urlEndPoint);
  }
}
