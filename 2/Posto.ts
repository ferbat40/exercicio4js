import { Combustivel } from "./Combustivel.js";

export class Posto{

    private _nome : String;
    private _gasolina: Combustivel;
    private _etanol: Combustivel;

    constructor(nome,gasolina,etanol){
    this._nome=nome;
    this._gasolina=gasolina;
    this._etanol=etanol;
    }


    get nome(){
        return this._nomesss;
    }
  
  
    set nome(nome){
      this._nome=nome;
    }


    get gasolina(){
        return this._gasolina;
    }
  
  
    set gasolina(gasolina){
      this._gasolina=gasolina;
    }


    get etanol(){
        return this._etanol;
    }
  
  
    set etanol(etanol){
      this._etanol=etanol;
    }


    sugereCombustivel() {
      if ((this._etanol.preco / this._gasolina.preco) < 0.70) {
          console.log(`${this._etanol.tipo} no valor de ${this._etanol.preco.toFixed(2)} e mais vantajoso em relacao a ${this._gasolina.tipo} de ${this._gasolina.preco}`);
      }
      else {
          console.log(`${this._gasolina.tipo} no valor de ${this._gasolina.preco.toFixed(2)} e mais vantajoso em relacao ao ${this._etanol.tipo} de ${this._etanol.preco}`);
      }
  }

    


}