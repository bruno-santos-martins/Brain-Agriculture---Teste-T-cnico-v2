import { FindOneFarmerUseCase } from './find-one-farmer.use-case';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

describe('FindOneFarmerUseCase', () => {
  let useCase: FindOneFarmerUseCase;
  let repository: FarmerRepositoryPort;

  beforeEach(() => {
    repository = { findOne: jest.fn() } as any;
    useCase = new FindOneFarmerUseCase(repository);
  });

  it('should return one farmer by id', async () => {
    const farmer = new Farmer('1', 'João', '123', new Date(), new Date());
    (repository.findOne as jest.Mock).mockResolvedValue(farmer);

    const result = await useCase.execute('1');

    expect(result).toEqual(farmer);
    expect(repository.findOne).toHaveBeenCalledWith('1');
  });
});