import { DashboardFarmsUseCase } from './dashboard-farms.use-case';
import { FarmRepositoryPort } from '../ports/farm.repository';

describe('DashboardFarmsUseCase', () => {
  let useCase: DashboardFarmsUseCase;
  let repository: FarmRepositoryPort;

  beforeEach(() => {
    repository = {
      findResume: jest.fn(), // Mock da função findResume
    } as unknown as FarmRepositoryPort;

    useCase = new DashboardFarmsUseCase(repository);
  });

  it('should call repository.findResume and return its result', async () => {
    // Arrange: mockar retorno do repository
    const mockResult = [
      {
        totalFarms: 5,
        totalArea: 500,
        farmsByState: [{ state: 'SP', total: 2 }],
        cropsByName: [{ crop: 'Milho', total: 3 }],
        landUsage: { agriculturalArea: 300, vegetationArea: 200 },
      },
    ];

    (repository.findResume as jest.Mock).mockResolvedValue(mockResult);

    // Act: executar o use case
    const result = await useCase.execute();

    // Assert: verificar que chamou o repository e retornou o esperado
    expect(repository.findResume).toHaveBeenCalled();
    expect(result).toEqual(mockResult);
  });
});
