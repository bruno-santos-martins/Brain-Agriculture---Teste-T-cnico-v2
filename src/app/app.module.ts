import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HelloController } from '../hello/hello.controller';
import { FarmerController } from '../modules/farmer/controller/farmer.controller';
import { FarmerModule } from '../modules/farmer/farmer.module';
import { FarmController } from '../modules/farm/controller/farm.controller';
import { FarmModule } from '../modules/farm/farm.module';
import { CropModule } from '../modules/crop/crop.module';
import { CropController } from '../modules/crop/controller/crop.controller';
import { HarvestModule } from '../modules/harvest/harvest.module';

@Module({
  imports: [FarmerModule, FarmModule, CropModule, HarvestModule],
  controllers: [HelloController, FarmerController, FarmController, CropController],
  providers: [PrismaService],
})
export class AppModule {}
