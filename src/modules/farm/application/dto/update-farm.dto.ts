import { PartialType } from '@nestjs/swagger';
import { CreateFarmDto } from '../dto/create-farm.dto';

export class UpdateFarmDto extends PartialType(CreateFarmDto) {}