export default class Local {

    #id: string
    #local: string
    
    constructor(local: string, id: string) {
        this.#local = local
        this.#id = id
    }
    get local() {
        return this.#local
    }
    get id() {
        return this.#id
    }
}