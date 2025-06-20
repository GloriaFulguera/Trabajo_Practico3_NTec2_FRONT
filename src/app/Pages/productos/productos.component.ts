import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { CategoriasService } from '../../Services/categorias.service';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  DataSource: any;
  Categorias: any;
  ProductoSeleccionado: any;

  Nombre: any;
  Descripcion: any;
  Stock: any;
  Precio: any;
  CategoriaId: any;

  constructor(private service: ProductosService, private categoriaService: CategoriasService) { }
  ngOnInit(): void {
    this.GetProductos();
    this.GetCategorias();
  }
  GetProductos() {
    return this.service.GetProductos().subscribe(x => {
      this.DataSource = x;
      console.log(this.DataSource);
    })
  }
  GetCategorias() {
    return this.categoriaService.GetCategorias().subscribe(x => {
      this.Categorias = x;
    });
  }
  CreateProducto() {
    let producto = {
      nombre: this.Nombre,
      descripcion: this.Descripcion,
      stock: this.Stock.toString(),
      precio: this.Precio.toString(),
      categoria_id: this.CategoriaId.toString()
    }
    return this.service.CreateProducto(producto).subscribe(x => {
      location.reload()
    })
  }
  EditProducto() {
    let producto = {
      id: this.ProductoSeleccionado.id,
      stock: this.Stock.toString(),
      precio: this.Precio.toString()
    }
    return this.service.EditProducto(producto).subscribe(x => {
      location.reload()
    })
  }
  DeleteProducto(id: any) {
    return this.service.DeleteProducto(id).subscribe(x => {
      location.reload()
    })
  }
  GetNombreCategoria(id: any) {
    let cat = this.Categorias.find((c: any) => c.id == id);
    return cat ? cat.nombre : "Desconocida";
  }
  SeleccionarProducto(producto:any){
    this.Nombre= producto.nombre;
    this.Descripcion= producto.descripcion;
    this.Stock= producto.stock;
    this.Precio= producto.precio;
    this.CategoriaId= producto.categoria_id;
  }
  LimpiarSeleccion(){
    this.Nombre= "";
    this.Descripcion= "";
    this.Stock= "";
    this.Precio= "";
    this.CategoriaId= "";
  }
}
