export interface IUsuario{
    idusuario: 'string'
    Nomecompleto: string
    Nomegrupo: string
    usuario: string
    Senha: string
    idorgao: number
    idesquadra: number
    Patente: string
    foto: string
    Nivelacesso: string
    Funcao: string	
    Nomeorgao:string
    Nomeesquadra:string
    provincia:number
    municipio:number
    nomeprovincia:string
    nomemunicipio:string
    sigla:string
    token:'meu toque'	
}

export interface IContexto extends IUsuario{
    
    Autenticacao:(nomeusuario:string, senhausario:string)=>Promise<boolean>
    Logout:()=> void

}
export interface IAutorizadoProvider{ 
    children:JSX.Element
}