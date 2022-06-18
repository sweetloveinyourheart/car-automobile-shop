import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class CarImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string

  @ManyToOne(type => Car, car => car.images)
  car: Car
}