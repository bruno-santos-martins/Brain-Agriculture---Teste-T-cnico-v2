import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { FarmRepositoryPort } from '../application/ports/farm.repository';
import { Farm } from '@prisma/client';

@Injectable()
export class PrismaFarmRepository implements FarmRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Farm>): Promise<Farm> {
    return this.prisma.farm.create({ data }) as unknown as Farm;
  }

  async findAll(): Promise<Farm[]> {
    return this.prisma.farm.findMany() as unknown as Farm[];
  }

  async findResume(): Promise<any[]> {
    const totalFarms = await this.prisma.farm.count();

    const totalArea = await this.prisma.farm.aggregate({
      _sum: {
        totalArea: true,
      },
    });

    const farmsByState = await this.prisma.farm.groupBy({
      by: ['state'],
      _count: {
        state: true,
      },
    });

    const cropsByName = await this.prisma.crop.groupBy({
      by: ['name'],
      _count: {
        name: true,
      },
    });

    const agriculturalArea = await this.prisma.farm.aggregate({
      _sum: {
        agriculturalArea: true,
      },
    });

    const vegetationArea = await this.prisma.farm.aggregate({
      _sum: {
        vegetationArea: true,
      },
    });
    return {
      totalFarms,
      totalArea: totalArea._sum.totalArea ?? 0,
      farmsByState: farmsByState.map(item => ({
        state: item.state,
        total: item._count.state,
      })),
      cropsByName: cropsByName.map(item => ({
        crop: item.name,
        total: item._count.name,
      })),
      landUsage: {
        agriculturalArea: agriculturalArea._sum.agriculturalArea ?? 0,
        vegetationArea: vegetationArea._sum.vegetationArea ?? 0,
      },
    }
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