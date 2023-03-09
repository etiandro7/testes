import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import {Aviso,emojierro} from './../../components/icons'


export default function Rua({onFechar=()=>{},id='modal' , barr}) {
    const [Rua, setRua] = useState('')
    const [Msel,setMsel]=useState(barr)
    const [erro ,seterro] = useState(null)

                
function ExibirErro(msg, tempo=15){
    seterro(msg)
    setTimeout(()=>seterro(null), tempo*100)
}
 
    const eventoclicar =(e)=>{
        if(e.target.id ===id)
         onFechar()
    }


    function Salvar() {
        fetch('../api/Outros/Rua',
            {
                method: 'POST',
                body: JSON.stringify({ Rua, Msel })
            })
    }


    return (
        
        <div
            id={id}
            className={`w-screen h-screen absolute top-0 left-0 flex  
        justify-center items-center opacity-100  bg-black z-10"`}
            onClick={eventoclicar}
        >
            <div className="h-auto w-1/2 bg-white opacity-100">
           {erro ? 
       <div className='flex justify-end items-end content-end'>
          <span className=' w-1/3 bg-red-500 text-white font-semibold mx-2 p-1 
          py-3 rounded-sm flex flex-row  gap-2'> {Aviso} {erro} <span className='text-yellow-400'>{emojierro} </span></span>
          </div>
          :null}
              <h1 className={`relative bg-blue-900 h-10 py-3 font-extrabold pl-1 shadow-inner text-gray-50`}>
                    REGISTO DE RUA
                    <span
                        className="right-2 absolute z-10 bg-black text-white font-bold rounded-full px-1.5 cursor-pointer"
                        onClick={onFechar}
                    >
                        X
                    </span>
                    </h1>
                <hr />
             
                    <div className={`flex flex-col mt-2 pl-1`}>
                <Entrada label="Nome da Rua"
                    valor={Rua}
                    valorMudou={setRua}
                    texto='Digite o nome da Rua'
                />
                </div>
              

                <div className={`flex justify-end`}>
                <Botao onclick={()=>{Salvar()
                            onFechar()}}>Adicionar</Botao>
           <Botao cor="red" onclick={onFechar}>Cancelar</Botao>
                </div>
            </div>
            </div>
       
    )
}