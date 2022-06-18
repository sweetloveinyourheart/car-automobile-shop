import { Test, TestingModule } from '@nestjs/testing';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';

describe('CarsResolver', () => {
  let resolver: CarsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsResolver, CarsService],
    }).compile();

    resolver = module.get<CarsResolver>(CarsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
