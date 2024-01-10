import { Component } from '@angular/core';
import { Hero } from '../hero';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import {
  /* . . . */
  NgIf,
  NgFor,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    imports: [
        FormsModule,
        NgIf,
        NgFor,
        UpperCasePipe,
        HeroDetailComponent,
        RouterModule
    ]
})

export class HeroesComponent {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}