import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'search-location',
  templateUrl: 'app/search-location.component.html'
  
  })

export class SearchLocationComponent implements OnInit {
  locations: Location[] = [];
  
  searchedLocationName : String;
  
  constructor(
    private router: Router,
    private locationService: LocationService) {
  }
  
  ngOnInit() {
  }
  
  gotoDetail(location: Location) {
    let link = ['LocationDetail', { id: location.id }];
    this.router.navigate(link);
  }
}

