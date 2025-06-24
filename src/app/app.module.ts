import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/container/container.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CategoriasComponent } from './Pages/categorias/categorias.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { MovimientosComponent } from './Pages/movimientos/movimientos.component';
import { LoginComponent } from './Components/login/login.component';
import { LockComponent } from './Components/lock/lock.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    CategoriasComponent,
    ProductosComponent,
    MovimientosComponent,
    LoginComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
