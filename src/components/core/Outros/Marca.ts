export default class Marca {

    #id: string
    #tipo: string
    #marca:string
    
    constructor(tipo: string, id: string, marca:string) {
        this.#tipo = tipo
        this.#id = id
        this.#marca = marca
    }
    get tipo() {
        return this.#tipo
    }

    get marca() {
        return this.#marca
    }

    get id() {
        return this.#id
    }
}