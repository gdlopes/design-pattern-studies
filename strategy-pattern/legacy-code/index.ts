import { BurguerTypes } from './BurgerTypes'
import AvalancheBuguer from './AvalancheBurguer';
import DreamBurguer from './DreamBurguer';
import HulkSmashBurguer from './HulkSmashBurguer';

class Burger {
  cook(burguerType: BurguerTypes) {
    if (burguerType === BurguerTypes.AvalancheBurguer) {
      const avalanceBurguer = new AvalancheBuguer();
      return avalanceBurguer.execute();
    } else if(burguerType === BurguerTypes.DreamBurguer) {
      const dreamBurguer = new DreamBurguer();
      return dreamBurguer.execute();
    } else if(burguerType === BurguerTypes.HulkSmashBurguer) {
      const hulkSmashBurguer = new HulkSmashBurguer();
      return hulkSmashBurguer.execute()
    }
  }
}

console.log(new Burger().cook(BurguerTypes.HulkSmashBurguer))