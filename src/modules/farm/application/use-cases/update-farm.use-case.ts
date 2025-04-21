import { Injectable, BadRequestException } from '@nestjs/common';
import { FarmRepositoryPort } from '../ports/farm.repository';
import { Farm } from '../../domain/farm.entity';

@Injectable()
export class UpdateFarmUseCase {
  constructor(private readonly repository: FarmRepositoryPort) {}

  async execute(id: string, data: Partial<Farm>): Promise<Farm> {
    if (data.totalArea !== undefined && data.agriculturalArea !== undefined && data.vegetationArea !== undefined) {
      const sum = Number(data.agriculturalArea) + Number(data.vegetationArea);
      if (sum > Number(data.totalArea)) {
        throw new BadRequestException('Sum of agricultural and vegetation area cannot exceed total area.');
      }
    }
    return this.repository.update(id, data);
  }
}