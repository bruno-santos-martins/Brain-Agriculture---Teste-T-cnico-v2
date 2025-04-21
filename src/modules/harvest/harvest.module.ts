import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { HarvestController } from './controller/harvest.controller';
import { CreateHarvestUseCase } from './application/use-cases/create-harvest.use-case';
import { FindAllHarvestsUseCase } from './application/use-cases/find-all-harvests.use-case';
import { FindOneHarvestUseCase } from './application/use-cases/find-one-harvest.use-case';
import { UpdateHarvestUseCase } from './application/use-cases/update-harvest.use-case';
import { DeleteHarvestUseCase } from './application/use-cases/delete-harvest.use-case';
import { HarvestRepositoryPort } from './application/ports/harvest.repository';
import { PrismaHarvestRepository } from './repository/prisma.harvest.repository';

@Module({
  controllers: [HarvestController],
  providers: [
    PrismaService,
    {
      provide: HarvestRepositoryPort,
      useClass: PrismaHarvestRepository,
    },
    {
      provide: CreateHarvestUseCase,
      useFactory: (repo: HarvestRepositoryPort) => new CreateHarvestUseCase(repo),
      inject: [HarvestRepositoryPort],
    },
    {
      provide: FindAllHarvestsUseCase,
      useFactory: (repo: HarvestRepositoryPort) => new FindAllHarvestsUseCase(repo),
      inject: [HarvestRepositoryPort],
    },
    {
      provide: FindOneHarvestUseCase,
      useFactory: (repo: HarvestRepositoryPort) => new FindOneHarvestUseCase(repo),
      inject: [HarvestRepositoryPort],
    },
    {
      provide: UpdateHarvestUseCase,
      useFactory: (repo: HarvestRepositoryPort) => new UpdateHarvestUseCase(repo),
      inject: [HarvestRepositoryPort],
    },
    {
      provide: DeleteHarvestUseCase,
      useFactory: (repo: HarvestRepositoryPort) => new DeleteHarvestUseCase(repo),
      inject: [HarvestRepositoryPort],
    },
  ],
  exports: [
    CreateHarvestUseCase,
    FindAllHarvestsUseCase,
    FindOneHarvestUseCase,
    UpdateHarvestUseCase,
    DeleteHarvestUseCase,
  ],
})
export class HarvestModule {}