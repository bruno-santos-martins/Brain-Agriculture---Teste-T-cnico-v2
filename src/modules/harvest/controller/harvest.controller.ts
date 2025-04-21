import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateHarvestUseCase } from '../application/use-cases/create-harvest.use-case';
import { FindAllHarvestsUseCase } from '../application/use-cases/find-all-harvests.use-case';
import { FindOneHarvestUseCase } from '../application/use-cases/find-one-harvest.use-case';
import { UpdateHarvestUseCase } from '../application/use-cases/update-harvest.use-case';
import { DeleteHarvestUseCase } from '../application/use-cases/delete-harvest.use-case';
import { CreateHarvestDto } from '../application/use-cases/create-harvest.dto';
import { UpdateHarvestDto } from '../application/use-cases/update-harvest.dto';

@Controller('harvests')
export class HarvestController {
  constructor(
    private readonly createHarvest: CreateHarvestUseCase,
    private readonly findAllHarvests: FindAllHarvestsUseCase,
    private readonly findOneHarvest: FindOneHarvestUseCase,
    private readonly updateHarvest: UpdateHarvestUseCase,
    private readonly deleteHarvest: DeleteHarvestUseCase,
  ) {}

  @Post()
  create(@Body() data: CreateHarvestDto) {
    return this.createHarvest.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllHarvests.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneHarvest.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateHarvestDto) {
    return this.updateHarvest.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteHarvest.execute(id);
  }
}