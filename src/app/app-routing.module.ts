import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';
import { EventsComponent } from './components/events/events.component';
import { MapComponent } from './components/map/map.component';
import { RentalComponent } from './components/rental/rental.component';
const routes: Routes = [
  { path: 'bicycles', component: BicyclesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'map', component: MapComponent },
  { path: 'rental', component: RentalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
