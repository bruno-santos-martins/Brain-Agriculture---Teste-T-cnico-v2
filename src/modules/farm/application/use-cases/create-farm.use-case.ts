import { Injectable, BadRequestException } from '@nestjs/common';
import { FarmRepositoryPort } from '../ports/farm.repository';
import { Farm } from '../../domain/farm.entity';

@Injectable()
export class CreateFarmUseCase {
  constructor(private readonly repository: FarmRepositoryPort) {}

  async execute(data: Partial<Farm>): Promise<Farm> {
    if (!data.totalArea || !data.agriculturalArea || !data.vegetationArea) {
      throw new BadRequestException('Area values must be provided.');
    }

    const sum = Number(data.agriculturalArea) + Number(data.vegetationArea);
    if (sum > Number(data.totalArea)) {
      throw new BadRequestException('Sum of agricultural and vegetation area cannot exceed total area.');
    }

    return this.repository.create(data);
  }
}