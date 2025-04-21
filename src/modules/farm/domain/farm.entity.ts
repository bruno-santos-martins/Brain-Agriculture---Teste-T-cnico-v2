export class Farm {
  constructor(
    public id: string,
    public name: string,
    public city: string,
    public state: string,
    public totalArea: number,
    public agriculturalArea: number,
    public vegetationArea: number,
    public farmerId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}