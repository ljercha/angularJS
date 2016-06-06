import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LocationService }     from './location.service';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './location-detail.component';

import { DashboardComponent } from './dashboard.component';

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
    LocationService
  ]

})
export class AppComponent {
  title = 'Tour of Locations';
}
