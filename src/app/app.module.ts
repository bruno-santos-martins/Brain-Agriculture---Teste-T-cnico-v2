import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HelloController } from '../hello/hello.controller';

@Module({
  controllers: [HelloController],
  providers: [PrismaService],
})
export class AppModule {}
