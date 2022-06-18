import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class CarSpecifications {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topSpeed: number

  @Column()
  maxPower: number

  @OneToOne(type => Car, car => car.specifications)
  car: Car
}