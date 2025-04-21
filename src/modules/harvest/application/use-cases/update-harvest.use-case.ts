import { Injectable } from '@nestjs/common';
import { HarvestRepositoryPort } from '../ports/harvest.repository';
import { Harvest } from '../../domain/harvest.entity';

@Injectable()
export class UpdateHarvestUseCase {
  constructor(private readonly repository: HarvestRepositoryPort) {}

  async execute(id: string, data: Partial<Harvest>): Promise<Harvest> {
    return this.repository.update(id, data);
  }
}