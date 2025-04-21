import { Injectable } from '@nestjs/common';
import { CropRepositoryPort } from '../ports/crop.repository';
import { Crop } from '../../domain/crop.entity';

@Injectable()
export class FindAllCropsUseCase {
  constructor(private readonly repository: CropRepositoryPort) {}

  async execute(): Promise<Crop[]> {
    return this.repository.findAll();
  }
}