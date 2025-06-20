import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url="https://localhost:7092/api/productos/";
  constructor(private http:HttpClient) { }

  GetProductos(){
    return this.http.get(this.url+"GetProductos");
  }
  CreateProducto(producto:any){
    return this.http.post(this.url+"CreateProducto",producto);
  }
  EditProducto(producto:any){
    return this.http.put(this.url+"EditProducto",producto);
  }
  DeleteProducto(id:any){
    return this.http.delete(this.url+"DeleteProducto?id="+id);
  }
}
