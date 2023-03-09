import { IconUser } from "../icons";
import usuarioData from '../hook/useUsario'
import Usuario_logado from '../Context/UsuarioAuth'
import Link  from "next/link"
import route from 'next/router'
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import Image from 'next/dist/client/image'


interface TopoProps{
  texto:string
  
}



export default function Topo( props:TopoProps){
  const  Ulogogo = UsuarioLogado()
   const dado = usuarioData()

   const Logado = Usuario_logado()

    return (
     <div className={`
        bg-blue-900 text-purple-50  flex justify-between border-b-2 border-yellow-400
      `}>
        <div className={`flex  my-1`}>
        <Image src="/logo.png" alt="" className="w-12 h-12" width={50} height={30}/>
      <div className="flex flex-col  justify-center"> 
       <h1 className="font-black uppercase mx-2">Policia Nacional Comando Provincial da Huíla</h1>
        <h1 className="font-black uppercase mx-2">{Logado.Nomeorgao}</h1>
        </div>
        
        </div>
        <div className={`flex my-2`}>
           <div className="rounded-full mx-2">
            <a>            
                <Image src={Logado.foto ? Logado.foto : '/pessoa.png'}  alt="" className="h-10 w-10 rounded-full cursor-pointer"  width={50} height={50}/>
             </a>
           </div> 
         <span className={`flex my-2 mr-2`}>{Logado.Patente} - {Logado.Nomecompleto}
         <button  onClick={()=> Ulogogo.Logout()} ><a className="ml-2 bg-white text-blue-900 rounded-sm p-1">Terminar Sessão </a></button></span></div>
     </div>
     
    )
}