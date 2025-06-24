import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './Pages/categorias/categorias.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { MovimientosComponent } from './Pages/movimientos/movimientos.component';
import { LoginComponent } from './Components/login/login.component';
import { ContainerComponent } from './Components/container/container.component';
import { LockComponent } from './Components/lock/lock.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"lock",component:LockComponent},
  {path:"home",component:ContainerComponent,
    children:[
      {path:"categorias",component:CategoriasComponent},
      {path:"productos",component:ProductosComponent},
      {path:"movimientos",component:MovimientosComponent}]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
