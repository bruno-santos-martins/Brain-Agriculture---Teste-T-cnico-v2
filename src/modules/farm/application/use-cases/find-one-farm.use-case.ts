import { Injectable } from '@nestjs/common';
import { FarmRepositoryPort } from '../ports/farm.repository';
import { Farm } from '../../domain/farm.entity';

@Injectable()
export class FindOneFarmUseCase {
  constructor(private readonly repository: FarmRepositoryPort) {}

  async execute(id: string): Promise<Farm> {
    return this.repository.findOne(id);
  }
}