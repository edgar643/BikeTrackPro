import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: BicyclesComponent },
  { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: "full", redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
