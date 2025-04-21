import { Injectable } from '@nestjs/common';
import { FarmRepositoryPort } from '../ports/farm.repository';

@Injectable()
export class DeleteFarmUseCase {
  constructor(private readonly repository: FarmRepositoryPort) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}