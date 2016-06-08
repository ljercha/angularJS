import { Location } from '../models/location';
import { Weather, WeatherDetail, WeatherMain } from '../models/weather';

import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

import { Component, Input, OnInit } from '@angular/core';
import { Router,RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'weather-detail',
  templateUrl: 'app/weather-detail.component.html',
   styles: [`
    .sebm-google-map-container {
      height: 300px;
      width: 300px;
      padding: 20px;
    }
  `],

})
export class WeatherDetailComponent implements OnInit {
  location: Location;
  weather: Weather;
  
  errorMessage : String;
  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private router: Router,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.locationService.getLocation(id).then(location => this.location = location)
    .then( () => this.getCurrentWeather(this.location.name));
  }
  
  getCurrentWeather(name: string) {
    this.weatherService.getCurrentWeather(name)
                     .subscribe(
                       weather => this.weather = weather,
                       
                       error =>  this.errorMessage = <any>error);
  }
  
  toCelsius(kelvin: number) {
    return Math.round(kelvin - 272);
  }
  
  goBack() {
    window.history.back();
  }  
}
