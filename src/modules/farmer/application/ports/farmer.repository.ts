import { Farmer } from '../../domain/farmer.entity';

export abstract class FarmerRepositoryPort {
  abstract create(data: Partial<Farmer>): Promise<Farmer>;
  abstract findAll(): Promise<Farmer[]>;
  abstract findOne(id: string): Promise<Farmer>;
  abstract update(id: string, data: Partial<Farmer>): Promise<Farmer>;
  abstract delete(id: string): Promise<void>;
}