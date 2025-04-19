// Arquivo: src/modules/farmer/domain/farmer.entity.ts

export class Farmer {
  constructor(
    public id: string,
    public name: string,
    public cpfCnpj: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
