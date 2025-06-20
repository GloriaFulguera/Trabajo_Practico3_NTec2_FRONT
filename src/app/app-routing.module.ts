import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './Pages/categorias/categorias.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { MovimientosComponent } from './Pages/movimientos/movimientos.component';

const routes: Routes = [
  //{path:"",component:CategoriasComponent},
  {path:"categorias",component:CategoriasComponent},
  {path:"productos",component:ProductosComponent},
  {path:"movimientos",component:MovimientosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
