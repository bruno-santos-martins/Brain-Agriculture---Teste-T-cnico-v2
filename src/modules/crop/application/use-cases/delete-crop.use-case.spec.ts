import { DeleteCropUseCase } from 'src/modules/crop/application/use-cases/delete-crop.use-case';
import { CropRepositoryPort } from 'src/modules/crop/application/ports/crop.repository';

describe('DeleteCropUseCase', () => {
  let useCase: DeleteCropUseCase;
  let repository: jest.Mocked<CropRepositoryPort>;

  beforeEach(() => {
    repository = {
      delete: jest.fn(),
    } as unknown as jest.Mocked<CropRepositoryPort>;

    useCase = new DeleteCropUseCase(repository);
  });

  it('should delete a crop by id', async () => {
    const cropId = 'abc123';

    await useCase.execute(cropId);

    expect(repository.delete).toHaveBeenCalledWith(cropId);
    expect(repository.delete).toHaveBeenCalledTimes(1);
  });
});
