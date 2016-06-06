import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
  selector: 'new-heroes',
  templateUrl: 'app/new-heroes.component.html'
  
})
export class NewHeroesComponent {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }
  
  goBack() {
    window.history.back();
  }
  
  save() {
    }
}
