export default class Municipio{
    #id:number
    #municipio:string
    #idprovincia:number

    constructor(municipio:string, idprovincia:number, id:number){
        this.#id= id
        this.#municipio= municipio
        this.#idprovincia = idprovincia
    }
    get id(){
        return this.#id
    }
    get idprovincia(){
        return this.#idprovincia
    }
    get municipio(){
        return this.#municipio
    }
}