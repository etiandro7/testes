import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import image from 'next/image'


export default function Pessoas() {
    const [Familia, setFamilia] = useState('')

    function Salvar() {
        fetch('../api/Outros/Familia',
            {
                method: 'POST',
                body: JSON.stringify({ Familia })
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-35`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-3 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE XXXXXXXXXXX </h1>
                <hr />


                <div className={`flex`}>
                    <div className={`flex flex-col mt-2 pl-5 w-1/3`}>
                        <label className={`font-light mx-3`}>Tipo de Pessoas</label>
                        <select
                            className={`mt-1 border  mx-3 py-1 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="">VÍTIMA</option>
                            <option value="">ACUSADO</option>
                            <option value="">PIO</option>
                            <option value="">PD</option>
                        </select>
                    </div>
                    <div className={`flex   mt-2 pl-1 w-full justify-end mr-2`}>
                        <image src="" alt="" className={`bg-gray-800 shadow-lg h-40 w-40 rounded-lg`} />
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Nome Completo"
                            valor={Familia}
                            valorMudou={setFamilia}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Apelido"
                            valor={Familia}
                            valorMudou={setFamilia}
                        />
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Filiação "
                            valor={Familia}
                            valorMudou={setFamilia}

                        />
                    </div>
                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Nome da Mãe"
                            valor={Familia}
                            valorMudou={setFamilia}
                        />
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Data de Nascimento"
                            valor={Familia}
                            valorMudou={setFamilia}
                            tipo="date"
                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Genero</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Masculino</option>
                            <option value="F">Fmenino</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>EStado Civil</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Solteiro(a)</option>
                            <option value="F">Casado(a)</option>
                            <option value="F">Viúvo(a)</option>
                            <option value="F">Divorciado(a)</option>
                        </select>

                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/5`}>
                        <Entrada label="Altura"
                            valor={Familia}
                            valorMudou={setFamilia}

                        />
                    </div>

                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Nº do Documento"
                            valor={Familia}
                            valorMudou={setFamilia}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Nacionalidade</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Angolano(a)</option>
                            <option value="F">Estrangeiro(o)</option>
                        </select>
                    </div>
                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Provincia</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Luanda </option>
                            <option value="F">Bengo</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Município</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Matala </option>
                            <option value="F">Menongue</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Bairro</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Comante Cowboy </option>
                            <option value="F">Mitcha</option>
                        </select>
                    </div>


                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Rua </label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Lamurias</option>
                            <option value="F">Gourgel</option>
                        </select>
                    </div> 
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Contacto"
                            valor={Familia}
                            valorMudou={setFamilia}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Profissão</label>
                        <select
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Pedreiro </option>
                            <option value="F">Maconheiro</option>
                        </select>
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