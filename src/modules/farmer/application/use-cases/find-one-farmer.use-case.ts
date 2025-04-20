import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

@Injectable()
export class FindOneFarmerUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(id: string): Promise<Farmer> {
    return this.repository.findOne(id);
  }
}