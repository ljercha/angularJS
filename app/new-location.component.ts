import { Location } from './location';
import { LocationService } from './location.service';

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
  selector: 'new-location',
  templateUrl: 'app/new-location.component.html'
  
})
export class NewLocationComponent {

  location: Location;

  constructor(
    private locationService: LocationService,
    private routeParams: RouteParams) {
  }
  
  goBack() {
    window.history.back();
  }
  
  save() {
    }
}
