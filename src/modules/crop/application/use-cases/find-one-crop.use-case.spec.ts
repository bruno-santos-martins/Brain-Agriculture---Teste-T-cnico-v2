import { FindOneCropUseCase } from 'src/modules/crop/application/use-cases/find-one-crop.use-case';
import { CropRepositoryPort } from 'src/modules/crop/application/ports/crop.repository';
import { Crop } from 'src/modules/crop/domain/crop.entity';

describe('FindOneCropUseCase', () => {
  let useCase: FindOneCropUseCase;
  let repository: jest.Mocked<CropRepositoryPort>;

  beforeEach(() => {
    repository = {
      findOne: jest.fn(),
    } as unknown as jest.Mocked<CropRepositoryPort>;

    useCase = new FindOneCropUseCase(repository);
  });

  it('should return a crop by id', async () => {
    const cropId = 'crop123';
    const mockCrop = new Crop('crop123', 'Arroz', 'Safra 2025', new Date(), new Date());

    repository.findOne.mockResolvedValue(mockCrop);

    const result = await useCase.execute(cropId);

    expect(result).toEqual(mockCrop);
    expect(repository.findOne).toHaveBeenCalledWith(cropId);
    expect(repository.findOne).toHaveBeenCalledTimes(1);
  });
});
