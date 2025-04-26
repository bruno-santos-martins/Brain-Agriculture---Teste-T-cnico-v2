import { FindAllFarmersUseCase } from 'src/modules/farmer/application/use-cases/find-all-farmers.use-case';
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';
import { Farmer } from 'src/modules/farmer/domain/farmer.entity';

describe('FindAllFarmersUseCase', () => {
  let useCase: FindAllFarmersUseCase;
  let repository: jest.Mocked<FarmerRepositoryPort>;

  beforeEach(() => {
    repository = {
      findAll: jest.fn(),
    } as unknown as jest.Mocked<FarmerRepositoryPort>;

    useCase = new FindAllFarmersUseCase(repository);
    jest.clearAllMocks();
  });

  it('should find all farmers', async () => {
    const farmers = [
      new Farmer('id-1', 'John Doe', '12345678900', new Date(), new Date()),
      new Farmer('id-2', 'Jane Smith', '98765432100', new Date(), new Date()),
    ];

    repository.findAll.mockResolvedValueOnce(farmers);

    const result = await useCase.execute();

    expect(result).toEqual(farmers);
    expect(repository.findAll).toHaveBeenCalledTimes(1);
  });

 
});
