import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarImage } from './entities/car-image.entity';
import { CarSpecifications } from './entities/specifications.entity';
import { Version } from './entities/version.entity';
import { Brand } from './entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car, CarImage, CarSpecifications, Version, Brand])
  ],
  providers: [CarsResolver, CarsService]
})
export class CarsModule {}
