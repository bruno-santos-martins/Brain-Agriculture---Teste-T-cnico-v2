import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

@Injectable()
export class CreateFarmerUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(data: Partial<Farmer>): Promise<Farmer> {
    return this.repository.create(data);
  }
}