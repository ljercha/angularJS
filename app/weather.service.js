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
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getCurrentWeather = function (name) {
        var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31'; // URL to web API
        return this.http.get(locationURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherService.prototype.getCoordinates = function (name) {
        var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31'; // URL to web API
        return this.http.get(locationURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherService.prototype.fiveDayWeather = function (name) {
        var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31'; // URL to web API
        return this.http.get(locationURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherService.prototype.sixteenDayWeather = function (name) {
        var locationURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=2cdf64d521f39997bd4a656104cf4d31'; // URL to web API
        return this.http.get(locationURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WeatherService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    WeatherService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map