import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Harvest } from '../../domain/harvest.entity';
import { HarvestRepositoryPort } from '../../application/ports/harvest.repository';

@Injectable()
export class PrismaHarvestRepository implements HarvestRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Harvest>): Promise<Harvest> {
    return this.prisma.harvest.create({ data }) as unknown as Harvest;
  }

  async findAll(): Promise<Harvest[]> {
    return this.prisma.harvest.findMany() as unknown as Harvest[];
  }

  async findOne(id: string): Promise<Harvest> {
    return this.prisma.harvest.findUnique({ where: { id } }) as unknown as Harvest;
  }

  async update(id: string, data: Partial<Harvest>): Promise<Harvest> {
    return this.prisma.harvest.update({ where: { id }, data }) as unknown as Harvest;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.harvest.delete({ where: { id } });
  }
}