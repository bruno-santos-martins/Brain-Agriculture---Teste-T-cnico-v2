import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CropController } from './controller/crop.controller';
import { CreateCropUseCase } from './application/use-cases/create-crop.use-case';
import { FindAllCropsUseCase } from './application/use-cases/find-all-crops.use-case';
import { FindOneCropUseCase } from './application/use-cases/find-one-crop.use-case';
import { UpdateCropUseCase } from './application/use-cases/update-crop.use-case';
import { DeleteCropUseCase } from './application/use-cases/delete-crop.use-case';
import { CropRepositoryPort } from './application/ports/crop.repository';
import { PrismaCropRepository } from './repository/prisma.crop.repository';

@Module({
  controllers: [CropController],
  providers: [
    PrismaService,
    {
      provide: CropRepositoryPort,
      useClass: PrismaCropRepository,
    },
    {
      provide: CreateCropUseCase,
      useFactory: (repo: CropRepositoryPort) => new CreateCropUseCase(repo),
      inject: [CropRepositoryPort],
    },
    {
      provide: FindAllCropsUseCase,
      useFactory: (repo: CropRepositoryPort) => new FindAllCropsUseCase(repo),
      inject: [CropRepositoryPort],
    },
    {
      provide: FindOneCropUseCase,
      useFactory: (repo: CropRepositoryPort) => new FindOneCropUseCase(repo),
      inject: [CropRepositoryPort],
    },
    {
      provide: UpdateCropUseCase,
      useFactory: (repo: CropRepositoryPort) => new UpdateCropUseCase(repo),
      inject: [CropRepositoryPort],
    },
    {
      provide: DeleteCropUseCase,
      useFactory: (repo: CropRepositoryPort) => new DeleteCropUseCase(repo),
      inject: [CropRepositoryPort],
    },
  ],
  exports: [
    CreateCropUseCase,
    FindAllCropsUseCase,
    FindOneCropUseCase,
    UpdateCropUseCase,
    DeleteCropUseCase,
  ],
})
export class CropModule {}