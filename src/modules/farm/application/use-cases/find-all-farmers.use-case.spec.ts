import { FindAllFarmersUseCase } from './find-all-farmers.use-case';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

describe('FindAllFarmersUseCase', () => {
  let useCase: FindAllFarmersUseCase;
  let repository: FarmerRepositoryPort;

  beforeEach(() => {
    repository = { findAll: jest.fn() } as any;
    useCase = new FindAllFarmersUseCase(repository);
  });

  it('should return all farmers', async () => {
    const farmers = [new Farmer('1', 'João', '123', new Date(), new Date())];
    (repository.findAll as jest.Mock).mockResolvedValue(farmers);

    const result = await useCase.execute();

    expect(result).toEqual(farmers);
    expect(repository.findAll).toHaveBeenCalled();
  });
});