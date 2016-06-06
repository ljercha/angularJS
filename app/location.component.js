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
var LocationComponent = (function () {
    function LocationComponent(router, locationService) {
        this.router = router;
        this.locationService = locationService;
    }
    LocationComponent.prototype.getLocations = function () {
        var _this = this;
        this.locationService.getLocations().then(function (locations) { return _this.locations = locations; });
    };
    LocationComponent.prototype.ngOnInit = function () {
        this.getLocations();
    };
    LocationComponent.prototype.onSelect = function (location) { this.selectedLocation = location; };
    LocationComponent.prototype.gotoDetail = function () {
        this.router.navigate(['LocationDetail', { id: this.selectedLocation.id }]);
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'my-location',
            templateUrl: 'app/location.component.html',
            styleUrls: ['app/location.component.css'],
            providers: [location_service_1.LocationService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, location_service_1.LocationService])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map