import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CarsService } from './cars.service';
import { CreateBrandDTO, CreateCarDTO } from './dto/create.dto';
import { Brand } from './entities/brand.entity';
import { Car } from './entities/car.entity';
import { MulterOptions } from './helpers/multer';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) { }

    @Get('/getCars')
    async getCars(): Promise<Car[]> {
        return await this.carsService.getCars()
    }

    @Get('/getBrands')
    async getBrands(): Promise<Brand[]> {
        return await this.carsService.getBrands()
    }

    @Post('/newBrand')
    @UseInterceptors(FileInterceptor('logo', MulterOptions("./public/logo")))
    async createNewBrand(
        @Body() brand: CreateBrandDTO,
        @UploadedFile() image: Express.Multer.File
    ): Promise<Brand> {
        return await this.carsService.createNewBrand(brand, image)
    }

    @Post('/newCar')
    @UseInterceptors(FilesInterceptor('images', 10, MulterOptions("./public/cars")))
    async createNewCar(
        @Body() car: CreateCarDTO,
        @UploadedFiles() images: Express.Multer.File[]
    ): Promise<Car> {
        return await this.carsService.createNewCar(car, images)
    }
}
