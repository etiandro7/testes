export default class Grupo {


    #id: string
    #Dataoperacao: Date
    #Nomegrupo: string
    #Actividade: string
    #Area: string
    #Idmunicipio: string
    #idbairro: string

    constructor(id:string, Nomegrupo: string, Dataoperacao: Date, Actividade: string, Area: string, Idmunicipio: string,idbairro:string) {
        this.#Nomegrupo = Nomegrupo
        this.#Dataoperacao = Dataoperacao
        this.#Actividade = Actividade
        this.#Area = Area
        this.#Idmunicipio = Idmunicipio
        this.#idbairro = idbairro
        this.#id = id
    }
    get Nomegrupo() {
        return this.#Nomegrupo
    }
    get idbairro() {
        return this.#idbairro
    }
    get Dataoperacao() {
        return this.#Dataoperacao
    }
    get Actividade() {
        return this.#Actividade
    }
    get Idmunicipio() {
        return this.#Idmunicipio
    }

    get id() {
        return this.#id
    }
    get Area() {
        return this.#Area
    }
}

				
					


