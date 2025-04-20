import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateFarmerUseCase } from '../application/use-cases/create-farmer.use-case';
import { FindAllFarmersUseCase } from '../application/use-cases/find-all-farmers.use-case';
import { FindOneFarmerUseCase } from '../application/use-cases/find-one-farmer.use-case';
import { UpdateFarmerUseCase } from '../application/use-cases/update-farmer.use-case';
import { DeleteFarmerUseCase } from '../application/use-cases/delete-farmer.use-case';
import { Farmer } from '../domain/farmer.entity';

@Controller('farmers')
export class FarmerController {
  constructor(
    private readonly createUseCase: CreateFarmerUseCase,
    private readonly findAllUseCase: FindAllFarmersUseCase,
    private readonly findOneUseCase: FindOneFarmerUseCase,
    private readonly updateUseCase: UpdateFarmerUseCase,
    private readonly deleteUseCase: DeleteFarmerUseCase
  ) {}

  @Post()
  create(@Body() data: Partial<Farmer>) {
    return this.createUseCase.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneUseCase.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Farmer>) {
    return this.updateUseCase.execute(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
