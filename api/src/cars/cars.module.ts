import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarImage } from './entities/car-image.entity';
import { CarSpecifications } from './entities/specifications.entity';
import { Version } from './entities/version.entity';
import { Brand } from './entities/brand.entity';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car, CarImage, CarSpecifications, Version, Brand])
  ],
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule { }
