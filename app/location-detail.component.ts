import { Location } from './location';
import { Lokacja } from './lokacja';

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
  lokacja: Location;
  errorMessage : String;
  constructor(
    private locationService: LocationService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.locationService.getLocation(id)
      .then(location => this.location = location).then(() => this.getCoordinates(this.location.name));

      
  }
  goBack() {
    window.history.back();
  }
  
getCoordinates(name: string) {
    this.locationService.getCoordinates(name)
                     .subscribe(
                       coord => this.location.coord = coord,
                       error =>  this.errorMessage = <any>error);
  }
  

}
