import { Harvest } from '../../domain/harvest.entity';

export abstract class HarvestRepositoryPort {
  abstract create(data: Partial<Harvest>): Promise<Harvest>;
  abstract findAll(): Promise<Harvest[]>;
  abstract findOne(id: string): Promise<Harvest>;
  abstract update(id: string, data: Partial<Harvest>): Promise<Harvest>;
  abstract delete(id: string): Promise<void>;
}