import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FarmerController } from '../modules/farmer/controller/farmer.controller';
import { FarmerModule } from '../modules/farmer/farmer.module';
import { FarmController } from '../modules/farm/controller/farm.controller';
import { FarmModule } from '../modules/farm/farm.module';
import { CropModule } from '../modules/crop/crop.module';
import { CropController } from '../modules/crop/controller/crop.controller';
import { HarvestModule } from '../modules/harvest/harvest.module';
import { HarvestController } from '../modules/harvest/controller/harvest.controller';

@Module({
  imports: [FarmerModule, FarmModule, CropModule, HarvestModule],
  controllers: [ FarmerController, FarmController, CropController, HarvestController],
  providers: [PrismaService],
})
export class AppModule {}
