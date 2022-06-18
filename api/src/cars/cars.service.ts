import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDTO, CreateBrandDTO } from './dto/create.dto';
import { Brand } from './entities/brand.entity';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car) private carsRepository: Repository<Car>,
        @InjectRepository(Brand) private brandsRepository: Repository<Brand>
    ) { }
    
    public async getCars(): Promise<Car[]> {
        try {
            const result = await this.carsRepository.find({ relations: ['specifications', 'images', 'version', 'brand'] })
            
            return result
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    public async getBrands(): Promise<Brand[]> {
        try {
            const result = await this.brandsRepository.find()
        
            return result
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    public async createNewCar(car: CreateCarDTO, images: Express.Multer.File[]): Promise<Car> {
        try {
            const imagesLink = images.map((image) => {
                return {
                    image: image.filename
                }
            })

            const newCar = await this.carsRepository.create({
                ...car,
                images: imagesLink
            })
            if(!newCar) {
                throw new NotFoundException()
            }

            return await this.carsRepository.save(newCar)
        } catch (error) {
            console.log(error);
            
            throw new InternalServerErrorException()
        }
    }

    public async createNewBrand(brand: CreateBrandDTO, image: Express.Multer.File): Promise<Brand> {
        try {
            const newBrand = await this.brandsRepository.create({
                ...brand,
                logo: image.filename
            })
            if(!newBrand) {
                throw new NotFoundException()
            }

            return await this.brandsRepository.save(newBrand)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
