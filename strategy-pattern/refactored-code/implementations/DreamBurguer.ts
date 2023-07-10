import { BurguerStrategy } from '../interfaces/BurguerStrategy';

export default class DreamBurguer implements BurguerStrategy {
  execute() {
    // the execution of DreamBurguer goes here!

    return '🍔 Your DreamBurguer is ready! 🍔';
  }
}