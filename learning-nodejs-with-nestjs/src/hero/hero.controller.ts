import { Controller, Get, Param } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
constructor(private heroService: HeroService) {}

@Get()
getHeroes() {
    return this.heroService.getAllHeroes();
}

@Get(':universe')
getHeroesByUniverse(@Param('universe') universe: string){
    return this.heroService.getHeroesByUniverse(universe.toLocaleLowerCase());
}
}