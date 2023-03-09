import { useState } from 'react'
import { useRouter } from 'next/router'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'

export default function ProvinciaForm({ onFechar = () => {}, id = 'modal', Nacio }) {
    const [provincia, setProvincia] = useState('')
    const [idnacionalidade, setinacionalidade] = useState(Nacio)
    //const [provincias, setProvincias] = useState([])

    const eventoclicar = (e) => {
        if (e.target.id === id) onFechar()
    }

    function Salvar() {
        fetch('../api/Outros/Provincia', {
            method: 'POST',
            body: JSON.stringify({ provincia, idnacionalidade }),
        })
        setProvincia('')
    }

    return (
        <div
        id={id}
        className={`w-screen h-screen absolute top-0 left-0 flex  
        justify-center items-center opacity-100  bg-black z-10`}
        onClick={eventoclicar}>
      <div className="h-auto w-1/2 bg-white opacity-100">
          
                <h1 className={`relative bg-blue-900 h-10 py-3 font-extrabold pl-1 shadow-inner text-gray-50`}>
                        
                            REGISTO DE PROVÍNCIA
                            <span
                                className="right-2 absolute z-10 bg-black text-white font-bold rounded-full px-1.5 cursor-pointer"
                                onClick={onFechar}
                            >
                                X
                            </span>
                        </h1>
                        <hr />

                        <Entrada
                            label="Nome da Província"
                            valor={provincia}
                            valorMudou={setProvincia}
                            texto="Digite o nome da Província"
                       
                        />
                        <div className={`flex justify-end`}>
                        <Botao onclick={()=>{Salvar()
                            onFechar()}}>Adicionar</Botao>
           <Botao cor="red" onclick={onFechar}>Cancelar</Botao>
                        </div>
                    </div>
                </div>
       
    )
}
