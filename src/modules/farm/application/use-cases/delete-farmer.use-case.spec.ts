import { DeleteFarmerUseCase } from './delete-farmer.use-case';
import { FarmerRepositoryPort } from '../ports/farmer.repository';

describe('DeleteFarmerUseCase', () => {
  let useCase: DeleteFarmerUseCase;
  let repository: FarmerRepositoryPort;

  beforeEach(() => {
    repository = { delete: jest.fn() } as any;
    useCase = new DeleteFarmerUseCase(repository);
  });

  it('should delete a farmer', async () => {
    (repository.delete as jest.Mock).mockResolvedValue(undefined);

    await useCase.execute('1');

    expect(repository.delete).toHaveBeenCalledWith('1');
  });
});