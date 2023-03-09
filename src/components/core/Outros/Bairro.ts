export default class Bairro{
    #id:string
    #bairro:string
    #idmunicipio:string

    constructor(bairro:string, idmunicipio:string, id:string){
        this.#id= id
        this.#bairro= bairro
        this.#idmunicipio = idmunicipio
    }
    get id(){
        return this.#id
    }
    get idmunicipio(){
        return this.#idmunicipio
    }
    get bairro(){
        return this.#bairro
    }
}