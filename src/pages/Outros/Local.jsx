import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Local()
{
    const [local,setLocal] = useState('')

function Salvar()
{
    fetch('../api/Outros/Local',
    {method:'POST',
    body:JSON.stringify({local})})
}

    return(
        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>
      <div className="w-full shadow-md">
           <h1 className={`bg-blue-900 h-10 py-3 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE LOCAL DE OCORRÊNCIAS</h1>
           <hr />
           <Entrada label="Nome de Local"
           valor={local}
           valorMudou={setLocal}
           
           />
           <div className={`flex justify-end`}>
           <Botao onclick={Salvar}>Adicionar</Botao>
           <Botao cor="red">Cancelar</Botao>
           </div>
           </div>
          </div>
    )
}