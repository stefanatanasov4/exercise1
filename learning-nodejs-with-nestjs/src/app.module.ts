import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';
//import { HeroController } from './hero/hero.controller';

@Module({
  imports: [ConfigModule.forRoot(), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
