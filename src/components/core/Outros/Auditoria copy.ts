export default class Auditoria {


    #id: string
    #Dataoperacao: Date
    #Descricao: string
    #Accao: string
    #Quem: string
    #orgao: string

    constructor(id:string, Descricao: string, Dataoperacao: Date, Accao: string, Quem: string, orgao: string) {
        this.#Descricao = Descricao
        this.#Dataoperacao = Dataoperacao
        this.#Accao = Accao
        this.#Quem = Quem
        this.#orgao = orgao
        this.#id = id
    }
    get Descricao() {
        return this.#Descricao
    }
    get Dataoperacao() {
        return this.#Dataoperacao
    }
    get Accao() {
        return this.#Accao
    }
    get orgao() {
        return this.#orgao
    }

    get id() {
        return this.#id
    }
    get Quem() {
        return this.#Quem
    }
}

					


