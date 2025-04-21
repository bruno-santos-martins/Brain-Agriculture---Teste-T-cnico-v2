export class Crop {
  constructor(
    public id: string,
    public name: string,
    public harvestId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}