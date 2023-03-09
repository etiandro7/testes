import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import {Aviso,Certo} from '../../components/icons'
import Theme from '../../components/template/theme/Theme'
import Nacionalidade1 from '../Outros/Nacionalidade'
import Provincia from '../Outros/Provincia'
import Municipio from '../Outros/Municipio'
import Bairro1 from '../Outros/Bairro'
import Rua1 from '../Outros/Rua'
import Link from 'next/link'
import Image from 'next/image'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import Usuario_Logado from '../../components/Context/UsuarioAuth'
import router, {useRouter} from 'next/router'



export default function Acusado(props) {

    const ULogado = Usuario_Logado()

    const rota = useRouter() 


    const [visivel, setvisivel] = useState(false)
    const [Visiblemunicipio, setVisiblemunicipio] = useState(false)
    const [visivelnacionalidade, setvisivelnacionalidade] = useState(false)
    const [VisualBairro, setVisualBairro] = useState(false)
    const [VisualRua, setVisualRua] = useState(false)

    const [nome,setnome]= useState(props.Nomeocorrencia)
  
  //   const numero = props.Codigoocorrencia

const [Nacionalidades, setNacionalidades] = useState([])
    const [Nomepessoa, setNomepessoa] = useState('')
    const [Status, setStatus] = useState('')
    const [numero, setNumero] = useState(rota.query.Ocorre)
    const [cor, serCor] =useState('gray')
    const [Documento, setDocumento] = useState('')
    const [Nascimento, setNascimento] = useState('')
    const [Tipopessoa, setTipopessoa] = useState('ACUSADO')
    const [residente, setresidente] = useState('')
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




    const [foto, setfoto] = useState('')
    const [fotosel, setfotosel] = useState(false)

    const [Nacionalidade, setNacionalidade] = useState(0)
    const [Idprovincia, setIdprovincia] = useState(0)
  
    const [Idmunicipio, setIdmunicipio] = useState(0)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
    const [Proximo, setProximo] = useState('')
    const [Profissao, setProfissao] = useState('')
    const [Contacto, setContacto] = useState('')


    const [erro ,seterro] = useState(null)
    const [confirma, setConfirma] = useState(0)
   


function carregarFoto(e)
{
    if(e.target.files && e.target.files[0])
    {
        let reder = new FileReader()
        reder.onload = function(e){
            setfoto(e.target.result)
            setfotosel(true)
        }
         reder.readAsDataURL(e.target.files[0])
    }
}

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

             
function ExibirErro(msg, tempo=15, ida=1){
    seterro(msg)
    setConfirma(ida)

    setTimeout(()=>{seterro(null)
    setConfirma(0)}, tempo*100)
}   
       


    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Municipio?Idprovincia=${Idprovincia}`)
        .then(res =>res.json())
        .then(setMunicipios)
       },[Idprovincia]) 


       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Bairro?Idmunicipio=${Idmunicipio}`)
        .then(res =>res.json())
        .then(setBairro)
       },[Idmunicipio]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Rua?Idbairro=${Idbairro}`)
        .then(res =>res.json())
        .then(setRua)
       },[Idbairro]) 


       function ProvinciaTodas(){
        return Provincias?.map(prov =>{return (
            <option key={prov.idprovincia}value={prov.idprovincia}>{prov.nomeprovincia}</option>
        )})}

      
        function ProvinciaBairro(){
            return Bairro?.map(prov =>{return (
                <option key={prov.idbairro}value={prov.idbairro}>{prov.nomebairro}</option>
            )})}
            function ProvinciaRua(){
                return Rua?.map(prov =>{return (
                    <option key={prov.idrua}value={prov.idrua}>{prov.nomerua}</option>
                )})}

        function ProvinciaMunicipio(){
            return Municipios?.map(prov =>{return (
                <option key={prov.Idmunicipio}value={prov.Idmunicipio}>{prov.nomemunicipio}</option>
            )})}

            function NacionalidadeTodos() {
                return Nacionalidades?.map((nacio) => {
                    return (
                        <option key={nacio.idnacionalidade} value={nacio.idnacionalidade}>
                            {nacio.nacionalidade}
                        </option>
                    )
                })
            }


   async  function Salvar() {
    if(Nomepessoa=="" || Contacto==""){
        ExibirErro(' Os campos obrigatório devem ser Prenchidos ')
       // setObrigatorio(true)
    } else{
        const  resp = await fetch('../api/Outros/Vitima',
            {
                method: 'POST',
                body: JSON.stringify({ Nomepessoa,
                     Tipopessoa,
                      Apelido, Estado_civil, 
                       Sexo, Nascimento,
                        Altura, NBI, Pai, Mae, Nacionalidade,
                           Idprovincia, Idmunicipio, 
                            Profissao,
                             Contacto ,foto,numero,Documento,residente})
            })
            const data = await resp.json()
            if(data.insertId > 0 ){
                //setcodigoVitima(data.insertId)
            ExibirErro(`Os dados do(a) ${Nomepessoa} foram Inseridos com Sucesso`,15,2)
            //setPasso(true)
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
        uppercase flex items-end content-end justify-end p-2">DADOS DO ACUSADOS</h1>  

<div className='my-1  box-border bg-gray-50 gap-1 shadow-lg rounded-lg pl-1'>
                <div className={`flex flex-row w-full justify-end items-end`}>
               
                    <div className={`flex relative flex-row flex-wrap m-7  w-40  bg-gray-50 shadow-xl rounded-lg h-40  border-1 border-lifont-light`}>

                       {!fotosel?(
                           <>
                           <label htmlFor="imagem">
                           <Image src="/pessoa.png"
                           accept=""
                           alt="Picture of the author"
                           width={500}
                           height={500}
                           draggable={false} 
                           className={` bg-green-100 shadow-md rounded-lg cursor-pointer`} />
                                                  
                           </label>
                           <input id="imagem" type="file" className="hidden"
                           onChange={carregarFoto}></input>
                        </>   
                       ):(
                           <>
                           <span className="-right-0 absolute z-10 bg-gray-800 text-white font-bold rounded-full px-1.5 cursor-pointer"
                           onClick={()=>setfotosel(false) 
                           }>X</span>
                        <Image src={foto} className={`w-full h-full  bg-green-100 shadow-md rounded-lg`}  
                          alt="Picture of the author"
                          width={500}
                          height={500}/>
                       </>)}
                   
                    </div>
                </div>

                <div className="grid grid-cols-4 box-border bg-gray-50 gap-1 shadow-lg rounded-lg pl-1">    

                    <div className={`col-span-3`}>
                        <Entrada label="Nome do(a) Acusado"
                            valor={Nomepessoa}
                            valorMudou={setNomepessoa}
                            obrigatorio={true}
                            texto='Nome do(a) Acusado'
                        />
                    </div>
                    <div className={``}>
                        <Entrada label="TCP"
                            valor={Apelido}
                            valorMudou={setApelido}
                            texto='TCP'
                        />
                    </div>
               
                <div className={`col-span-2`}>
                  
                        <Entrada label="Filho de"
                            valor={Pai}
                            valorMudou={setPai}
                            texto='Nome do Pai'

                        />
                     </div>
                    <div className={`col-span-2`}>
                        <Entrada label="E de"
                            valor={Mae}
                            valorMudou={setMae}
                            texto='Nome da Mãe'
                        />
                    </div>
              
                <div className={`w-full -py-2`}>
                
                        <Entrada label="Data de Nascimento"
                            valor={Nascimento}
                            valorMudou={setNascimento}
                            tipo="date"
                            texto='Data Nascimento'
                           />
                        
                    </div>
                    <div className={`w-full`}>
                        <Entrada label="Altura"
                            valor={Altura}
                            valorMudou={setAltura}
                            texto="0.00 cm"

                        />
                    </div>
                 
                        
                    <div className=" flex flex-col ml-2 mr-2">
                                <label className={`text-gray-700 font-semibold`}>Sexo</label>
                                    <select
                                    name={Sexo}
                                    onChange={(e) => setSexo(e.target.value)}
                                    className={`border border-gray-400 text-1xl  
                                    focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                                        focus:outline-none  font-extralight bg-white p-1
                                         py-1.5 max-h-10 `}>
                                    <option value="">Selecionar o Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                            </div>
                            <div className="flex flex-col mr-2">
                                <label className={`text-gray-700 font-semibold`}>Estado Civil</label>
                                <select
                                    name={Estado_civil}
                                    onChange={(e) =>
                                     setEstado_civil(e.target.value)
                                    }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white 
                                      py-1.5 max-h-10 p-1`}>
                                     
                                    <option value="">Selecionar o estado Civil</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                    <option value="Divorciado(a)">
                                        Divorciado(a)
                                    </option>
                                </select>
                            </div>
        
               
                  
                    <div className=" flex flex-col w-full">

                        <label className={`text-gray-700 font-semibold`}>Tipo de Documento</label>
                        <select name={Documento} onChange={(e)=>setDocumento(e.target.value)}
                            className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white 
                                      py-1.5 max-h-10 p-1 mr-2`}>
                            <option value="">Selecionar o Tipo de Documento</option>
                            <option value="Bilhete">Bilhete de Identidade</option>
                            <option value="Passaporte">Passaporte</option>
                            <option value="Cedula">Cedula</option>
                       
                        </select>

                    </div>
                    <div className={`w-full -mt-1.5`}>
                        <Entrada label="Nº do Documento"
                            valor={NBI}
                            valorMudou={setNBI}
                            className={`p-1`}
                        />
                    </div>
              
                    <div className={`flex flex-col col-span-2 mr-2 mx-2`}>
                            <label className={`text-gray-700 font-semibold`}>Nacionalidade</label>
                            <div className='flex'>
                                <select
                                    name={Nacionalidade}
                                    onChange={(e) =>
                                        setNacionalidade(e.target.value)
                                    }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900
                                     focus:ring-2 focus:border-opacity-0
                 focus:outline-none 
                  font-extralight bg-white w-full py-1 p-2
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

                            <div className={`flex flex-col w-full col-span-2`}>
                                <label className={`text-gray-700 font-semibold `}>Provincia</label>
                                <div className='flex'>
                                <select
                                    name={Idprovincia}
                                    onChange={(e) =>
                                    setIdprovincia(e.target.value)
                                    }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 
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
                                    className="text-yellow-400  w-8 h-8  ring-1  bg-gray-700 text-2xl mr-2"
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



                            <div className={`flex flex-col w-full col-span-2 mx-2 `}>
                                <label className={`text-gray-700 font-semibold `}>Município</label>
                                <div className='flex'>
                                <select
                                      name={Idmunicipio}
                                      onChange={(e) =>
                                      setIdmunicipio(e.target.value)
                                    }
                                    className={`border border-blue-400 text-1xl  focus:border-blue-900 focus:ring-2 
                                     focus:border-opacity-0
                                     focus:outline-none
                                     font-extralight bg-white 
                                       max-h-10 w-full`}>
                                    <option value="">
                                        Selecionar a Município
                                    </option>
                                    {Idprovincia != 0 ? ProvinciaMunicipio(): false}
                                   
                                </select>
                                <button
                                    className="text-yellow-400  w-8 h-8  ring-1  bg-gray-700 text-2xl mr-4"
                                    onClick={() => setvisivel(true)}>
                                    +
                                </button>
                                </div>
                                {Visiblemunicipio ? (
                                    <Municipio
                                        onFechar={() =>
                                            setVisiblemunicipio(false)
                                        } Prov={Idprovincia}>
                                    </Municipio>
                                ) : null}
                            </div>
                      
                            <div className='-mt-1 w-full col-span-2'>
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
             <button className=' focus:border-blue-900 focus:ring-2 focus:border-opacity-0 rounded-sm
                 focus:outline-none py-1 shadow-xl p-2 w-1/12 font-semibold bg-green-600 text-white m-1' onClick={() => {
                                Salvar()
                            }}>Salvar</button>

<button className=' focus:border-blue-900 focus:ring-2 focus:border-opacity-0 rounded-sm
                 focus:outline-none py-1 shadow-xl p-2 w-1/12 font-semibold bg-red-600 text-white m-1'><Link href={`/Comando/`}>Cancelar</Link></button>
                </div>
             </div>
                </div>
                </div>
                
               
              
           
            </Layoutmunicipal>
    )
}