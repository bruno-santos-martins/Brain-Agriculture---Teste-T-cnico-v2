import { Injectable } from '@nestjs/common';
import { CropRepositoryPort } from '../ports/crop.repository';

@Injectable()
export class DeleteCropUseCase {
  constructor(private readonly repository: CropRepositoryPort) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}