export default class Provincia {

    #id: number
    #provincia: string
    constructor(provincia: string, id: number) {
        this.#provincia = provincia
        this.#id = id
    }

    get provincia() {
        return this.#provincia
    }

    get id() {
        return this.#id
    }
    set provincia(provincia:string)
    {
        this.#provincia=provincia
    }
}