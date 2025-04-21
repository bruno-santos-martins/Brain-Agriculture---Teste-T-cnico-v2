import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmerDto {
  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome completo do produtor rural'
  })
  name!: string;

  @ApiProperty({
    example: '12345678900',
    description: 'CPF ou CNPJ do produtor'
  })
  cpfCnpj!: string;
}
