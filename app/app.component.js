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
var location_component_1 = require('./location.component');
var location_detail_component_1 = require('./location-detail.component');
var search_location_component_1 = require('./search-location.component');
var dashboard_component_1 = require('./dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Locations';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/location',
                name: 'Location',
                component: location_component_1.LocationComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'LocationDetail',
                component: location_detail_component_1.LocationDetailComponent
            },
            {
                path: '/search-location/',
                name: 'SearchLocation',
                component: search_location_component_1.SearchLocationComponent
            },
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <a [routerLink]=\"['Location']\">Locations</a>\n    <a [routerLink]=\"['SearchLocation']\">Search</a>\n\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                location_service_1.LocationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map