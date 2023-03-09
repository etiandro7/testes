import {useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'

export default function Bairro({ onFechar = () => {}, id = 'modal', Munio }) {
    const [bairro, setBairro] = useState('')
    const [Msel, setMsel] = useState(Munio)

    const eventoclicar = (e) => {
        if (e.target.id === id) onFechar()
    }
    function Salvar() {
        fetch('../api/Outros/Bairro', {
            method: 'POST',
            body: JSON.stringify({ bairro, Msel }),
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
                <h1
                    className={`relative bg-blue-900 h-10 py-3 font-extrabold pl-1 shadow-inner text-gray-50`}
                >
                    REGISTO DE BAIRRO
                    <span
                        className="right-2 absolute z-10 bg-black text-white font-bold rounded-full px-1.5 cursor-pointer"
                        onClick={onFechar}
                    >
                        X
                    </span>
                </h1>
                <hr />

                <div className={`flex flex-col mt-2 pl-1`}>
                    <Entrada
                        label="Nome do Bairro"
                        valor={bairro}
                        valorMudou={setBairro}
                        texto="Digite o nome do Bairro"
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
