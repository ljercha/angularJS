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
var router_deprecated_1 = require('@angular/router-deprecated');
var location_service_1 = require('./location.service');
var SearchLocationComponent = (function () {
    function SearchLocationComponent(router, locationService) {
        this.router = router;
        this.locationService = locationService;
        this.locations = [];
    }
    SearchLocationComponent.prototype.ngOnInit = function () {
    };
    SearchLocationComponent.prototype.gotoDetail = function (location) {
        var link = ['LocationDetail', { id: location.id }];
        this.router.navigate(link);
    };
    SearchLocationComponent = __decorate([
        core_1.Component({
            selector: 'search-location',
            templateUrl: 'app/search-location.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, location_service_1.LocationService])
    ], SearchLocationComponent);
    return SearchLocationComponent;
}());
exports.SearchLocationComponent = SearchLocationComponent;
//# sourceMappingURL=search-location.component.js.map