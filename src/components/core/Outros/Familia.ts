export default class Familia {

    #id: string
    #familia: string
    
    constructor(familia: string, id: string) {
        this.#familia = familia
        this.#id = id
    }
    get familia() {
        return this.#familia
    }
    get id() {
        return this.#id
    }
}