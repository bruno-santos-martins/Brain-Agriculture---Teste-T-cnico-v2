import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateCropUseCase } from '../application/use-cases/create-crop.use-case';
import { FindAllCropsUseCase } from '../application/use-cases/find-all-crops.use-case';
import { FindOneCropUseCase } from '../application/use-cases/find-one-crop.use-case';
import { UpdateCropUseCase } from '../application/use-cases/update-crop.use-case';
import { DeleteCropUseCase } from '../application/use-cases/delete-crop.use-case';
import { CreateCropDto } from '../application/use-cases/create-crop.dto';
import { UpdateCropDto } from '../application/use-cases/update-crop.dto';

@Controller('crops')
export class CropController {
  constructor(
    private readonly createCrop: CreateCropUseCase,
    private readonly findAllCrops: FindAllCropsUseCase,
    private readonly findOneCrop: FindOneCropUseCase,
    private readonly updateCrop: UpdateCropUseCase,
    private readonly deleteCrop: DeleteCropUseCase,
  ) {}

  @Post()
  create(@Body() data: CreateCropDto) {
    return this.createCrop.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllCrops.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneCrop.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateCropDto) {
    return this.updateCrop.execute(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteCrop.execute(id);
  }
}