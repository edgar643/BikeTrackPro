import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RuteroComponent} from './components/rutero/rutero.component';
import { ConfiguracionComponent} from './components/configuracion/configuracion.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';

const APP_ROUTES: Routes = [
  { path: 'bicycles', component: BicyclesComponent },
  { path: 'login', component: LoginComponent }
 //, {path:'events',component:EventsComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
