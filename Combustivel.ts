export class Combustivel{

   private _tipo : String;
   private _preco : number;

   constructor(tipo,preco){
     this._tipo=tipo;
     this._preco=preco;
   }

    get tipo(){
        return this._tipo;
    }
  
  
    set tipo(tipo){
      this._tipo=tipo;
    }
  

  get preco(){
      return this._preco;
  }


  set preco(preco){
    this._preco=preco;
  }


  //imprimir(){
    //  for (let t of this._combustivel){

      //  console.log(t);

     // }
 // }

}