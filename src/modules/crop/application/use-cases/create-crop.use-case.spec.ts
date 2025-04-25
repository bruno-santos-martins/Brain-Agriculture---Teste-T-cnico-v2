import { CreateCropUseCase } from './create-crop.use-case';
import { Crop } from '../../domain/crop.entity';
import { CropRepositoryPort } from '../ports/crop.repository';

describe('CreateCropUseCase', () => {
  let useCase: CreateCropUseCase;
  let repository: jest.Mocked<CropRepositoryPort>;

  beforeEach(() => {
    // Cria um mock do repositório
    repository = {
      create: jest.fn(),
      // outros métodos (caso existam) podem ser adicionados aqui
    } as unknown as jest.Mocked<CropRepositoryPort>;

    useCase = new CreateCropUseCase(repository);
  });

  it('deve criar uma nova cultura (Crop)', async () => {
    const cropData: Partial<Crop> = {
      name: 'Soja',
      harvestId: 'harvest-id-exemplo',
    };

    const createdCrop: Crop = {
      id: 'mock-id',
      name: 'Soja',
      harvestId: 'harvest-id-exemplo',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    repository.create.mockResolvedValue(createdCrop);

    const result = await useCase.execute(cropData);

    expect(repository.create).toHaveBeenCalledWith(cropData);
    expect(result).toEqual(createdCrop);
  });
});
