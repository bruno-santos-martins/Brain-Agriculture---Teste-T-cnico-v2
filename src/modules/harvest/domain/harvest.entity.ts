export class Harvest {
  constructor(
    public id: string,
    public name: string,
    public farmId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}