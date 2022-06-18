import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CreateCarInput, NewBrandInput } from './dto/create.dto';
import { Car } from './models/cars.model';

@Resolver()
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(returns => [Car])
  async getCars(): Promise<Car[]> {
    return await this.carsService.getCars();
  }

  @Mutation(returns => Car)
  async createCar(@Args('car') car: CreateCarInput) {
    return await this.carsService.createNewCar(car)
  }

  @Mutation(returns => Car)
  async createBrand(@Args('brand') brand: NewBrandInput) {
    return await this.carsService.createNewBrand(brand)
  }
}
