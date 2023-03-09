export default class Descricao {

    #id: string
    #Descricao: string
    #idcrimes:string
    
    constructor(Descricao: string, id: string,idcrimes: string) {
        this.#Descricao = Descricao
        this.#id = id
    }
    get 	Descricao() {
        return this.#Descricao
    }
    get id() {
        return this.#id
    }
    get idcrimes() {
        return this.#idcrimes
    }
}