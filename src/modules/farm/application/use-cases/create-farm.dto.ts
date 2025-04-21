import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmDto {
  @ApiProperty({ example: 'Fazenda Boa Esperança' })
  name!: string;

  @ApiProperty({ example: 'Londrina' })
  city!: string;

  @ApiProperty({ example: 'PR' })
  state!: string;

  @ApiProperty({ example: 100.5 })
  totalArea!: number;

  @ApiProperty({ example: 60.0 })
  agriculturalArea!: number;

  @ApiProperty({ example: 30.0 })
  vegetationArea!: number;

  @ApiProperty({ example: 'uuid-of-farmer' })
  farmerId!: string;
}