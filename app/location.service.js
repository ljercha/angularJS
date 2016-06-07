"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_locations_1 = require('./mock-locations');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.getLocations = function () {
        return Promise.resolve(mock_locations_1.LOCATIONS);
    };
    LocationService.prototype.getLocationsSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_locations_1.LOCATIONS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    LocationService.prototype.getLocation = function (id) {
        return this.getLocations()
            .then(function (locations) { return locations.filter(function (location) { return location.id === id; })[0]; });
    };
    //  private locationURL = 'http://api.openweathermap.org/data/2.5/weather?q= +  + 'APPID=2cdf64d521f39997bd4a656104cf4d31';  // URL to web API
    //private locationURL : string;
    //private locationURL = 'app/locations.json';
    LocationService.prototype.getCoordinates = function (name) {
        var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31'; // URL to web API
        return this.http.get(locationURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LocationService.prototype.extractData = function (res) {
        var body = res.json();
        return body.coord;
    };
    LocationService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map