export default class Grupo {


    #id: string
    #matricula: string
    #tipoviatura: string
    #nchassi: string
    #nmotor: string
    #cor: string
    #anofabrica: string
    #cilidragem: string
    #foto: string
    #idmarca: string
    #idmodelo: string		

    constructor(id:string, tipoviatura: string, matricula: string, nchassi: string, nmotor: string,cor:string,anofabrica:string,cilidragem:string,foto:string,idmodelo:string,idmarca:string) {
        this.#tipoviatura = tipoviatura
        this.#matricula = matricula
        this.#nchassi = nchassi
        this.#cilidragem = cilidragem
        this.#foto = foto
        this.#idmarca = idmarca
        this.#idmodelo = idmodelo
        this.#nmotor = nmotor
        this.#cor = cor
        this.#anofabrica = anofabrica
   
        this.#id = id
    }
    get idmodelo() {
        return this.#idmodelo
    }
    get cilidragem() {
        return this.#cilidragem
    }
    get tipoviatura() {
        return this.#tipoviatura
    }

    get foto() {
        return this.#foto
    }

    get idmarca() {
        return this.#idmarca
    }
    get anofabrica() {
        return this.#anofabrica
    }
    get matricula() {
        return this.#matricula
    }
    get nchassi() {
        return this.#nchassi
    }
    get cor() {
        return this.#cor
    }

    get id() {
        return this.#id
    }
    get nmotor() {
        return this.#nmotor
    }
}