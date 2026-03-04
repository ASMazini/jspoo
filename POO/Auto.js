export class Automovel {

    #marca
    #modelo
    #ano

    constructor(marca, modelo, ano) {
        this.#ano = ano
        this.#modelo = modelo
        this.#marca = marca
    }

    getMarca() {
        return this.#marca
    }
    setMarca(){
        this.#marca = marca
    }

    getModelo(){
        return this.#modelo
    }
     setModelo(){
        this.#modelo = modelo
    }

    getAno(){
        return this.#ano
    }
    setAno(){
        this.#ano = ano
    }
}