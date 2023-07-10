import { BurguerStrategy } from '../interfaces/BurguerStrategy';

export default class NewBurguer implements BurguerStrategy {
  execute() {
    // the execution of NewBurguer goes here!

    return '🍔 Your NewBurguer is ready! 🍔';
  }
}