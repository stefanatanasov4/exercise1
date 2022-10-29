import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  marvelHeroes: Hero[]=[
    { name: 'Spiderman', powers:['web'], universe:'Marvel'},
    { name: 'Black panther', powers:['strenght'], universe:'Marvel'},
    { name: 'Thor', powers:['thunder'], universe:'Marvel'},
    { name: 'Ironman', powers:['money'], universe:'Marvel'},

  ];
  dcHeroes: Hero[]=[
    { name: 'Batman', powers:['billionaire'], universe:'DC'},
    { name: 'Superman', powers:['strenght'], universe:'DC'},

  ];

  getAllHeroes(): Hero[]{
    const heroes=[... this.marvelHeroes, ... this.dcHeroes];

    return heroes;
  }

  getHeroesByUniverse(universe: string): Hero[]{
    const heroes = [... this.marvelHeroes, ... this.dcHeroes].filter ( 
        (hero) => hero.universe.toLocaleLowerCase() === universe
    );
    

    return heroes;
  }
}