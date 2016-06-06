import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
   styles: [`
    .sebm-google-map-container {
      height: 300px;
      width: 300px;
    }
  `],
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]// this loads all angular2-google-maps directives in this component

})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }
  
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }
  goBack() {
    window.history.back();
  }
}
