import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Orgao() {
    const [nomeorgao, setnomeorgao] = useState('')
    const [sigla, setSigla] = useState('')
    const [email, setEmail] = useState('')

    function Salvar() {
        fetch('../api/Outros/Orgao',
            {
                method: 'POST',
                body: JSON.stringify({ nomeorgao,sigla })
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-2 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE ORGÃOS E COMANDOS</h1>
                <hr />

                <Entrada label="Nome do Órgao / Comando / Unidade"
                    valor={nomeorgao}
                    valorMudou={setnomeorgao}
                />
                <div className={`flex`}>
                    <div className={`flex flex-col  flex-grow`}>
                        <Entrada label="Email Institucional"
                            valor={email}
                            valorMudou={setEmail}
                            tipo="email"
                        />
                    </div>
                    <div className={`flex justify-start m-0`}>
                        <Entrada label="Sigla"
                            valor={sigla}
                            valorMudou={setSigla}
                        />
                    </div>
                </div>
                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>
            </div>
        </div>
    )
}