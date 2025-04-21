import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Crop } from '../../domain/crop.entity';
import { CropRepositoryPort } from '../../application/ports/crop.repository';

@Injectable()
export class PrismaCropRepository implements CropRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Crop>): Promise<Crop> {
    return this.prisma.crop.create({ data }) as unknown as Crop;
  }

  async findAll(): Promise<Crop[]> {
    return this.prisma.crop.findMany() as unknown as Crop[];
  }

  async findOne(id: string): Promise<Crop> {
    return this.prisma.crop.findUnique({ where: { id } }) as unknown as Crop;
  }

  async update(id: string, data: Partial<Crop>): Promise<Crop> {
    return this.prisma.crop.update({ where: { id }, data }) as unknown as Crop;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.crop.delete({ where: { id } });
  }
}