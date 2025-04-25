import { FarmerRepositoryPort } from "src/modules/farmer/application/ports/farmer.repository";
import { DeleteFarmerUseCase } from "src/modules/farmer/application/use-cases/delete-farmer.use-case";

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