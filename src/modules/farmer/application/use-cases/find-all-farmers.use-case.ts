import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

@Injectable()
export class FindAllFarmersUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  async execute(): Promise<Farmer[]> {
    return await this.repository.findAll();
  }
}