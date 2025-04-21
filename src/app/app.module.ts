import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HelloController } from '../hello/hello.controller';
import { FarmerController } from '../modules/farmer/controller/farmer.controller';
import { FarmerModule } from '../modules/farmer/farmer.module';
import { FarmController } from '../modules/farm/controller/farm.controller';
import { FarmModule } from '../modules/farm/farm.module';

@Module({
  imports: [FarmerModule, FarmModule],
  controllers: [HelloController, FarmerController, FarmController],
  providers: [PrismaService],
})
export class AppModule {}
