import React from 'react'
import Image from 'next/image'
import loadin from '../../../public/logo.png'
import pegar from './UsuarioAuth'
import router, {useRouter} from 'next/router'
import Link from 'next/link'

export default function Forcar(props) {

const agarmesmo = pegar()
function rederizarAP()
{
    return(
        <>
         {props.children}
       </>
    )
}
function carregar(){
  return (
    <div className=' h-full bg-blue-900'>   
          <Image src={loadin} alt=""/>
          <h1>Ups sem Permissão Verificar os dados 
           
             <Link href="/Telalogin" passHref><span className='text-blue-600 text-2xl' >logar</span></Link>
            
          </h1>
    </div>
  )
}
if(agarmesmo.Nomecompleto==undefined)
{ 
 return carregar()
}
  else
  {
    return rederizarAP()
  }
}