import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelloController } from "../hello/hello.controller";

@Module({
  providers: [PrismaService, HelloController],
})
export class AppModule {}
