import { DeleteFarmerUseCase } from 'src/modules/farmer/application/use-cases/delete-farmer.use-case';
import { FarmerRepositoryPort } from 'src/modules/farmer/application/ports/farmer.repository';

describe('DeleteFarmerUseCase', () => {
  let useCase: DeleteFarmerUseCase;
  let repository: jest.Mocked<FarmerRepositoryPort>;

  beforeEach(() => {
    repository = {
      delete: jest.fn(),
    } as unknown as jest.Mocked<FarmerRepositoryPort>;

    useCase = new DeleteFarmerUseCase(repository);
    jest.clearAllMocks();
  });

  it('should delete a farmer by id', async () => {
    const id = 'farmer-id-123';
    
    repository.delete.mockResolvedValueOnce();

    const result = await useCase.execute(id);

    expect(result).toBeUndefined();
    expect(repository.delete).toHaveBeenCalledWith(id);
    expect(repository.delete).toHaveBeenCalledTimes(1);
  });

 
});
