import { BurguerStrategy } from '../interfaces/BurguerStrategy';

export default class AvalancheBurguer implements BurguerStrategy {
  execute() {
    // the execution of AvalancheBurguer goes here!

    return '🍔 Your AvalancheBurguer is ready! 🍔';
  }
}