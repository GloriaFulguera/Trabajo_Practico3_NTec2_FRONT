import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { ProductosService } from '../../Services/productos.service';
import { MovimientosService } from '../../Services/movimientos.service';
import * as XLSX from 'xlsx';
import { Xliff } from '@angular/compiler';

@Component({
  selector: 'app-movimientos',
  standalone: false,
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent implements OnInit{
  Categorias: any;
  Productos: any;
  Movimientos: any;

  CategoriaId: any;
  ProductoId: any;
  TipoMovimiento: any;
  Cantidad: any;
  Descripcion: any;

  constructor(private categoriaService:CategoriasService, private productoService:ProductosService,private service:MovimientosService){}

  ngOnInit(): void {
    this.GetCategorias();
    this.GetMovimientos();
  }

  GetCategorias(){
    return this.categoriaService.GetCategorias().subscribe(x=>{
      this.Categorias=x;
    })
  }
  GetProductosPorCategoria(){
    console.log("estoy guardando: "+this.CategoriaId);
    return this.productoService.GetProductoPorCategoria(this.CategoriaId).subscribe(x=>{
      this.Productos=x;
    })
  }
  GetMovimientos(){
    return this.service.GetMovimientos().subscribe(x=>{
      this.Movimientos=x;
    })
  }
  CreateMovimiento(){
    let movimiento={
      producto_id:this.ProductoId,
      tipo:this.TipoMovimiento,
      cantidad:this.Cantidad.toString(),
      observacion:this.Descripcion
    }
    console.log("tengo esto: "+movimiento)
    return this.service.CreateMovimiento(movimiento).subscribe(x=>{
      if(x==false){
        alert("No se pudo ingresar el movimiento")
      }
      else{
        location.reload();
      }
    })
  }
  Exportar_Excel(){
    const elementTable=document.getElementById('tabla');
    const hoja:XLSX.WorkSheet=XLSX.utils.table_to_sheet(elementTable);
    const libro:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro,hoja,'datos');
    XLSX.writeFile(libro,'movimientos.xlsx');
  }
}
