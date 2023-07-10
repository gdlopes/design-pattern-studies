import { BurguerStrategy } from '../interfaces/BurguerStrategy';

export default class HulkSmashBurguer implements BurguerStrategy {
  execute() {
    // the execution of HulkSmashBurguer goes here!

    return '🍔 Your HulkSmashBurguer is ready! 🍔';
  }
}