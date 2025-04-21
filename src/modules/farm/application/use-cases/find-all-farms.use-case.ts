import { Injectable } from '@nestjs/common';
import { FarmRepositoryPort } from '../ports/farm.repository';
import { Farm } from '../../domain/farm.entity';

@Injectable()
export class FindAllFarmsUseCase {
  constructor(private readonly repository: FarmRepositoryPort) {}

  async execute(): Promise<Farm[]> {
    return this.repository.findAll();
  }
}