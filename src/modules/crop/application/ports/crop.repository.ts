import { Crop } from '../../domain/crop.entity';

export abstract class CropRepositoryPort {
  abstract create(data: Partial<Crop>): Promise<Crop>;
  abstract findAll(): Promise<Crop[]>;
  abstract findOne(id: string): Promise<Crop>;
  abstract update(id: string, data: Partial<Crop>): Promise<Crop>;
  abstract delete(id: string): Promise<void>;
}