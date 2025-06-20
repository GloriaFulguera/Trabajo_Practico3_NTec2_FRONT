import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../Services/categorias.service';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-movimientos',
  standalone: false,
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent implements OnInit{
  Categorias: any;
  Productos: any;
  Movimientos: any[] = [];

  CategoriaId: any;
  ProductoId: any;
  TipoMovimiento: string = '';
  Cantidad: number = 0;
  Descripcion: string = '';

  constructor(private categoriaService:CategoriasService, private productoService:ProductosService){}

  ngOnInit(): void {
    this.GetCategorias();
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
}
