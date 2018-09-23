export class Ingredient {
  constructor(public name: string, public amount: number) {}

  public getName(){
    return this.name;
  }

  public getAmount(){
    return this.amount;
  }

}
