import { ApiProperty } from '@nestjs/swagger';

export class CreateHarvestDto {
  @ApiProperty({ example: 'Safra 2024' })
  name: string;

  @ApiProperty({ example: 'uuid-of-farm' })
  farmId: string;
}