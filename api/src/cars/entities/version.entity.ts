import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @OneToOne(type => Car, car => car.version)
  car: Car
}