import router from "next/router";
import { IconDiip, IconDinfop, IconInicio,IconSair } from "../icons";
import MenuItem from "./MenuItem";
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import Usuario_logado from '../Context/UsuarioAuth'
import usuarioData from '../hook/useUsario'
import { useState } from "react";
import Image from 'next/dist/client/image'


export default function Menulateral()
{
    const  Ulogogo = UsuarioLogado()
    const dado = usuarioData()
    const [v, setV] =useState(false)
    const [T, setT] =useState(false)
 
    const Logado = Usuario_logado()
    return (
 <aside className={`flex flex-col w-1/6 bg-gray-900 z-10 items-center`}>
 <div className={`flex my-2 flex-col items-center`}>
           <div className="rounded-full mx-10">
            <a>            
                <Image src={Logado.foto ? Logado.foto : '/pessoa.png'} className="h-20 w-20 rounded-full cursor-pointer" alt="" 
                width={100} height={100}
                />
             </a>
           </div> 
         <span className={`flex my-2 mr-2 text-gray-400`}>
            {Logado.Patente} - {Logado.Nomecompleto} 
         </span>
         </div>
   {Logado.sigla != "D.T" ?
            <ul>
                <MenuItem url="" texto={Logado.Nomeesquadra?Logado.Nomeesquadra:'Esquadras'} icone={IconInicio} Click={()=>setT(!T)} />
                {
                T==true?
                  <>
                  <div className="mx-4">
                  <MenuItem url="#" texto="Auto de Noticia" icone={IconDinfop}/>
                  <MenuItem url="#" texto="Auto de Queixa" icone={IconDinfop}/>
                  <MenuItem url="/Comando/Vitima" texto="Ocorrência Criminal" icone={IconDinfop}/>
                  <MenuItem url="/Comando/Acidentes" texto="Acidentes" icone={IconDinfop}/>
                  <MenuItem url="/Comando/Apreensao" texto="Apreenções" icone={IconDinfop}/>
                  <MenuItem url="#" texto="Detenções" icone={IconDinfop}/>
                  </div>
                  </>:''
                }

                <MenuItem url="/Diip" texto="Secção de Operações I." icone={IconDiip}/>
                <MenuItem url="#" texto="Polícia do Bairro" icone={IconDinfop} Click={()=>setV(!v)}/>
                {
                v==true?
                  <>
                  <div className="mx-4">
                  <MenuItem url="/Dinfop" texto="EUSEBIO 01" icone={IconDinfop}/>
                  <MenuItem url="/Dinfop" texto="EUSEBIO 01" icone={IconDinfop}/>
                  </div>
                  </>:''
            
                }
                <MenuItem url="/Dinfop" texto="Secção Administrativa" icone={IconDinfop}/>
                <MenuItem url="/Dinfop" texto="Secção de IIP" icone={IconDinfop}/>
                <MenuItem url="/Dinfop" texto="Secção de INFOP" icone={IconDinfop}/>
            </ul>
            :
            <ul>
            <MenuItem url="" texto={Logado.Nomeesquadra?Logado.Nomeesquadra:'Esquadras'} icone={IconInicio} Click={()=>setT(!T)} />
            {
            T==true?
              <>
              <div className="mx-4">
           
              <MenuItem url="/Transporte/Veiculo" texto="Veiculo" icone={IconDinfop}/>
              </div>
              </>:''
            }
            <MenuItem url="#" texto="Atruibuir Veiculo" icone={IconDinfop} Click={()=>setV(!v)}/>
            {
            v==true?
              <>
              <div className="mx-4">
              <MenuItem url="/Dinfop" texto="EUSEBIO 01" icone={IconDinfop}/>
              <MenuItem url="/Dinfop" texto="EUSEBIO 01" icone={IconDinfop}/>
              </div>
              </>:''
        
            }
        </ul>
            }
      <div className="flex flex-col justify-end items-end h-full">
            <button  onClick={()=> Ulogogo.Logout()} > 
            <a className=" text-white ring-1 ring-current 
            rounded-sm p-1 flex  hover:bg-white hover:text-black hover:bg-opacity-75 my-2">{IconSair} Terminar Sessão</a>
            </button>
         </div>
        
        
        </aside>

    )
}