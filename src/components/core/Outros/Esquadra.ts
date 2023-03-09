export default class Esquadra {

    #id: number
    #Nomeesquadra: string
    #idorgao:number
    
    constructor(Nomeesquadra: string, id: number = 0,idorgao: number) {
        this.#Nomeesquadra = Nomeesquadra
        this.#id = id
    }
    get 	Nomeesquadra() {
        return this.#Nomeesquadra
    }
    get id() {
        return this.#id
    }
    get idorgao() {
        return this.#idorgao
    }
}