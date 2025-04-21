import { Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../application/ports/farmer.repository';
import { Farmer } from '../domain/farmer.entity';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PrismaFarmerRepository implements FarmerRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Partial<Farmer>): Promise<Farmer> {
    return this.prisma.farmer.create({ data }) as unknown as Promise<Farmer>;
  }

  async findAll(): Promise<Farmer[]> {
    return await this.prisma.farmer.findMany();
  }

  findOne(id: string): Promise<Farmer> {
    return this.prisma.farmer.findUnique({ where: { id } }) as unknown as Promise<Farmer>;
  }

  async update(id: string, data: Partial<Farmer>) {
    return await this.prisma.farmer.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.farmer.delete({ where: { id } });
  }
}
