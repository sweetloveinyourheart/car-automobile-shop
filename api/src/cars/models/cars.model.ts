import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CarImage {
  @Field(type => Int)
  id: number;

  @Field()
  image: string
}

@ObjectType()
export class CarSpecifications {
  @Field(type => Int)
  id: number;

  @Field(type => Float)
  topSpeed: number

  @Field(type => Float)
  maxPower: number
}

@ObjectType()
export class Version {
  @Field(type => Int)
  id: number;

  @Field()
  name: string
}

@ObjectType()
export class Brand {
  @Field(type => Int)
  id: number;

  @Field()
  name: string
}

@ObjectType()
export class Car {
    @Field(type => Int)
    id: number

    @Field()
    name: string;
  
    @Field()
    model: string

    @Field(type => Float)
    price: number;

    @Field(type => Int)
    manufactureYear: number

    @Field()
    createAt: Date

    @Field(type => Boolean)
    available: boolean;

    @Field(type => Brand)
    brand: Brand

    @Field(type => [CarImage])
    images: CarImage[]

    @Field(type => CarSpecifications)
    specifications: CarSpecifications

    @Field(type => Version)
    version: Version
}