class ParkingSystem {
  private _count: [number, number, number];

  constructor(big: number, medium: number, small: number) {
    this._count = [big, medium, small];
  }
  
  addCar(carType: number): boolean {
    return this._count[carType - 1]-- > 0;
  }
}
