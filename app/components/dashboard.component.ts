import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
  
  })

export class DashboardComponent implements OnInit {
  locations: Location[] = [];
  
  constructor(
    private router: Router,
    private locationService: LocationService) {
  }
  
  ngOnInit() {
    this.locationService.getLocations()
      .then(locations => this.locations = locations.slice(1,5));
  }
  
  gotoDetail(location: Location) {
    let link = ['LocationDetail', { id: location.id }];
    this.router.navigate(link);
  }
}

