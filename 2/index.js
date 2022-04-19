import { Combustivel } from "./Combustivel.js";
import { Posto } from "./Posto.js";


const cetanol = 'etanol';
const cgasolina = 'gasolina';

let etanol = new Combustivel(cetanol,4.15);
let gasolina = new Combustivel(cgasolina,7.40);
let posto = new Posto('petrobras',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel(cetanol,4.35);
gasolina = new Combustivel(cgasolina,7.30);
posto = new Posto('ipiranga',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel(cetanol,4.15);
gasolina = new Combustivel(cgasolina,7.20);
posto = new Posto('shell',gasolina,etanol);
posto.sugereCombustivel();



