import React from 'react'
import contexto from '../../Context/UsuarioAuth'
import Image from 'next/image'



export default function Header() {
  const Novo = contexto()
  return (
    <div className='flex flex-col'>
      <div className='flex items-center'>
      <Image src="/logo.png" width={35} height={35} alt="Sem Foto"/>
      <p className='font-black pl-1'> POLÍCIA NACIONAL DA PROVINCIA DA HUÍLA</p>
      </div>
      <p className='text-left text-red-700 mx-20 -mt-2 uppercase font-bold'>{Novo.Nomeorgao}</p>
      <h1 className='mt-1 flex justify-end font-black'>
        REGISTOS DE QUEIXA CRIMINAL
      </h1>

    </div>
  )
}
