import { ApiProperty } from '@nestjs/swagger';

export class CreateCropDto {
  @ApiProperty({ example: 'Milho' })
  name!: string;

  @ApiProperty({ example: 'uuid-of-harvest' })
  harvestId: string | undefined;
}