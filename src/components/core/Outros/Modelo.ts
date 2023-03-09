export default class Modelo{
    #id:string
    #modelo:string
    #idmarca:string

    constructor(modelo:string, idmarca:string, id:string){
        this.#id= id
        this.#modelo= modelo
        this.#idmarca = idmarca
    }
    get id(){
        return this.#id
    }
    get idmarca(){
        return this.#idmarca
    }
    get modelo(){
        return this.#modelo
    }
}