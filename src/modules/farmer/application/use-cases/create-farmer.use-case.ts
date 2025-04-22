import { BadRequestException, Injectable } from '@nestjs/common';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';
import { validateCPF } from '../../../../shared/validators/cpf';
import { validateCNPJ } from'../../../../shared/validators/cnpj';


@Injectable()
export class CreateFarmerUseCase {
  constructor(private readonly repository: FarmerRepositoryPort) {}
  execute(data: Partial<Farmer>): Promise<Farmer> {
 
    if (validateCNPJ(String(data.cpfCnpj))) {
      return this.repository.create(data);
    }

    if (validateCPF(String(data.cpfCnpj))) {
      return this.repository.create(data);
    }
    
    throw new BadRequestException('CPF or CNPJ is invalid.');
   
  }
}