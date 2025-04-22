import { UpdateFarmerUseCase } from './update-farmer.use-case';
import { FarmerRepositoryPort } from '../ports/farmer.repository';
import { Farmer } from '../../domain/farmer.entity';

describe('UpdateFarmerUseCase', () => {
  let useCase: UpdateFarmerUseCase;
  let repository: FarmerRepositoryPort;

  beforeEach(() => {
    repository = { update: jest.fn() } as any;
    useCase = new UpdateFarmerUseCase(repository);
  });

  it('should update a farmer', async () => {
    const updateData = { name: 'Maria', cpfCnpj: '456' };
    const updated = new Farmer('1', updateData.name, updateData.cpfCnpj, new Date(), new Date());
    (repository.update as jest.Mock).mockResolvedValue(updated);

    const result = await useCase.execute('1', updateData);

    expect(result).toEqual(updated);
    expect(repository.update).toHaveBeenCalledWith('1', updateData);
  });
});