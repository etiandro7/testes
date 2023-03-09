export default class Tipoarma {

    #id: string
    #Nomearma: string
    
    constructor(Nomearma: string, id: string) {
        this.#Nomearma = Nomearma
        this.#id = id
    }
    get Nomearma() {
        return this.#Nomearma
    }
    get id() {
        return this.#id
    }
}