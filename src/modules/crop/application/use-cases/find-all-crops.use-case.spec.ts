import { FindAllCropsUseCase } from 'src/modules/crop/application/use-cases/find-all-crops.use-case';
import { CropRepositoryPort } from 'src/modules/crop/application/ports/crop.repository';
import { Crop } from 'src/modules/crop/domain/crop.entity';

describe('FindAllCropsUseCase', () => {
  let useCase: FindAllCropsUseCase;
  let repository: jest.Mocked<CropRepositoryPort>;

  beforeEach(() => {
    repository = {
      findAll: jest.fn(),
    } as unknown as jest.Mocked<CropRepositoryPort>;

    useCase = new FindAllCropsUseCase(repository);
  });

  it('should return all crops', async () => {
    const mockCrops: Crop[] = [
      new Crop('1', 'Soja', 'Safra 2023', new Date(), new Date()),
      new Crop('2', 'Milho', 'Safra 2024', new Date(), new Date()),
    ];

    repository.findAll.mockResolvedValue(mockCrops);

    const result = await useCase.execute();

    expect(result).toEqual(mockCrops);
    expect(repository.findAll).toHaveBeenCalledTimes(1);
  });
});
