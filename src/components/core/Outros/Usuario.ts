export default class Usuario {


    #idusuario: string
    #Nomecompleto: string
    #Nomegrupo: string
    #usuario: string
    #Senha: string
    #idorgao: number
    #idesquadra: number
    #Patente: string
    #foto: string
    #Nivelacesso: string
    #Funcao: string	
    #Nomeorgao:string
    #Nomeesquadra:string
    #Logado:boolean	

    constructor(idusuario:string, Nomeorgao: string,Nomeesquadra:string, Nomecompleto: string, usuario: string, Senha: string,idorgao:number,idesquadra:number,Patente:string,foto:string,Funcao:string,Nivelacesso:string,Logado) {
        this.#Nomeorgao = Nomeorgao
        this.#Logado = Logado
        this.#Nomeesquadra = Nomeesquadra
        this.#Nomecompleto = Nomecompleto
        this.#usuario = usuario
        this.#Patente = Patente
        this.#foto = foto
        this.#Nivelacesso = Nivelacesso
        this.#Funcao = Funcao
        this.#Senha = Senha
        this.#idorgao = idorgao
        this.#idesquadra = idesquadra
   
        this.#idusuario = idusuario
    }
    get Funcao() {
        return this.#Funcao
    }
    get Logado() {
        return this.#Logado
    }
    get Patente() {
        return this.#Patente
    }
    get Nomegrupo() {
        return this.#Nomegrupo
    }

    get foto() {
        return this.#foto
    }

    get Nivelacesso() {
        return this.#Nivelacesso
    }
    get idesquadra() {
        return this.#idesquadra
    }
    get Nomecompleto() {
        return this.#Nomecompleto
    }
    get usuario() {
        return this.#usuario
    }
    get idorgao() {
        return this.#idorgao
    }

    get idusuario() {
        return this.#idusuario
    }
    get Senha() {
        return this.#Senha
    }
    get Nomeorgao() {
        return this.#Nomeorgao
    }
    get Nomeesquadra() {
        return this.#Nomeesquadra
    }
}

				
					


