import { Farm } from '../../domain/farm.entity';

export abstract class FarmRepositoryPort {
  abstract create(data: Partial<Farm>): Promise<Farm>;
  abstract findAll(): Promise<Farm[]>;
  abstract findOne(id: string): Promise<Farm>;
  abstract update(id: string, data: Partial<Farm>): Promise<Farm>;
  abstract delete(id: string): Promise<void>;
  abstract findResume(): Promise<any>;
}