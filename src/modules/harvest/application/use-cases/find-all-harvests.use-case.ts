import { Injectable } from '@nestjs/common';
import { HarvestRepositoryPort } from '../ports/harvest.repository';
import { Harvest } from '../../domain/harvest.entity';

@Injectable()
export class FindAllHarvestsUseCase {
  constructor(private readonly repository: HarvestRepositoryPort) {}

  async execute(): Promise<Harvest[]> {
    return this.repository.findAll();
  }
}