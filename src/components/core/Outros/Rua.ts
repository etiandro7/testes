export default class Rua{
    #id:string
    #rua:string
    #idbairro:string

    constructor(rua:string, idbairro:string, id:string){
        this.#id= id
        this.#rua= rua
        this.#idbairro = idbairro
    }
    get id(){
        return this.#id
    }
    get idbairro(){
        return this.#idbairro
    }
    get rua(){
        return this.#rua
    }
}