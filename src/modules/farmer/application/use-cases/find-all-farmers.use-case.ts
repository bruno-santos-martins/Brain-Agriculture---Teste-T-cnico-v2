import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

@Injectable()
export class FindAllFarmersUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(): Promise<Farmer[]> {
    return this.repository.findAll();
  }
}