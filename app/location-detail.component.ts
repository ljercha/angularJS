import { Location } from './location';
import { LocationService } from './location.service';

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';


@Component({
  selector: 'my-location-detail',
  templateUrl: 'app/location-detail.component.html',
   styles: [`
    .sebm-google-map-container {
      height: 300px;
      width: 300px;
    }
  `],
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]// this loads all angular2-google-maps directives in this component

})
export class LocationDetailComponent implements OnInit {

  location: Location;
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private locationService: LocationService,
    private routeParams: RouteParams) {
  }
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.locationService.getLocation(id)
      .then(location => this.location = location);
  }
  goBack() {
    window.history.back();
  }
}
