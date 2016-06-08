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
var location_service_1 = require('./location.service');
var weather_service_1 = require('./weather.service');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var WeatherDetailComponent = (function () {
    function WeatherDetailComponent(locationService, weatherService, router, routeParams) {
        this.locationService = locationService;
        this.weatherService = weatherService;
        this.router = router;
        this.routeParams = routeParams;
    }
    WeatherDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.locationService.getLocation(id).then(function (location) { return _this.location = location; })
            .then(function () { return _this.getCurrentWeather(_this.location.name); });
    };
    WeatherDetailComponent.prototype.getCurrentWeather = function (name) {
        var _this = this;
        this.weatherService.getCurrentWeather(name)
            .subscribe(function (weather) { return _this.weather = weather; }, function (error) { return _this.errorMessage = error; });
    };
    WeatherDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    WeatherDetailComponent = __decorate([
        core_1.Component({
            selector: 'weather-detail',
            templateUrl: 'app/weather-detail.component.html',
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n      width: 300px;\n      padding: 20px;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService, weather_service_1.WeatherService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], WeatherDetailComponent);
    return WeatherDetailComponent;
}());
exports.WeatherDetailComponent = WeatherDetailComponent;
//# sourceMappingURL=weather-detail.component.js.map