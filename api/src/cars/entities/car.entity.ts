import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Brand } from './brand.entity';
import { CarImage } from './car-image.entity';
import { CarSpecifications } from './specifications.entity';
import { Version } from './version.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  model: string

  @Column()
  price: number;

  @Column()
  manufactureYear: number

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @Column({ default: true })
  available: boolean;

  @ManyToOne(type => Brand, brand => brand.car)
  brand: Brand

  @OneToOne(type => CarSpecifications, specifications => specifications.car, { cascade: true })
  @JoinColumn()
  specifications: CarSpecifications

  @OneToOne(type => Version, version => version.car, { cascade: true })
  @JoinColumn()
  version: Version

  @OneToMany(type => CarImage, image => image.car, { cascade: true })
  images: CarImage[]
}