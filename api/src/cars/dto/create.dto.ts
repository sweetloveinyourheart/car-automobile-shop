import { Field, Float, InputType, Int } from "@nestjs/graphql";

@InputType()
export class BrandInput {
    @Field(type => Int)
    id: number
}

@InputType()
export class VersionInput {
    @Field()
    name: string
}

@InputType()
export class CarImageInput {
    @Field()
    image: string
}

@InputType()
export class CarSpecificationsInput {
    @Field(type => Float)
    topSpeed: number

    @Field(type => Float)
    maxPower: number
}

@InputType()
export class CreateCarInput {
    @Field()
    name: string;

    @Field(type => Float)
    price: number;

    @Field(type => BrandInput)
    brand: BrandInput
  
    @Field()
    model: string

    @Field(type => Int)
    manufactureYear: number

    @Field(type => CarSpecificationsInput)
    specifications: CarSpecificationsInput

    @Field(type => [CarImageInput])
    images: CarImageInput[]

    @Field(type => VersionInput)
    version: VersionInput
}

@InputType()
export class NewBrandInput {
    @Field()
    name: string
}