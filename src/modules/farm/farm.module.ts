import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FarmController } from './controller/farm.controller';
import { CreateFarmUseCase } from './application/use-cases/create-farm.use-case';
import { FindAllFarmsUseCase } from './application/use-cases/find-all-farms.use-case';
import { FindOneFarmUseCase } from './application/use-cases/find-one-farm.use-case';
import { UpdateFarmUseCase } from './application/use-cases/update-farm.use-case';
import { DeleteFarmUseCase } from './application/use-cases/delete-farm.use-case';
import { FarmRepositoryPort } from './application/ports/farm.repository';
import { PrismaFarmRepository } from './repository/prisma.farm.repository';
import { DashboardFarmsUseCase } from './application/use-cases/dashboard-farms.use-case';
         

@Module({
  controllers: [FarmController],
  providers: [
    PrismaService,
    {
      provide: FarmRepositoryPort,
      useClass: PrismaFarmRepository,
    },
    {
      provide: CreateFarmUseCase,
      useFactory: (repo: FarmRepositoryPort) => new CreateFarmUseCase(repo),
      inject: [FarmRepositoryPort],
    },
    {
      provide: FindAllFarmsUseCase,
      useFactory: (repo: FarmRepositoryPort) => new FindAllFarmsUseCase(repo),
      inject: [FarmRepositoryPort],
    },
    {
      provide: FindOneFarmUseCase,
      useFactory: (repo: FarmRepositoryPort) => new FindOneFarmUseCase(repo),
      inject: [FarmRepositoryPort],
    },
    {
      provide: UpdateFarmUseCase,
      useFactory: (repo: FarmRepositoryPort) => new UpdateFarmUseCase(repo),
      inject: [FarmRepositoryPort],
    },
    {
      provide: DeleteFarmUseCase,
      useFactory: (repo: FarmRepositoryPort) => new DeleteFarmUseCase(repo),
      inject: [FarmRepositoryPort],
    },
    {
      provide: DashboardFarmsUseCase,
      useFactory: (repo: FarmRepositoryPort) => new DashboardFarmsUseCase(repo),
      inject: [FarmRepositoryPort],
    },
  ],
  exports: [
    CreateFarmUseCase,
    FindAllFarmsUseCase,
    FindOneFarmUseCase,
    UpdateFarmUseCase,
    DeleteFarmUseCase,
    DashboardFarmsUseCase,
  ],
})
export class FarmModule {}