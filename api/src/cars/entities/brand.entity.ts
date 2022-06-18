import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  logo: string

  @OneToMany(type => Car, car => car.brand)
  car: Car[]
}