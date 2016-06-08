import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LocationService }     from './services/location.service';
import { WeatherService }     from './services/weather.service';

import { LocationComponent } from './components/location.component';
import { LocationDetailComponent } from './components/location-detail.component';
import { WeatherDetailComponent } from './components/weather-detail.component';

import { DashboardComponent } from './components/dashboard.component';

@RouteConfig([
  {
    path: '/location',
    name: 'Location',
    component: LocationComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'LocationDetail',
    component: LocationDetailComponent
  },
  {
    path: '/weather-detail/:id',
    name: 'WeatherDetail',
    component: WeatherDetailComponent
  },
])

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Location']">Locations</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LocationService,
    WeatherService
  ]

})
export class AppComponent {
  title = 'Tour of Locations';
}
