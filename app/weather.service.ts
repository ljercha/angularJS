import { Injectable } from '@angular/core';
import { Location } from './location';
import { Weather, WeatherDetail, WeatherMain } from './weather';
import { Coordinates} from './coordinates';

import { LOCATIONS } from './mock-locations';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor (private http: Http) {}
  
  getCurrentWeather(name : string ): Observable<Weather> {
    var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31';  // URL to web API

    return this.http.get(locationURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
    getCoordinates (name : string ): Observable<Coordinates> {
    var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31';  // URL to web API

    return this.http.get(locationURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  
    fiveDayWeather (name : string ): Observable<Weather> {
    var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31';  // URL to web API

    return this.http.get(locationURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
    sixteenDayWeather (name : string ): Observable<Weather> {
    var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31';  // URL to web API

    return this.http.get(locationURL)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
   private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  
   private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
