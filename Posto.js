export class Posto {
    constructor(nome, gasolina, etanol) {
        this._nome = nome;
        this._gasolina = gasolina;
        this._etanol = etanol;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get gasolina() {
        return this._gasolina;
    }
    set gasolina(gasolina) {
        this._gasolina = gasolina;
    }
    get etanol() {
        return this._etanol;
    }
    set etanol(etanol) {
        this._etanol = etanol;
    }
    sugereCombustivel() {
        if ((this._etanol.preco / this._gasolina.preco) < 0.70) {
            console.log(`Etanol no valor de ${this._etanol.preco} e mais vantajoso`);
        }
        else {
            console.log(`Gasolina no valor de ${this._gasolina.preco} e mais vantajoso`);
        }
    }
}
