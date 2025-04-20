import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HelloController } from '../hello/hello.controller';
import { FarmerController } from '../modules/farmer/controller/farmer.controller';
import { FarmerModule } from '../modules/farmer/farmer.module';

@Module({
  imports: [FarmerModule],
  controllers: [HelloController, FarmerController],
  providers: [PrismaService],
})
export class AppModule {}
