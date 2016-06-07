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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_2 = require('angular2-google-maps/core');
var LocationDetailComponent = (function () {
    function LocationDetailComponent(locationService, routeParams) {
        this.locationService = locationService;
        this.routeParams = routeParams;
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.locationService.getLocation(id)
            .then(function (location) { return _this.location = location; });
        this.getHeroes();
    };
    LocationDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    LocationDetailComponent.prototype.getHeroes = function () {
        var _this = this;
        this.locationService.getHeroes()
            .subscribe(function (lokacja) { return _this.lokacja = lokacja; }, function (error) { return _this.errorMessage = error; });
    };
    LocationDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-location-detail',
            templateUrl: 'app/location-detail.component.html',
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n      width: 300px;\n    }\n  "],
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES] // this loads all angular2-google-maps directives in this component
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService, router_deprecated_1.RouteParams])
    ], LocationDetailComponent);
    return LocationDetailComponent;
}());
exports.LocationDetailComponent = LocationDetailComponent;
//# sourceMappingURL=location-detail.component.js.map