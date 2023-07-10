import Burguer from './Burguer';
import AvalancheBurguer from './implementations/AvalancheBurguer';
import DreamBurguer from './implementations/DreamBurguer';
import HulkSmashBurguer from './implementations/HulkSmashBurguer';
import NewBurguer from './implementations/NewBurguer';

const avalancheBurguer = new AvalancheBurguer();
const dreamBurguer = new DreamBurguer();
const hulkSmashBurguer = new HulkSmashBurguer();

console.log(new Burguer(hulkSmashBurguer).cook())