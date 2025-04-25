import { UpdateCropUseCase } from 'src/modules/crop/application/use-cases/update-crop.use-case';
import { CropRepositoryPort } from 'src/modules/crop/application/ports/crop.repository';
import { Crop } from 'src/modules/crop/domain/crop.entity';

describe('UpdateCropUseCase', () => {
  let useCase: UpdateCropUseCase;
  let repository: jest.Mocked<CropRepositoryPort>;

  beforeEach(() => {
    repository = {
      update: jest.fn(),
    } as unknown as jest.Mocked<CropRepositoryPort>;

    useCase = new UpdateCropUseCase(repository);
  });

  it('should update a crop and return the updated crop', async () => {
    const cropId = 'crop123';
    const updateData: Partial<Crop> = { name: 'Feijão' };

    const mockUpdatedCrop = new Crop(
      cropId,
      updateData.name!,
      'Safra 2025',
      new Date(),
      new Date(),
    );

    repository.update.mockResolvedValue(mockUpdatedCrop);

    const result = await useCase.execute(cropId, updateData);

    expect(result).toEqual(mockUpdatedCrop);
    expect(repository.update).toHaveBeenCalledWith(cropId, updateData);
    expect(repository.update).toHaveBeenCalledTimes(1);
  });
});
