import { Injectable } from '@nestjs/common';
import { CropRepositoryPort } from '../ports/crop.repository';
import { Crop } from '../../domain/crop.entity';

@Injectable()
export class CreateCropUseCase {
  constructor(private readonly repository: CropRepositoryPort) {}

  async execute(data: Partial<Crop>): Promise<Crop> {
    return this.repository.create(data);
  }
}