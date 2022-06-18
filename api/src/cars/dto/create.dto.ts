import { IsNotEmpty, IsNumber, IsString } from "class-validator"

class Brand {
    @IsNumber()
    id: number
}

class Version {
    @IsString()
    name: string
}

class CarImage {
    @IsString()
    image: string
}

class CarSpecifications {
    @IsNumber()
    topSpeed: number

    @IsNumber()
    maxPower: number
}

export class CreateCarDTO {
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNotEmpty()
    brand: Brand

    @IsString()
    model: string

    @IsNumber()
    manufactureYear: number

    @IsNotEmpty()
    specifications: CarSpecifications

    @IsNotEmpty()
    images: CarImage[]

    @IsNotEmpty()
    version: Version
}

export class CreateBrandDTO {
    @IsString()
    name: string
}