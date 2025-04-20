import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';

@Injectable()
export class DeleteFarmerUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
