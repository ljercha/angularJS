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
var NewLocationComponent = (function () {
    function NewLocationComponent(locationService, routeParams) {
        this.locationService = locationService;
        this.routeParams = routeParams;
    }
    NewLocationComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewLocationComponent.prototype.save = function () {
    };
    NewLocationComponent = __decorate([
        core_1.Component({
            selector: 'new-location',
            templateUrl: 'app/new-location.component.html'
        }), 
        __metadata('design:paramtypes', [location_service_1.LocationService, router_deprecated_1.RouteParams])
    ], NewLocationComponent);
    return NewLocationComponent;
}());
exports.NewLocationComponent = NewLocationComponent;
//# sourceMappingURL=new-location.component.js.map