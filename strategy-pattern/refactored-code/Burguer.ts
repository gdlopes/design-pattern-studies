import { BurguerStrategy } from './interfaces/BurguerStrategy';

export default class Burguer {
  constructor(private readonly strategy: BurguerStrategy) {}

  public cook() {
    return this.strategy.execute();
  }
}