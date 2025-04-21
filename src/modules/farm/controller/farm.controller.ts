import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateFarmUseCase } from '../application/use-cases/create-farm.use-case';
import { FindAllFarmsUseCase } from '../application/use-cases/find-all-farms.use-case';
import { FindOneFarmUseCase } from '../application/use-cases/find-one-farm.use-case';
import { UpdateFarmUseCase } from '../application/use-cases/update-farm.use-case';
import { DeleteFarmUseCase } from '../application/use-cases/delete-farm.use-case';
import { CreateFarmDto } from '../application/use-cases/create-farm.dto';
import { UpdateFarmDto } from '../application/use-cases/update-farm.dto';

@Controller('farms')
export class FarmController {
  constructor(
    private readonly createFarm: CreateFarmUseCase,
    private readonly findAllFarms: FindAllFarmsUseCase,
    private readonly findOneFarm: FindOneFarmUseCase,
    private readonly updateFarm: UpdateFarmUseCase,
    private readonly deleteFarm: DeleteFarmUseCase,
  ) {}

  @Post()
  create(@Body() data: CreateFarmDto) {
    return this.createFarm.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllFarms.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneFarm.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateFarmDto) {
    return this.updateFarm.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteFarm.execute(id);
  }
}