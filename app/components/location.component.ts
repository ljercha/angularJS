import { Location } from '../models/location';
import { LocationDetailComponent } from '../components/location-detail.component';
import { LocationService } from '../services/location.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'my-location',
  templateUrl: 'app/location.component.html',
  styleUrls:  ['app/location.component.css'],
  providers: [LocationService]

})
export class LocationComponent implements OnInit {
  locations: Location[];
  selectedLocation: Location;
  constructor(
    private router: Router,
    private locationService: LocationService) { }
    
  getLocations() {
    this.locationService.getLocations().then(locations => this.locations = locations);
  }
  ngOnInit() {
    this.getLocations();
  }
  onSelect(location: Location) { this.selectedLocation = location; }
  gotoDetail() {
    this.router.navigate(['LocationDetail', { id: this.selectedLocation.id }]);
  }
}


