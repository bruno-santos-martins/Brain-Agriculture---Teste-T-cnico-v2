import { UpdateFarmerUseCase } from 'src/modules/farmer/application/use-cases/update-farmer.use-case';
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';
import { Farmer } from 'src/modules/farmer/domain/farmer.entity';

describe('UpdateFarmerUseCase', () => {
  let useCase: UpdateFarmerUseCase;
  let repository: jest.Mocked<FarmerRepositoryPort>;

  beforeEach(() => {
    repository = {
      update: jest.fn(),
    } as unknown as jest.Mocked<FarmerRepositoryPort>;

    useCase = new UpdateFarmerUseCase(repository);
    jest.clearAllMocks();
  });

  it('should update a farmer successfully', async () => {
    const id = 'farmer-id-123';
    const data: Partial<Farmer> = { name: 'Updated Name' };
    const expected = new Farmer(id, data.name!, '12345678900', new Date(), new Date());

    repository.update.mockResolvedValueOnce(expected);

    const result = await useCase.execute(id, data);

    expect(result).toEqual(expected);
    expect(repository.update).toHaveBeenCalledWith(id, data);
    expect(repository.update).toHaveBeenCalledTimes(1);
  });

});
