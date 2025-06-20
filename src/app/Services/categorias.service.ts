import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url="https://localhost:7092/api/categorias/"
  constructor(private http:HttpClient) { }

  GetCategorias(){
    return this.http.get(this.url+"GetCategorias");
  }
  CreateCategoria(categoria:any){
    return this.http.post(this.url+"CreateCategoria",categoria);
  }
  EditCategoria(categoria:any){
    return this.http.put(this.url+"EditCategoria",categoria);
  }
  DeleteCategoria(id:any){
    return this.http.delete(this.url+"DeleteCategoria?id="+id);
  }
}
