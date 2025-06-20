import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  url="https://localhost:7092/api/movimientos/";
  constructor(private http:HttpClient) { }

  GetMovimientos(){
    return this.http.get(this.url+"GetMovimientos");
  }
  CreateMovimiento(movimiento:any){
    return this.http.post(this.url+"CreateMovimiento",movimiento);
  }
}
