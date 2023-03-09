import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Grupo() {
    const [provincia, setProvincia] = useState('')

    function Salvar() {
        fetch('../api/Outros/Provincia',
            {
                method: 'POST',
                body: JSON.stringify({ provincia })
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-3 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DOS GRUPOS CRIMINOSOS</h1>
                <hr />

                <div className={`flex`}>
                    <div className={`flex flex-col mt-2 pl-5 flex-grow`}>
                        <label className={`font-black mx-3`}>Município</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="">Nome da Município</option>
                        </select>
                    </div>
                    <div className={`flex flex-col mt-2 pl-1 flex-grow`}>
                        <label className={`font-black mx-3`}>Bairro</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="">Nome da Município</option>
                        </select>
                    </div>
                </div>
                <Entrada label="Nome da Grupo"
                    valor={provincia}
                    valorMudou={setProvincia}

                />
                <Entrada label="Área de Actuação"
                    valor={provincia}
                    valorMudou={setProvincia}

                />
                <Entrada label="Actividades realizadas"
                    valor={provincia}
                    valorMudou={setProvincia}

                />
          
                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>
            </div>
        </div>
    )
}