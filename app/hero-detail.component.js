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
var hero_service_1 = require('./hero.service');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_2 = require('angular2-google-maps/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            styles: ["\n    .sebm-google-map-container {\n      height: 300px;\n      width: 300px;\n    }\n  "],
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES] // this loads all angular2-google-maps directives in this component
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof hero_service_1.HeroService !== 'undefined' && hero_service_1.HeroService) === 'function' && _a) || Object, router_deprecated_1.RouteParams])
    ], HeroDetailComponent);
    return HeroDetailComponent;
    var _a;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map