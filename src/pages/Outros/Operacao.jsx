import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Operacao() {
    const [nomeoperacao, setnomeoperacao] = useState('')
    const [datainicio, setdatainicio] = useState('')
    const [datatermino, setdatatermino] = useState('')
    const [orientadoPor, setorientadoPor] = useState('')
    const [realizador, setrealizador] = useState('')
    const [objs, setobjs] = useState('Descreve o detalhe das operações')

    function Salvar() {
        fetch('../api/Outros/Operacao',
            {
                method: 'POST',
                body: JSON.stringify({ nomeoperacao, datainicio, datatermino, orientadoPor, realizador,objs })
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>


            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-2 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE OPERAÇÕES</h1>
                <hr />
                <Entrada label="Nome da Operação"
                    valor={nomeoperacao}
                    valorMudou={setnomeoperacao}
                   
                />

<div className={`flex`}>
                    <div className={`flex flex-col m-0`}>
                        <Entrada label="Data Início"
                            valor={datainicio}
                            valorMudou={setdatainicio}
                            tipo="date"

                        />
                    </div>
                    <div className={`flex flex-col m-0`}>
                        <Entrada label="Data Termino"
                            valor={datatermino}
                            valorMudou={setdatatermino}
                            tipo="date"
                        />
                    </div>
                    <div className={`flex flex-col flex-grow m-0`}>
                        <Entrada label="Coordenador"
                            valor={orientadoPor}
                            valorMudou={setorientadoPor}
                           
                        />
                    </div>
                </div>
                <Entrada label="Realizador"
                            valor={realizador}
                            valorMudou={setrealizador}
                           
                        />



                   <div className={`flex flex-col mt-2 pl-2`}>
                <label className={`font-black mx-3`}>Obejectivo da Operação</label>
                <textarea name="" id="" rows="7" value={objs} onChange={(e)=>setobjs(e.target.value)}
                    className={`px-1  border  mx-2 py-1 shadow-inner
             focus:border-blue-500 focus:outline-none  font-light rounded-lg`}
                ></textarea>
</div>

                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>
            </div>
        </div>
    )
}