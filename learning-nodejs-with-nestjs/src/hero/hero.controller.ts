import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
constructor(private heroService: HeroService) {}

@Get()
getHeroes() {
    return this.heroService.getAllHeroes();
}

@Get('filter')
getHeroesByUniverse(@Query('universe') universe: string){
    return this.heroService.getHeroesByUniverse(universe.toLocaleLowerCase());
}
}