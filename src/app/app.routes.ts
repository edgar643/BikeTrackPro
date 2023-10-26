import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';
import { EventsComponent } from './components/events/events.component';
const APP_ROUTES: Routes = [
  { path: 'bicycles', component: BicyclesComponent },
  { path: 'login', component: LoginComponent },
  {path:'events',component:EventsComponent}
  //{ path: '**', pathMatch: "full", redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
