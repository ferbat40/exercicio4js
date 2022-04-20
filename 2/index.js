import { Combustivel } from "./Combustivel.js";
import { Posto } from "./Posto.js";


const tetanol = 'etanol';
const tgasolina = 'gasolina';

let etanol = new Combustivel(tetanol,5.15);
let gasolina = new Combustivel(tgasolina,7.40);
let posto = new Posto('petrobras',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel(tetanol,5.35);
gasolina = new Combustivel(tgasolina,7.30);
posto = new Posto('ipiranga',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel(tetanol,4.15);
gasolina = new Combustivel(tgasolina,7.20);
posto = new Posto('shell',gasolina,etanol);
posto.sugereCombustivel();



