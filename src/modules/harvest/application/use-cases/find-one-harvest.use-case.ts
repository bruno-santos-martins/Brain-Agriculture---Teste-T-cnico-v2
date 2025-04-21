import { Injectable } from '@nestjs/common';
import { HarvestRepositoryPort } from '../ports/harvest.repository';
import { Harvest } from '../../domain/harvest.entity';

@Injectable()
export class FindOneHarvestUseCase {
  constructor(private readonly repository: HarvestRepositoryPort) {}

  async execute(id: string): Promise<Harvest> {
    return this.repository.findOne(id);
  }
}