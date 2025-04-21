import { Injectable } from '@nestjs/common';
import { HarvestRepositoryPort } from '../ports/harvest.repository';
import { Harvest } from '../../domain/harvest.entity';

@Injectable()
export class CreateHarvestUseCase {
  constructor(private readonly repository: HarvestRepositoryPort) {}

  async execute(data: Partial<Harvest>): Promise<Harvest> {
    return this.repository.create(data);
  }
}