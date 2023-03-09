import Usuario from '../core/Outros/Usuario'
import { createContext, useEffect, useState } from "react";



interface usuarioProps{
   Logado?:boolean
   PegarUsuario?:Usuario
   Logar?:(usa:any,sen:any)=>Promise<void>
}
const Contexto = createContext<usuarioProps>({})

export function ProvinderContext(props)
{
const [PegarUsuario, setPegarUsuario] = useState<Usuario>(null)
const [Logado, setLogado] = useState(false)


async function Logar(usuario1,senha1){
   const res = await   fetch(`http://localhost:3000/api/Outros/Login?usuario=${usuario1}&senha=${senha1}`)
   const data = await res.json()
   const [dado] = data 
   setPegarUsuario(dado)
 
  console.log(dado?.Nomecompleto)

     if (dado?.Nomecompleto===undefined) {  
     // alert('Verificar a sua Credencias ')
   return undefined
       }
        else{
         console.log(dado)
        // alert('Seja Bemvindo  '+dado?.Nomecompleto)
        // router.push('/')
        }
}



   return(

    <Contexto.Provider value={{
      PegarUsuario,
       Logar,
    }}>

        {props.children}
    </Contexto.Provider>
   )
}

export default Contexto
  