
import router from 'next/router';

import {createContext, useEffect, useState } from "react";
import { IAutorizadoProvider, IContexto, IUsuario } from "./types";
import { getUsuarioLcalStore, LoginRequest, setUsuarioLcalStore } from "./utils";


const  Cphl_Contexto = createContext<IContexto>({} as IContexto)

export const AuteticadoProvidor = ({children}:IAutorizadoProvider) =>{
    const [Usuario,setUsuario] = useState<IUsuario | null>(null)
    //const [active, setActive]=useState('0')
    async function Autenticacao(usuarionome:string,senhausuario:string)
    {      
        const PegarDados = await LoginRequest(usuarionome,senhausuario)
        const payload = {} = PegarDados
        console.log(PegarDados)
        if(PegarDados===undefined)
        {
          return false
      }
      setUsuario(payload)
         setUsuarioLcalStore(payload)
         return true
    }
    function Logout(){
      setUsuario(null)
     setUsuarioLcalStore(null)
     router.push('/Telalogin')
     
    }

    useEffect(()=>{
      const usuario = getUsuarioLcalStore()
           if(usuario)
         setUsuario(usuario)
    },[])

return(
      <Cphl_Contexto.Provider value={{...Usuario, Autenticacao, Logout}} >
            {children}
      </Cphl_Contexto.Provider>
)}
export default Cphl_Contexto