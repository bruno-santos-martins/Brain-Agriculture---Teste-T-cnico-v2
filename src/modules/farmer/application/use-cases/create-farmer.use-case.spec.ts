import { CreateFarmerUseCase } from 'src/modules/farmer/application/use-cases/create-farmer.use-case';
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';
import { Farmer } from 'src/modules/farmer/domain/farmer.entity';
import { BadRequestException } from '@nestjs/common';

jest.mock('src/shared/validators/cpf', () => ({
  validateCPF: jest.fn(),
}));

jest.mock('src/shared/validators/cnpj', () => ({
  validateCNPJ: jest.fn(),
}));

import { validateCPF } from 'src/shared/validators/cpf';
import { validateCNPJ } from 'src/shared/validators/cnpj';

describe('CreateFarmerUseCase', () => {
  let useCase: CreateFarmerUseCase;
  let repository: jest.Mocked<FarmerRepositoryPort>;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
    } as unknown as jest.Mocked<FarmerRepositoryPort>;

    useCase = new CreateFarmerUseCase(repository);
    jest.clearAllMocks();
  });

  it('should create a farmer with valid CNPJ', async () => {
    const input = { name: 'João', cpfCnpj: '12345678000195' };
    const expected = new Farmer('id', input.name!, input.cpfCnpj!, new Date(), new Date());

    (validateCNPJ as jest.Mock).mockReturnValue(true);
    (validateCPF as jest.Mock).mockReturnValue(false);
    repository.create.mockResolvedValue(expected);

    const result = await useCase.execute(input);

    expect(result).toEqual(expected);
    expect(repository.create).toHaveBeenCalledWith(input);
  });

  it('should create a farmer with valid CPF', async () => {
    const input = { name: 'Maria', cpfCnpj: '14706663750' };
    const expected = new Farmer('id', input.name!, input.cpfCnpj!, new Date(), new Date());

    (validateCNPJ as jest.Mock).mockReturnValue(false);
    (validateCPF as jest.Mock).mockReturnValue(true);
    repository.create.mockResolvedValue(expected);

    const result = await useCase.execute(input);

    expect(result).toEqual(expected);
    expect(repository.create).toHaveBeenCalledWith(input);
  });

  it('should throw BadRequestException for invalid CPF/CNPJ', async () => {
    const input = { name: 'Pedro', cpfCnpj: 'invalid' };
  
    jest.clearAllMocks();
    (validateCNPJ as jest.Mock).mockReturnValue(false);
    (validateCPF as jest.Mock).mockReturnValue(false);
  
  
    try {
      await useCase.execute(input);
      fail('Expected BadRequestException to be thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestException);
    }
    
    expect(repository.create).not.toHaveBeenCalled();
  });
});