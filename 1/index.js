import { Combustivel } from "./Combustivel.js";
import { Posto } from "./Posto.js";


let etanol = new Combustivel('etanol',5.49);
let gasolina = new Combustivel('gasolina',6.49);
let posto = new Posto('shell',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel('etanol',4.49);
gasolina = new Combustivel('gasolina',6.00);
posto = new Posto('ipiranga',gasolina,etanol);
posto.sugereCombustivel();


etanol = new Combustivel('etanol',4.00);
gasolina = new Combustivel('gasolina',7.00);
posto = new Posto('petrobras',gasolina,etanol);
posto.sugereCombustivel();






