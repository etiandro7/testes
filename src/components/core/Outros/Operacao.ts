export default class Esquadra {


    #id: string
    #nomeoperacao: string
    #datainicio: Date
    #datatermino: Date
    #orientadoPor: string
    #realizador: string

    constructor(id:string, nomeoperacao: string, datainicio: Date, datatermino: Date, orientadoPor: string, realizador: string) {
        this.#nomeoperacao = nomeoperacao
        this.#datainicio = datainicio
        this.#datatermino = datatermino
        this.#orientadoPor = orientadoPor
        this.#realizador = realizador
        this.#id = id
    }
    get nomeoperacao() {
        return this.#nomeoperacao
    }
    get datainicio() {
        return this.#datainicio
    }
    get datatermino() {
        return this.#datatermino
    }
    get realizador() {
        return this.#realizador
    }

    get id() {
        return this.#id
    }
    get orientadoPor() {
        return this.#orientadoPor
    }
}




