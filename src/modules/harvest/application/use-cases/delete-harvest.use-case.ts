import { Injectable } from '@nestjs/common';
import { HarvestRepositoryPort } from '../ports/harvest.repository';

@Injectable()
export class DeleteHarvestUseCase {
  constructor(private readonly repository: HarvestRepositoryPort) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}