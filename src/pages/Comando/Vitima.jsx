import { Aviso, Certo } from '../../components/icons'
import router,{useRouter} from 'next/router'
import Theme from '../../components/template/theme/Theme'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import Entrada from '../../components/formcomp/Entrada'
import Provincia from '../Outros/Provincia'
import { useEffect, useState } from 'react'
import Municipio from '../Outros/Municipio'
import Bairro1 from '../Outros/Bairro'
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import Rua1 from '../Outros/Rua'
import Nacionalidade1 from '../Outros/Nacionalidade'
import Usuario_Logado from '../../components/Context/UsuarioAuth'

import Botao from "../../components/formcomp/Botaosalvar";
import Link from 'next/link'

export default function VitimaOuto() {
    const [cor, serCor] = useState('red')

    const ULogado = Usuario_Logado()

    const Logado = UsuarioLogado()

   const rota = useRouter()


    const [Idesquadra, setIdesquadra] = useState(ULogado.idesquadra)

    const [Idusuario, setIdusuario] = useState(ULogado.idusuario)


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
    const [residente, setresidente] = useState('')
    const [Apelido, setApelido] = useState('')
    const [Estado_civil, setEstado_civil] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Altura, setAltura] = useState('')
    const [NBI, setNBI] = useState('')
    const [Pai, setPai] = useState('')
    const [Mae, setMae] = useState('')
    const [idade, setidade] = useState(0)

    const [Provincias, setProvincias] = useState([])
    const [Nacionalidades, setNacionalidades] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])
    const [Rua, setRua] = useState([])

    const [Nacionalidade, setNacionalidade] = useState(0)
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
        'Dados Relevantes'
    )
    const [erro, seterro] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/api/Outros/Provincia?Idnacionalidade=${Nacionalidade}`)
            .then((res) => res.json())
            .then(setProvincias)
    }, [Nacionalidade])

    useEffect(() => {
        fetch('http://localhost:3000/api/Outros/Nacionalidade')
            .then((res) => res.json())
            .then(setNacionalidades)
    }, [Nacionalidade])

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

    function NacionalidadeTodos() {
        return Nacionalidades?.map((nacio) => {
            return (
                <option key={nacio.idnacionalidade} value={nacio.idnacionalidade}>
                    {nacio.nacionalidade}
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
        setEstado_civil("")
        setSexo("")
        setNascimento('')
        setidade(0)
        setPai('')
        setMae('')
        setNacionalidade('')
        setIdprovincia(0)
        setIdmunicipio(0)
        setProfissao('')
        setContacto('')
        setDocumento('')
    }
  
    async function Salvar() {
        const dt = new Date()
        if (Nomepessoa == '') {
            
            if((Nascimento.substring(0,4)-dt.getFullYear())<16)
                 console.log('Não pode Fazer denuncia verificar a idade')
            else
                 console.log(Nascimento)
            ExibirErro(' Os campos obrigatório com (*) são Obrigatório ')
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
               
                    Pai,
                    Mae,
                    Nacionalidade,
                    Idprovincia,
                    Profissao,
                    Contacto,
                    residente,idade
                }),
            })

            const data = await resp.json()
            if (data.insertId > 0) {
                setcodigoVitima(data.insertId)
                ExibirErro(
                    `Os dados do(a) ${Nomepessoa} foram Inseridos com Sucesso`,
                    20,
                    2
                )
                limpardados()               
                router.push(`Ocorrencias?vit=${data.insertId }`)
            }
        }
    }
    return (
    
        <Layoutmunicipal titulo={ULogado.sigla} subtitulo={ULogado.Nomeorgao}> 
                {confirma == 1 ? (
                <div className="flex justify-end items-end content-end">
                    <span className="w-1/2 bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-96 top-0
                    rounded-md focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  flex flex-row  gap-2"> {Aviso} {erro}</span>
                </div>
            ) : null}
            {confirma == 2 ? (
              <div className="flex justify-end items-end content-end">
                    <span className=" w-1/2 bg-green-600 text-white font-light mx-2 p-1 
                    absolute shadow-2xl top-0 rounded-md focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none py-1 flex flex-row  gap-2">{Certo} {erro}</span>
                </div>
            ) : null}


          <h1 className="shadow bg-gray-700 font-semibold text-1xl text-white 
        uppercase flex items-end content-end justify-end p-2">Dados do Queixoso</h1>  
 


        <div className="grid grid-cols-4 box-border bg-gray-50 gap-1 shadow-lg rounded-lg pl-1">    
       
        <div className=" col-span-3 -ml-2">
                                <Entrada
                                    label="Nome Completo *"
                                    valor={Nomepessoa}
                                    valorMudou={setNomepessoa}
                                    texto="Digite o nome Completo"
                                    Obriga={true}
                               
                                />
                            
        </div>

        <div className="">
                                <Entrada
                                    label="Idade"
                                    valor={idade}
                                    valorMudou={setidade}
                                    texto="idade"
                                    className={'col-span-2 -ml-2'}
                                   
                                    tipo="number"
                                />
                                </div>
        <div className="  col-span-2">
                                <Entrada
                                    label="Filho(a) de"
                                    valor={Pai}
                                    valorMudou={setPai}
                                    texto="Digite o nome do Pai"
                                           className={'col-span-2 -ml-2'}
                                />
                                </div>
                                <div className="col-span-2">
                                <Entrada
                                    label="e de"
                                    valor={Mae}
                                    valorMudou={setMae}
                                    texto="Digite o nome da Mãe"
                                           className={'col-span-2 -ml-2'}
                                />
                            </div>    
                            <div className=" flex flex-col">
                                <label className={`text-gray-700 font-semibold`}>Sexo</label>
                                    <select
                                    name={Sexo}
                                    onChange={(e) => setSexo(e.target.value)}
                                    className={`border border-gray-400 text-1xl  
                                    focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                                        focus:outline-none  font-extralight bg-white 
                                         py-1.5 max-h-10 `}>
                                    <option value="">Selecionar o Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-gray-700 font-semibold`}>Estado Civil</label>
                                <select
                                    name={Estado_civil}
                                    onChange={(e) =>
                                     setEstado_civil(e.target.value)
                                    }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white 
                                      py-1.5 max-h-10`}>
                                    <option value="">Estado Civil</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                    <option value="Divorciado(a)">
                                        Divorciado(a)
                                    </option>
                                </select>
                            </div>
                     <div className={`flex flex-col col-span-2 mr-2`}>
                            <label className={`text-gray-700 font-semibold`}>Nacionalidade</label>
                            <div className='flex'>
                                <select
                                    name={Nacionalidade}
                                    onChange={(e) =>
                                        setNacionalidade(e.target.value)
                                    }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1
                                       max-h-10`}>
                                    <option value="">Selecionar a nacionalidade</option>
                                    {NacionalidadeTodos()}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={() => setvisivelnacionalidade(true)}>
                                    +
                                </button>
                                </div>
                                {visivelnacionalidade ? (
                                    <Nacionalidade1 onFechar={() => setvisivelnacionalidade(false)}>
                                     
                                    </Nacionalidade1>
                                ) : null}
                            </div>
                            <div className={`flex flex-col w-full `}>
                                <label className={`text-gray-700 font-semibold `}>Provincia</label>
                                <div className='flex'>
                                <select
                                    name={Idprovincia}
                                    onChange={(e) =>
                                    setIdprovincia(e.target.value)
                                    }
                                    className={`border border-blue-400 text-1xl  focus:border-blue-900 focus:ring-2 
                                     focus:border-opacity-0
                                     focus:outline-none
                                     font-extralight bg-white 
                                       max-h-10 w-full`}>
                                    <option value="">
                                        Selecionar a Província
                                    </option>
                                    {Nacionalidade != 0 ? ProvinciaTodas(): false}
                                   
                                </select>
                                <button
                                    className="text-yellow-400  w-8 h-8  ring-1  bg-gray-700 text-2xl"
                                    onClick={() => setvisivel(true)}>
                                    +
                                </button>
                                </div>
                                {visivel ? (
                                    <Provincia
                                        onFechar={() => setvisivel(false) } Nacio={Nacionalidade}
                                    >
                                    </Provincia>
                                ) : null}
                            </div>

                            <div className='-mt-1 w-full'>

                            <Entrada
                                    label="Residente no *"
                                    valor={residente}
                                    valorMudou={setresidente}
                                    texto="Local de residência"
                                    Obriga={true}
                                    className={'col-span-2 -ml-2'}
                                />
                            </div>

                            <div className='-mt-1 w-full'>

                            <Entrada
                                    label="Contacto *"
                                    valor={Contacto}
                                    valorMudou={setContacto}
                                    texto="9XX-XXX-XXX"
                                    Obriga={true}
                                    className={'col-span-2 -ml-2'}
                                />
                            </div>
                            <div className='-mt-1 w-full'>

                            <Entrada
                                    label="Digite a profissão"
                                    valor={Profissao}
                                    valorMudou={setProfissao}
                                    texto="Digite a profissão"
                                    Obriga={true}
                                    className={'col-span-2 -ml-2'}
                                />
                            </div>

        <div  className=" text-white col-span-4 container"> 
             <div className={`flex justify-end`}>
             <button className=' focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none py-1 shadow-xl p-2 w-1/9 font-extrabold bg-green-600 text-white m-1' onClick={() => {
                                Salvar()
                            }}>Salvar Dados </button>

<button className=' focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none py-1 shadow-xl p-2 w-1/9 font-extrabold bg-red-600 text-white m-1'><Link href={`/Comando/`}>Cancelar</Link></button>
                </div>
             </div>



        </div>
        </Layoutmunicipal>
      
    
    )
}