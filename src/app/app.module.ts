import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import{APP_ROUTING} from './app.routes';
//Servicios

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { MarcasComponent } from './components/marcas/marcas.component'
import { MarcasService } from './servicios/marcas.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { RuteroComponent } from './components/rutero/rutero.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { MenuVendedorComponent } from './components/menu-vendedor/menu-vendedor.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';

//Servicios

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PrincipalComponent,
    LoginComponent,
    MarcasComponent,
    ProductosComponent,
    ClientesComponent,
    VendedoresComponent,
    RuteroComponent,
    ConfiguracionComponent,
    MenuVendedorComponent, BicyclesComponent],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
