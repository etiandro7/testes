import { Aviso, Certo } from './../../components/icons'
import {ChangeEvent} from 'react'
//import Theme from '../../components/template/theme/Theme'
import route from 'next/router'
import Entrada from '../../components/formcomp/Entrada'
import Ocorrencia from '../Outros/Ocorrencias'
import Provincia from '../Outros/Provincia'
import Botao from '../../components/formcomp/Botaosalvar'
import { useEffect, useState } from 'react'
import Municipio from '../Outros/Municipio'
import Bairro1 from '../Outros/Bairro'
import Rua1 from '../Outros/Rua'
import Nacionalidade1 from '../Outros/Nacionalidade'

export default function Vitima() {
    const [cor, serCor] = useState('red')

    const [visivel, setvisivel] = useState(false)
    const [Visiblemunicipio, setVisiblemunicipio] = useState(false)
    const [visivelnacionalidade, setvisivelnacionalidade] = useState(false)
    const [VisualBairro, setVisualBairro] = useState(false)
    const [VisualRua, setVisualRua] = useState(false)

    const [codigoVitima, setcodigoVitima] = useState(0)

    const [Passo, setPasso] = useState(false)

    const [Nomepessoa, setNomepessoa] = useState('')
    const [Documento, setDocumento] = useState('')
    const [Nascimento, setNascimento] = useState('')
    const [Tipopessoa, setTipopessoa] = useState('Vítima')
    const [Apelido, setApelido] = useState('')
    const [Estado_civil, setEstado_civil] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Altura, setAltura] = useState('')
    const [NBI, setNBI] = useState('')
    const [Pai, setPai] = useState('')
    const [Mae, setMae] = useState('')

    const [Provincias, setProvincias] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])
    const [Rua, setRua] = useState([])

    const [Nacionalidade, setNacionalidade] = useState('')
    const [Idprovincia, setIdprovincia] = useState(0)

    const [Idmunicipio, setIdmunicipio] = useState(0)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
    const [Proximo, setProximo] = useState('')
    const [Profissao, setProfissao] = useState('')
    const [confirma, setConfirma] = useState(0)
    const [Contacto, setContacto] = useState('')
    const [Obrigatorio, setObrigatorio] = useState(false)
    const [Nota, setNota] = useState(
        'Nome e contacto de um familiar mais Proximo'
    )
    const [erro, seterro] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/Outros/Provincia')
            .then((res) => res.json())
            .then(setProvincias)
    }, [Idprovincia])

    useEffect(() => {
        fetch(
            `http://localhost:3000/api/Outros/Municipio?Idprovincia=${Idprovincia}`
        )
            .then((res) => res.json())
            .then(setMunicipios)
    }, [Idprovincia])

    useEffect(() => {
        fetch(
            `http://localhost:3000/api/Outros/Bairro?Idmunicipio=${Idmunicipio}`
        )
            .then((res) => res.json())
            .then(setBairro)
    }, [Idmunicipio])

    useEffect(() => {
        fetch(`http://localhost:3000/api/Outros/Rua?Idbairro=${Idbairro}`)
            .then((res) => res.json())
            .then(setRua)
    }, [Idbairro])

    function ProvinciaTodas() {
        return Provincias?.map((prov) => {
            return (
                <option key={prov.idprovincia} value={prov.idprovincia}>
                    {prov.nomeprovincia}
                </option>
            )
        })
    }
    function ProvinciaBairro() {
        return Bairro?.map((prov) => {
            return (
                <option key={prov.idbairro} value={prov.idbairro}>
                    {prov.nomebairro}
                </option>
            )
        })
    }
    function ProvinciaRua() {
        return Rua?.map((prov) => {
            return (
                <option key={prov.idrua} value={prov.idrua}>
                    {prov.nomerua}
                </option>
            )
        })
    }

    function ProvinciaMunicipio() {
        return Municipios?.map((prov) => {
            return (
                <option key={prov.Idmunicipio} value={prov.Idmunicipio}>
                    {prov.nomemunicipio}
                </option>
            )
        })
    }

    function ExibirErro(msg, tempo = 15, ida = 1) {
        seterro(msg)
        setConfirma(ida)

        setTimeout(() => {
            seterro(null)
            setConfirma(0)
        }, tempo * 100)
    }
 const Eventodata = (Event) =>{

    setNascimento(Event.target.value)
 }



    const limpardados = () => {
        setNomepessoa('')
        setTipopessoa('')
        setApelido('')
        setEstado_civil('')
        setSexo('')
        setNascimento('')
        setAltura('')
        setNBI('')
        setPai('')
        setMae('')
        setNacionalidade('')
        setIdprovincia(0)
        setIdmunicipio(0)

        setIdbairro(0)
        setIdrua(0)
        setProximo('')
        setProfissao('')

        setContacto('')
        setDocumento('')
        setNota('')
        setObrigatorio(false)
    }
    {
        codigoVitima == 0 ? null : (cor = 'green')
    }
    async function Salvar() {
        const dt = new Date()
        if (Nomepessoa == '' || Nascimento == '' || Sexo == '') {
            
            if((Nascimento.substring(0,4)-dt.getFullYear())<16)
                 console.log('Não pode Fazer denuncia verificar a idade')
            else
                 console.log(Nascimento)
            ExibirErro(' Os campos obrigatório devem ser Prenchidos ')
            setObrigatorio(true)
        } else {
            const resp = await fetch('../api/Outros/Vitima', {
                method: 'POST',
                body: JSON.stringify({
                    Nomepessoa,
                    Tipopessoa,
                    Apelido,
                    Estado_civil,
                    Sexo,
                    Nascimento,
                    Altura,
                    NBI,
                    Pai,
                    Mae,
                    Nacionalidade,
                    Idprovincia,
                    Idmunicipio,
                    Idbairro,
                    Idrua,
                    Proximo,
                    Profissao,
                    Contacto,
                    Documento,
                    Nota,
                }),
            })

            const data = await resp.json()
            if (data.insertId > 0) {
                setcodigoVitima(data.insertId)
                ExibirErro(
                    `Os dados do(a) ${Nomepessoa} foram Inseridos com Sucesso`,
                    15,
                    2
                )
                setPasso(true)
            }
        }
    }

    return (
    
           
 
        <div
            className="w-full shadow-lg mx-auto border-solid bg-white rounded-sm
            h-screen relative "
        >
            {confirma == 1 ? (
                <div className="flex justify-end items-end content-end">
                    <span
                        className="w-auto bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-96 top-0
                rounded-sm flex flex-row  gap-2"
                    >
                        
                        {Aviso} {erro}
                    </span>
                </div>
            ) : null}
            {confirma == 2 ? (
                <div className="flex justify-end items-end content-end">
                    <span
                        className=" w-auto bg-green-600 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl top-0
               rounded-sm flex flex-row  gap-2"
                    >
                     
                        {Certo} {erro}
                    </span>
                </div>
            ) : null}

            {Passo ? (
                <Ocorrencia
                    nome={Nomepessoa}
                    apelido={Apelido}
                    codigovitima={codigoVitima}
                ></Ocorrencia>
            ) : (
                <>
                    <h1
                        className={`border-l-10 border-yellow-500  h-15 py-2.5 text-2xl font-extrabold pl-1 text-white right:0 bg-yellow-600`}
                    >
                        REGISTO DO QUEIXO
                    </h1>
                    
               
                    <div className="my-4">
                        <div className={`flex `}>
                            <div className={`flex flex-col w-full`}>
                                <Entrada
                                    label="Nome Completo"
                                    valor={Nomepessoa}
                                    valorMudou={setNomepessoa}
                                    texto="Digite o nome Completo"
                                    Obriga={true}
                                />
                                {Obrigatorio ? (
                                    <span className="text-red-600 text-sm animate-bounce mx-4">
                                        (Nome é um Campo Obrigatório)
                                    </span>
                                ) : null}
                            </div>
                            <div className={`flex flex-col w-1/3`}>
                                <Entrada
                                    label="Pseudónimo"
                                    valor={Apelido}
                                    valorMudou={setApelido}
                                    texto="Digite o Pseudónimo"
                                />
                            </div>
                        </div>
                        <div className={`flex`}>
                            <div className={`flex flex-col w-1/2`}>
                                <Entrada
                                    label="Filho de"
                                    valor={Pai}
                                    valorMudou={setPai}
                                    texto="Digite o nome do Pai"
                                />
                            </div>
                            <div className={`flex flex-col w-1/2`}>
                                <Entrada
                                    label="e de"
                                    valor={Mae}
                                    valorMudou={setMae}
                                    texto="Digite o nome da Mãe"
                                />
                            </div>
                        </div>
                        <div className={`flex`}>
                            <div
                                className={`flex flex-col w-1/3 whitespace-nowrap`}
                            >
                                <Entrada
                                    label="Data de Nascimento"
                                    valor={Nascimento}
                                   //valorMudou={setNascimento}
                                   valorMudou={Eventodata}
                                    tipo="date"
                                    texto="Data Nascimento"
                                />
                            </div>
                            <div className={`flex flex-col w-1/3`}>
                                <label
                                    className={`text-gray-700 font-semibold mt-1`}
                                >
                                    Sexo
                                </label>
                                <select
                                    name={Sexo}
                                    onChange={(e) => setSexo(e.target.value)}
                                    className={`   border    
                            bg-white 
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 py-2 max-h-10`}
                                >
                                    <option value="">Selecionar o Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                            </div>
                            <div className={`flex flex-col w-1/3`}>
                                <label
                                    className={`text-gray-700 font-semibold mt-1 mx-2`}
                                >
                                    Estado Civil
                                </label>
                                <select
                                    name={Estado_civil}
                                    onChange={(e) =>
                                        setEstado_civil(e.target.value)
                                    }
                                    className={`border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 py-2 max-h-10
                        `}
                                >
                                    <option value="">
                                        Selecionar o Estado Civil
                                    </option>
                                    <option value="Solteiro(a)">
                                        Solteiro(a)
                                    </option>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                    <option value="Divorciado(a)">
                                        Divorciado(a)
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className={`flex`}>
                            <div className={`flex flex-col w-1/3 `}>
                                <Entrada
                                    label="Altura"
                                    valor={Altura}
                                    valorMudou={setAltura}
                                />
                            </div>
                            <div className={`flex flex-col w-1/3`}>
                                <label
                                    className={`text-gray-700 font-semibold mt-1`}
                                >
                                    Tipo de Documento
                                </label>
                                <select
                                    name={Documento}
                                    onChange={(e) =>
                                        setDocumento(e.target.value)
                                    }
                                    className={`border    
                            bg-white 
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 py-2 max-h-100`}
                                >
                                    <option value="">
                                        Selecionar o Tipo de Documento
                                    </option>
                                    <option value="Bilhete">
                                        Bilhete de Identidade
                                    </option>
                                    <option value="Passaporte">
                                        Passaporte
                                    </option>
                                    <option value="Cedula">Cedula</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>
                            <div className={`flex flex-col w-1/3`}>
                                <Entrada
                                    label="Nº do Documento"
                                    valor={NBI}
                                    valorMudou={setNBI}
                                />
                            </div>
                        </div>
                        <div className={`flex`}>
                            <div className={`flex flex-col mt-2  w-1/3`}>
                                <label
                                    className={`text-gray-700 font-semibold  mx-3`}
                                >
                                    Nacionalidade
                                </label>
                                <select
                                    name={Nacionalidade}
                                    onChange={(e) =>
                                        setNacionalidade(e.target.value)
                                    }
                                    className={`  border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}
                                >
                                    <option value="">
                                        Selecionar a nacionalidade
                                    </option>
                                    <option value="Angolano">
                                        Angolano(a)
                                    </option>
                                    <option value="Estrangeiro">
                                        Estrangeiro(o)
                                    </option>
                                </select>
                            </div>
                            <div className={`flex flex-col mt-2   w-1/9`}>
                                <button
                                    className="bg-indigo-800 min-h-5 w-10 p-1 mt-6 -mx-3 rounded-sm  text-white " 
                                    onClick={() => setvisivelnacionalidade(true)}>
                                    ...
                                </button>
                                {visivelnacionalidade ? (
                                    <Nacionalidade1 onFechar={() => setvisivelnacionalidade(false)}>
                                        {' '}
                                    </Nacionalidade1>
                                ) : null}
                            </div>
                            <div className={`flex flex-col mt-2 mx-2  w-1/3`}>
                                <label
                                    className={`text-gray-700 font-semibold  mx-3`}
                                >
                                    Provincia
                                </label>
                                <select
                                    name={Idprovincia}
                                    onChange={(e) =>
                                        setIdprovincia(e.target.value)
                                    }
                                    className={`  border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}
                                >
                                    <option value=".">
                                        Selecionar a Província{' '}
                                    </option>
                                    {ProvinciaTodas()}
                                </select>
                            </div>
                            <div
                                className={` flex flex-row mt-2  bg-red-600 w-1/9`}
                            >
                                <button
                                    className="bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-5 rounded-sm  text-white"
                                    onClick={() => setvisivelnacionalidade(true)}
                                >
                                    ...
                                </button>
                                {visivel ? (
                                    <Provincia
                                        onFechar={() => setvisivel(false)}
                                    >
                                        {' '}
                                    </Provincia>
                                ) : null}
                            </div>

                            <div
                                className={`flex flex-col mt-2  mx-4  p-0 w-72`}
                            >
                                <label
                                    className={`text-gray-700 font-semibold  mx-3`}
                                >
                                    Município
                                </label>
                                <select
                                    name={Idmunicipio}
                                    onChange={(e) =>
                                        setIdmunicipio(e.target.value)
                                    }
                                    className={`  border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}
                                >
                                    <option value=".">
                                        Selecionar a Município{' '}
                                    </option>
                                    {Idprovincia != 0
                                        ? ProvinciaMunicipio()
                                        : false}
                                </select>
                            </div>
                            <div
                                className={` flex flex-row mt-2  bg-red-600 w-1/9`}
                            >
                                <button
                                    className="bg-indigo-800 min-h-5 w-10 shadow-inner
                 p-1 mt-6 -mx-7 rounded-sm  text-white"
                                    onClick={() => setVisiblemunicipio(true)}
                                >
                                    ...
                                </button>
                                {Visiblemunicipio ? (
                                    <Municipio
                                        onFechar={() =>
                                            setVisiblemunicipio(false)
                                        }
                                    >
                                        {' '}
                                    </Municipio>
                                ) : null}
                            </div>
                        </div>
                        <div className={`flex`}>
                            <div className={`flex flex-col mt-2  mx-2   w-1/2`}>
                                <label
                                    className={`text-gray-700 font-semibold  mx-3`}
                                >
                                    Bairro
                                </label>
                                <select
                                    name={Idbairro}
                                    onChange={(e) =>
                                        setIdbairro(e.target.value)
                                    }
                                    className={`  border    
                            bg-white mx-1
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10 shadow-inner`}
                                >
                                    <option value=".">
                                        Selecionar a Bairro{' '}
                                    </option>
                                    {Idmunicipio != 0
                                        ? ProvinciaBairro()
                                        : false}
                                </select>
                            </div>
                            <div className={` flex flex-row mt-2  w-1/9`}>
                                <button
                                    className="bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-3 rounded-sm  text-white"
                                    onClick={() => setVisualBairro(true)}
                                >
                                    ...
                                </button>
                                {VisualBairro ? (
                                    <Bairro1
                                        onFechar={() => setVisualBairro(false)}
                                    >
                                        {' '}
                                    </Bairro1>
                                ) : null}
                            </div>

                            <div
                                className={`flex flex-col mt-2  mx-3  p-0 w-5/12`}
                            >
                                <label
                                    className={`text-gray-700 font-semibold  mx-3 pl-2`}
                                >
                                    Rua{' '}
                                </label>
                                <select
                                    name={Idrua}
                                    onChange={(e) => setIdrua(e.target.value)}
                                    className={`   border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10 flex-1  shadow-inner`}
                                >
                                    <option value=".">Selecionar a Rua </option>
                                    {Idbairro != 0 ? ProvinciaRua() : false}
                                </select>
                            </div>
                            <div className={` flex flex-row mt-2 pl-2 w-1/9`}>
                                <button
                                    className="bg-indigo-800 min-h-5 w-12 
                  mt-6 -mx-8 rounded-sm  text-white"
                                    onClick={() => setVisualRua(true)}
                                >
                                    ...
                                </button>
                                {VisualRua ? (
                                    <Rua1 onFechar={() => setVisualRua(false)}>
                                        {' '}
                                    </Rua1>
                                ) : null}
                            </div>
                        </div>

                        <div className={`flex`}>
                            <div className={`flex flex-col mx-1 w-1/3`}>
                                <Entrada
                                    label="Ponto de Referência"
                                    valor={Proximo}
                                    valorMudou={setProximo}
                                    className=""
                                    texto="Ponto de referência da Morada"
                                />
                            </div>

                            <div className={`flex flex-col mx-3 w-1/3`}>
                                <Entrada
                                    label="Contacto"
                                    valor={Contacto}
                                    valorMudou={setContacto}
                                    className=""
                                    texto="(900)-000-000"
                                />
                                {Obrigatorio ? (
                                    <span className="text-red-600 text-sm animate-bounce mx-4">
                                        (Contacto é um campo Obrigatório)
                                    </span>
                                ) : null}
                            </div>

                            <div className={`flex flex-col w-1/3`}>
                                <Entrada
                                    label="Profissão"
                                    valor={Profissao}
                                    valorMudou={setProfissao}
                                />
                            </div>
                        </div>
                        <div className={`flex flex-col mt-2 pl-1`}>
                            <label
                                className={`text-gray-700 font-semibold  mx-3`}
                            >
                                Familiar Proximo
                            </label>
                            <textarea
                                value={Nota}
                                onChange={(e) => setNota(e.target.value)}
                                rows="1"
                                className={`px-2  border  mx-2 py-2 shadow-inner
                border-l-4 border-blue-700
             focus:border-blue-500 focus:outline-none  font-light rounded-sm`}
                            >
                                .
                            </textarea>
                        </div>
                    </div>
                    <div className={`flex justify-end`}>
                        <Botao
                            className=""
                            activado={false}
                            onclick={limpardados}
                            cor="green"
                        >
                            Limpar Dados
                        </Botao>
                        <Botao
                            onclick={() => {
                                Salvar()
                            }}
                        >
                            Adicionar
                        </Botao>
                        <Botao
                            cor="red"
                            onclick={() => route.push('/Dspo')}
                            activado={true}
                        >
                            Cancelar
                        </Botao>
                    </div>
                </>
            )}
        </div>
       
    )
}
