import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarInput, NewBrandInput } from './dto/create.dto';
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

    public async createNewCar(car: CreateCarInput): Promise<Car> {
        try {
            const newCar = await this.carsRepository.create(car)
            if(!newCar) {
                throw new NotFoundException()
            }

            return await this.carsRepository.save(newCar)
        } catch (error) {
            console.log(error);
            
            throw new InternalServerErrorException()
        }
    }

    public async createNewBrand(brand: NewBrandInput): Promise<Brand> {
        try {
            const newBrand = await this.brandsRepository.create({
                ...brand,
                logo: "link"
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
