import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeesModule } from './coffees/coffees.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     DATABASE_HOST: Joi.required(),
    //     DATABASE_PORT: Joi.number().default(5432),
    //   }),
    // }),
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    CoffeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/iluvcoffee'),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: process.env.DATABASE_HOST,
    //     port: +process.env.DATABASE_PORT,
    //     username: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASSWORD,
    //     database: process.env.DATABASE_NAME,
    //     autoLoadEntities: true,
    //     synchronize: true,
    //   }),
    // }),
    CoffeeRatingModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
