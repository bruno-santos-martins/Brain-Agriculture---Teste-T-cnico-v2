import { FindOneFarmerUseCase } from 'src/modules/farmer/application/use-cases/find-one-farmer.use-case';
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';
import { Farmer } from 'src/modules/farmer/domain/farmer.entity';

describe('FindOneFarmerUseCase', () => {
  let useCase: FindOneFarmerUseCase;
  let repository: jest.Mocked<FarmerRepositoryPort>;

  beforeEach(() => {
    repository = {
      findOne: jest.fn(),
    } as unknown as jest.Mocked<FarmerRepositoryPort>;

    useCase = new FindOneFarmerUseCase(repository);
    jest.clearAllMocks();
  });

  it('should find a farmer by id', async () => {
    const id = 'farmer-id-123';
    const expected = new Farmer(id, 'John Doe', '12345678900', new Date(), new Date());

    repository.findOne.mockResolvedValueOnce(expected);

    const result = await useCase.execute(id);

    expect(result).toEqual(expected);
    expect(repository.findOne).toHaveBeenCalledWith(id);
    expect(repository.findOne).toHaveBeenCalledTimes(1);
  });

});
