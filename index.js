

//let combust=[
//'etanol',
//'gasolina'

import { Combustivel } from "./Combustivel.js";
import { Posto } from "./Posto.js";

//]

let etanol = new Combustivel('etanol',5.49);
let gasolina = new Combustivel('gasolina',6.49);
console.log(etanol.preco); 
console.log(etanol.tipo); 

let posto = new Posto('shell',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel('etanol',4.49);
gasolina = new Combustivel('gasolina',6.00);
console.log(etanol.preco); 
console.log(etanol.tipo); 

posto = new Posto('ipiranga',gasolina,etanol);
posto.sugereCombustivel();



etanol = new Combustivel('etanol',4.00);
gasolina = new Combustivel('gasolina',7.00);
console.log(etanol.preco); 
console.log(etanol.tipo); 

posto = new Posto('petrobras',gasolina,etanol);
posto.sugereCombustivel();


const cetanol = new Combustivel('etanol',4.15);
const cgasolina = new Combustivel('gasolina',7.40);
console.log(cetanol.preco); 
console.log(cetanol.tipo); 

posto = new Posto('petrobras',cgasolina,cetanol);
posto.sugereCombustivel();


const cetanol2 = new Combustivel('etanol',4.35);
const cgasolina2 = new Combustivel('gasolina',7.30);
console.log(cetanol2.preco); 
console.log(cetanol2.tipo); 

posto = new Posto('petrobras',cgasolina2,cetanol2);
posto.sugereCombustivel();


const cetanol3 = new Combustivel('etanol',4.15);
const cgasolina3 = new Combustivel('gasolina',7.20);
console.log(cetanol3.preco); 
console.log(cetanol3.tipo); 

posto = new Posto('petrobras',cgasolina3,cetanol3);
posto.sugereCombustivel();



