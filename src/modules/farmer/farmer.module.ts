
import { Module } from '@nestjs/common';
import { PrismaFarmerRepository } from './repository/prisma.farmer.repository';
import { CreateFarmerUseCase } from './application/use-cases/create-farmer.use-case';
import { FindAllFarmersUseCase } from './application/use-cases/find-all-farmers.use-case';
import { FindOneFarmerUseCase } from './application/use-cases/find-one-farmer.use-case';
import { UpdateFarmerUseCase } from './application/use-cases/update-farmer.use-case';
import { DeleteFarmerUseCase } from './application/use-cases/delete-farmer.use-case';
import { FarmerController } from './controller/farmer.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { FarmerRepositoryPort } from './application/ports/farmer.repository';

@Module({
  controllers: [FarmerController],
  providers: [
    PrismaService,
    {
      provide: FarmerRepositoryPort,
      useClass: PrismaFarmerRepository,
    },
    {
      provide: FindAllFarmersUseCase,
      useFactory: (repo) => new FindAllFarmersUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
    {
      provide: CreateFarmerUseCase,
      useFactory: (repo) => new CreateFarmerUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
    {
      provide: FindAllFarmersUseCase,
      useFactory: (repo) => new FindAllFarmersUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
    {
      provide: FindOneFarmerUseCase,
      useFactory: (repo) => new FindOneFarmerUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
    {
      provide: UpdateFarmerUseCase,
      useFactory: (repo) => new UpdateFarmerUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
    {
      provide: DeleteFarmerUseCase,
      useFactory: (repo) => new DeleteFarmerUseCase(repo),
      inject: [FarmerRepositoryPort],
    },
  ],
  exports: [
    CreateFarmerUseCase,
    FindAllFarmersUseCase,
    FindOneFarmerUseCase,
    UpdateFarmerUseCase,
    DeleteFarmerUseCase,
  ],
})
export class FarmerModule {}


