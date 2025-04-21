import { Injectable } from '@nestjs/common';
import { CropRepositoryPort } from '../ports/crop.repository';
import { Crop } from '../../domain/crop.entity';

@Injectable()
export class FindOneCropUseCase {
  constructor(private readonly repository: CropRepositoryPort) {}

  async execute(id: string): Promise<Crop> {
    return this.repository.findOne(id);
  }
}