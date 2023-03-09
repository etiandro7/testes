export default class Crime {

    #id: string
    #Nomecrime: string
    #idfamilia:string
    
    constructor(	Nomecrime: string, id: string,idfamilia: string) {
        this.#Nomecrime = Nomecrime
        this.#id = id
    }
    get 	Nomecrime() {
        return this.#Nomecrime
    }
    get id() {
        return this.#id
    }
    get idfamilia() {
        return this.#idfamilia
    }
}