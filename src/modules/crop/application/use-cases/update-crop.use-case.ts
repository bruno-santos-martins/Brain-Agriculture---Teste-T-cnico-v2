import { Injectable } from '@nestjs/common';
import { CropRepositoryPort } from '../ports/crop.repository';
import { Crop } from '../../domain/crop.entity';

@Injectable()
export class UpdateCropUseCase {
  constructor(private readonly repository: CropRepositoryPort) {}

  async execute(id: string, data: Partial<Crop>): Promise<Crop> {
    return this.repository.update(id, data);
  }
}