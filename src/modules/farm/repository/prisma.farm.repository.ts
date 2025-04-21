import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Farm } from '../../domain/farm.entity';
import { FarmRepositoryPort } from '../../application/ports/farm.repository';

@Injectable()
export class PrismaFarmRepository implements FarmRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Farm>): Promise<Farm> {
    return this.prisma.farm.create({ data }) as unknown as Farm;
  }

  async findAll(): Promise<Farm[]> {
    return this.prisma.farm.findMany() as unknown as Farm[];
  }

  async findOne(id: string): Promise<Farm> {
    return this.prisma.farm.findUnique({ where: { id } }) as unknown as Farm;
  }

  async update(id: string, data: Partial<Farm>): Promise<Farm> {
    return this.prisma.farm.update({ where: { id }, data }) as unknown as Farm;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.farm.delete({ where: { id } });
  }
}