
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';
import { CreateFarmerUseCase } from 'src/modules/farmer/application/use-cases/create-farmer.use-case';
import { Farmer } from 'src/modules/farmer/domain/farmer.entity';

describe('CreateFarmerUseCase', () => {
  let useCase: CreateFarmerUseCase;
  let repository: FarmerRepositoryPort;

  beforeEach(() => {
    repository = { create: jest.fn() } as any;
    useCase = new CreateFarmerUseCase(repository);
  });

  it('should create a farmer', async () => {
    const input = { name: 'João da Silva', cpfCnpj: '12345678900' };
    const expected = new Farmer('uuid', input.name, input.cpfCnpj, new Date(), new Date());
    (repository.create as jest.Mock).mockResolvedValue(expected);

    const result = await useCase.execute(input);

    expect(result).toEqual(expected);
    expect(repository.create).toHaveBeenCalledWith(input);
  });
});