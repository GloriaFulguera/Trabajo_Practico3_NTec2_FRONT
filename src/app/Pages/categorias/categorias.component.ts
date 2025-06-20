import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  DataSource:any;
  Nombre:any;
  CategoriaSeleccionada:any;

  constructor(private service:CategoriasService){}
  ngOnInit(): void {
    this.GetCategorias();
  }

  GetCategorias(){
    return this.service.GetCategorias().subscribe(x=>{
      this.DataSource=x;
      console.log(this.DataSource);
    })
  }

  CreateCategoria(){
    let categoria={
      nombre:this.Nombre
    }
    this.service.CreateCategoria(categoria).subscribe(x=>{
      location.reload()
    })
  }

  EditCategoria(){
    let categoria={
      id:this.CategoriaSeleccionada.id,
      nombre:this.Nombre
    }
    this.service.EditCategoria(categoria).subscribe(x=>{
      location.reload()
    })
  }

  DeleteCategoria(){
    let cat_id=this.CategoriaSeleccionada.id;

    this.service.DeleteCategoria(cat_id).subscribe(x=>{
      location.reload()
    })
  }
  LimpiarInput(){
    this.Nombre="";
  }
}
