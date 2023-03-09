import { IUsuario } from "./types"

export async function LoginRequest(nomeusario:string, senhausario:string)
{
    try {
        const pegardados = await  fetch(`http://localhost:3000/api/Outros/Login?usuario=${nomeusario}&senha=${senhausario}`)       
        const data = await pegardados.json()
        console.log(data)
        const [dado] = data 
       return dado

    } catch (error) {
        return null
    }
}
export function setUsuarioLcalStore(Usuario:IUsuario){
localStorage.setItem('C',JSON.stringify(Usuario))  
}
export function getUsuarioLcalStore(){
  
    const Pegardados = localStorage.getItem('C')
    if(!Pegardados)
        { 
          return null
        }
   
       const  User = JSON.parse(Pegardados) 
       return User ?? null
}