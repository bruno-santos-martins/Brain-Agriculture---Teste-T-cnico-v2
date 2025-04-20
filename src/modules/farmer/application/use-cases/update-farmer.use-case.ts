import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

@Injectable()
export class UpdateFarmerUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(id: string, data: Partial<Farmer>): Promise<Farmer> {
    return this.repository.update(id, data);
  }
}
