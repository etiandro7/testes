export default class Orgao {

    #id: string
    #Nomeorgao: string
    #sigla:string
    
    constructor(Nomeorgao: string, id: string,sigla: string) {
        this.#Nomeorgao = Nomeorgao
        this.#id = id
    }
    get Nomeorgao() {
        return this.#Nomeorgao
    }
    get id() {
        return this.#id
    }
    get sigla() {
        return this.#sigla
    }
}