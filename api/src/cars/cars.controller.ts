import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateBrandDTO, CreateCarDTO } from './dto/create.dto';
import { Brand } from './entities/brand.entity';
import { Car } from './entities/car.entity';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) { }

    @Get('/getCars')
    async getCars(): Promise<Car[]> {
        return await this.carsService.getCars()
    }

    @Post('/new/brand')
    async createNewBrand(@Body() brand: CreateBrandDTO): Promise<Brand> {
        return await this.carsService.createNewBrand(brand)
    }

    @Post('/new/car')
    async createNewCar(@Body() car: CreateCarDTO): Promise<Car> {
        return await this.carsService.createNewCar(car)
    }
}
