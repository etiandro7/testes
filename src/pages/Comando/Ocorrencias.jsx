import { useEffect, useState } from "react";
import router, {useRouter} from 'next/router'
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
//import Acusado from '../Outros/Acusado'
//import usuarioData from '../../components/hook/useUsario'
import Usuario_Logado from '../../components/Context/UsuarioAuth'

import {Aviso,Certo} from '../../components/icons'
//import Theme from '../../components/template/theme/Theme'
import Bairro1 from '../Outros/Bairro'
import Rua1 from '../Outros/Rua'
import Familiaa from '../Outros/Familia'
import Tipologia from '../Outros/Tipologia'
import Modalidade from '../Outros/DescricaoCrime'
//import Objectos from '../Outros/TipodeArma'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'


export default function OcorrenciasOutros(props)
{
    const ULogado = Usuario_Logado()
   // const DadosGeral = usuarioData()

   const rota = useRouter() 

   //console.log(rota)

   const Idpessoa = +rota.query.vit


    const [Passo, setPasso] = useState(false)   
    const [Nomeocorrencia,setNomeocorrencia]= useState('')
    const [nome,setnome]= useState(props.nome)
    const [apelido,setapelido]= useState(props.apelido)
    const [Dataocorrencia,setDataocorrencia]= useState('')
    const [Autor,setAutor]= useState('')
    const [causa,setcausa]= useState('')
    const [Hora,setHora]= useState('')
    const [Esclarecido,setEsclarecido]= useState('')
    const [VisualBairro, setVisualBairro] = useState(false)
    const [VisualRua, setVisualRua] = useState(false)
    const [Visualfamilia, setVisualfamilia] = useState(false)

    const [VisualDescricao, setVisualDescricao] = useState(false)
    const [VisualArma, setVisualArma] = useState(false)
    const [VisualTipicidade, setVisualTipicidade] = useState(false)

    const [Descricadaarma,setDescricadaarma]= useState('')
    const [Relacaovitima,setRelacaovitima]= useState('')
    const [Modusoperandi,setModusoperandi]= useState('')
    const [Provincias, setProvincias] = useState([])
    const [Esquadra, setEsquadra] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])
    const [Familia, setFamilia] = useState([])
    const [Topologia, setTopologia] = useState([])
    const [Descricao, setDescricao] = useState([])
    const [Local, setLocal] = useState([])
    const [Rua, setRua] = useState([])

    const [idLoca, setIdLocal] = useState(0)
    const [Idfamilia, setIdfamilia] = useState(0)
    const [IdEsquadra, setIdEsquadra] = useState(ULogado.idesquadra)
    const [IdTipologia, setIdTipologia] = useState(0)
    const [IdDescricao, setIdDescricao] = useState(0)
    const [Idprovincia, setIdprovincia] = useState(ULogado.provincia)
    const [Idmunicipio, setIdmunicipio] = useState(ULogado.municipio)
    const [Idusuario, setIdusuario] = useState(ULogado.idusuario)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
   
    const [idorgao, setidorgao] = useState(ULogado.idorgao)
    const[Orgao,setOrgao]= useState([])
    const [IdTipodeArma, setIdTipodeArma] = useState(0)
    const [Descricaofactos, setDescricaofactos] = useState('Descrição da Ocorrência Criminal')
    const [Meiosubtraido, setMeiosubtraido] = useState('Informe aqui os Meios Subtraidos')
    const [TipodeArma, setTipodeArma] = useState([])
    const [Vita, setVita] = useState([])
    const [erro ,seterro] = useState(null)
    const [Obrigatorio, setObrigatorio] = useState(false)
    const [CodigoOcorrencia , setCodigoOcorrencia] =useState(0)
    const [localpegar,setLocapegar] = useState('')
  
    const [confirma, setConfirma] = useState(0)


 const [fechados , setfechados] = useState(
     [
        'Residência',
        'Discoteca',
        'Bar',
        'Colégio',
        'Corral',
        'Fazenda',
        'Universidade',
        'Instituição Pública',
        'Escola',
        'Loja Convencionais',
        'Cantina',
        'Super Mercado'
     ]
 )
 const [aberto , setaberto] = useState(
     [
        'Rotunda',
        'Parque de Estacionamento',
        'Sair do Banco',
        'Colégio',
        'Corral',
        'Fazenda',
        'Universidade',
        'Instituição Pública',
        'Escola'
     ]
 )
    function ExibirErro(msg, tempo=15, ida=1){
        seterro(msg)
        setConfirma(ida)
    
        setTimeout(()=>{seterro(null)
        setConfirma(0)}, tempo*100)
    }



    
       useEffect(()=>{
        
        fetch('http://localhost:3000/api/Outros/TipodeArma')
        .then(res =>res.json())
        .then(setTipodeArma)
       },[IdTipodeArma]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Local`)
        .then(res =>res.json())
        .then(setLocal)
       },[idLoca]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Familia`)
        .then(res =>res.json())
        .then(setFamilia)
       },[Idfamilia]) 



       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/TipologiaCriminal?idfamilia=${Idfamilia}`)
        .then(res =>res.json())
        .then(setTopologia)
       },[Idfamilia]) 

       
       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Descricao?IdTipologia=${IdTipologia}`)
        .then(res =>res.json())
        .then(setDescricao)
       },[IdTipologia]) 

     /*  useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Bairro?Idmunicipio=${ULogado.municipio}`)
        .then(res =>res.json())
        .then(setBairro)
       },[Idmunicipio]) */
       
       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Rua?Idbairro=${Idbairro}`)
        .then(res =>res.json())
        .then(setRua)
       },[Idbairro]) 

       function TipodeArma_Todos(){
        return TipodeArma?.map(prov =>{return (
            <option key={prov.idtipodearma}value={prov.idtipodearma}>{prov.Nomearma}</option>
        )})}
       function LocaisO(){
            if(localpegar == "Aberto") 
             return aberto?.map(ab => <option key={ab}value={ab}>{ab}</option>)
            else 
            return fechados?.map(abc => <option key={abc}value={abc}>{abc}</option>) 
            }

        function ExibirErro(msg, tempo=15, ida=1){
            seterro(msg)
            setConfirma(ida)
        
            setTimeout(()=>{seterro(null)
            setConfirma(0)}, tempo*100)
        }


       function Familia_todos(){
        return Familia?.map(prov =>{return (
            <option key={prov.idfamilia}value={prov.idfamilia}>{prov.Nomefamilia}</option>
        )})}

        
       function Local_todos(){
        return Local?.map(prov =>{return (
            <option key={prov.idlocais}value={prov.idlocais}>{prov.Nomelocal}</option>
        )})}

        function Descricao_todos(){
            return Descricao?.map(prov =>{return (
                <option key={prov.iddescricao}value={prov.iddescricao}>{prov.Descricao}</option>
            )})}

       function Topologia_todos(){
        return Topologia?.map(prov =>{return (
            <option key={prov.idcrimes}value={prov.idcrimes}>{prov.Nomecrime}</option>
        )})}


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


         async   function Salvar() {
          /*   if(Nomeocorrencia==""){
                ExibirErro(' Os Campos nome e Contactos são Obrigatórios (: ')
                setObrigatorio(true)
             }*/
              const resp = await  fetch('../api/Outros/Ocorrencia',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            Nomeocorrencia, 
                            Dataocorrencia, 
                            Hora, Idprovincia, 
                            Idmunicipio, 
                            Idbairro, Idpessoa,
                             Idrua, idorgao, 
                             IdEsquadra, Idfamilia, 
                             IdTipologia, IdDescricao, 
                             Descricaofactos, Autor, 
                             Relacaovitima, Modusoperandi,
                             idLoca, IdTipodeArma, 
                              Descricadaarma, Esclarecido, Idusuario,causa,Meiosubtraido
                         })

                    })
                    const data = await resp.json()
                    if(data.insertId >0 ){
                    setCodigoOcorrencia(data.insertId)
                    ExibirErro(`Ocorrência inseridos com Sucesso`,15,2)

                       //router.push(`Comando/Ocorrencia/oc=${setCodigoOcorrencia}`)

                    router.push(`Acusado?Ocorre=${data.insertId }`)
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
        uppercase flex items-end content-end justify-end p-2">Registo da Ocorrência </h1>  

    

<div className="grid grid-cols-4 box-border bg-gray-50 shadow-lg rounded-lg p-2">    
<div className=" flex">
<Entrada 
                  label="Data"
                  value={Dataocorrencia} 
                  valorMudou={setDataocorrencia}
                  tipo="date" />
                  <Entrada 
                  label="Hora"
                  value={Hora} 
                  valorMudou={setHora}
                  tipo="time" 
                  />
    
     </div>


<div className={`flex flex-col col-span-2 mr-2`}>
<label className={`text-gray-700 font-semibold`}>Criminalidade por Família </label>
                            <div className='flex'>
                                <select
                                   name={Idfamilia} onChange={(e)=>setIdfamilia(e.target.value)}
                                    className={`border border-gray-400 text-1xl 
                                     focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                                      focus:outline-none 
                                      font-extralight 
                                      bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar a Família Delituosa</option>
                                    {Familia_todos()}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={() => setVisualfamilia(true)}>+</button>
                                    { Visualfamilia ? (
                                                    <Familiaa onFechar={() =>setVisualfamilia(false)}>
                                                       
                                                    </Familiaa>
                                                ) : null}
                            </div>
    
     </div>
<div className="">
<label className={`text-gray-700 font-semibold`}>Tipicidade Criminal</label>
                            <div className='flex'>
                                <select
                                     name={IdTipologia} onChange={(e)=>setIdTipologia(e.target.value)}
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Tipologia criminal</option>
                                    {Idfamilia!=0? Topologia_todos():false}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={()=>setVisualTipicidade(true)}>+</button>
                                    {VisualTipicidade ? (
                                                    <Tipologia onFechar={() =>setVisualTipicidade(false)} delectiva={Idfamilia}>
                                                       
                                                    </Tipologia>
                                                ) : null}
                            </div>
    
    
     </div>
<div className=" p-1">
<label className={`text-gray-700 font-semibold`}>Modalidade Criminal</label>
                            <div className='flex'>
                                <select
                                      name={IdDescricao} onChange={(e)=>setIdDescricao(e.target.value)}
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar modalidade Criminal</option>
                                    {IdTipologia!=0? Descricao_todos():false}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={()=> setVisualDescricao(true)}>+</button>
                    {VisualDescricao ? (
                                    <Modalidade onFechar={() =>setVisualDescricao(false)} Tip={IdTipologia}>
                                       
                                    </Modalidade>
                                ) : null}
                            </div>
     </div>
<div className=" p-1">
<label className={`text-gray-700 font-semibold`}>Nome do Bairro</label>
                            <div className='flex'>
                                <select
                                          name={Idbairro}
                                          onChange={(e) =>
                                              setIdbairro(e.target.value)
                                          }
                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar Nome do Bairro</option>
                                    {Idmunicipio != 0
                                        ? ProvinciaBairro()
                                        : false}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={() => setVisualBairro(true)}
                                >
                                   +
                                </button>
                                {VisualBairro ? (
                                    <Bairro1
                                        onFechar={() => setVisualBairro(false)}
                                    >
                                    </Bairro1>
                                ) : null}
                            </div>
     </div>
<div className=" p-1">
<label className={`text-gray-700 font-semibold`}>Nome do Rua</label>
                            <div className='flex'>
                                <select
                                           name={Idrua}
                                           onChange={(e) => setIdrua(e.target.value)}

                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar Nome da Rua</option>
                                    {Idbairro != 0 ? ProvinciaRua() : false}
                                </select>
                           
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={() => setVisualRua(true)}>+</button>
                                    {VisualRua ? (
                                        <Rua1 onFechar={() => setVisualRua(false)}>
                                           
                                        </Rua1>
                                    ) : null}
                            </div>
    
     </div>
<div className=" p-1">
<label className={`text-gray-700 font-semibold`}>Recinto</label>
                            <div className='flex'>
                                <select
                                           onChange={(e) => setLocapegar(e.target.value)}

                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                   <option value="">Selecionar o Local</option>
                                    <option value="Aberto">Aberto</option>
                                    <option value="Fechado">Fechado</option>
                                </select>
                           
                            </div>    
     </div>

<div className=" pl-1">
<label className={`text-gray-700 font-semibold`}>Local de Ocorrências</label>
                            <div className='flex'>
                                <select
                                        name={idLoca} onChange={(e)=>setIdLocal(e.target.value)}

                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full
                                       max-h-10 py-1.5`}>
                                   <option value="">Selecionar o Local</option>
                                   {LocaisO()}
                                </select>
                           
                            </div>
    
    
     </div>
<div className="-mt-1">
<Entrada 
                  label="Ponto de Referencia"
                  value={Modusoperandi} 
                  valorMudou={setModusoperandi}
                  texto="Ponto de referencia"
                  className={`py-1`}
                   />
    
    
     </div>
     <div className=" -mt-1">
    
<Entrada 
                  label="Móbil"
                  value={causa} 
                  valorMudou={setcausa}
                  texto="Móbil do Crime"
                   />
            </div>     

            <div className="">
<label className={`text-gray-700 font-semibold`}>Objectos usados</label>
                            <div className='flex'>
                                <select
                                           name={Idrua}
                                           onChange={(e) => setIdrua(e.target.value)}

                                    className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar Objecto</option>
                                    {TipodeArma_Todos()}
                                </select>
                                <button
                                    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl" 
                                    onClick={() => setVisualRua(true)}>+</button>
                                    {VisualRua ? (
                                        <Rua1 onFechar={() => setVisualRua(false)}>
                                           
                                        </Rua1>
                                    ) : null}
                            </div>
    
    
    
    
    
    
     </div>
     <div className=" p-1">
<label className={`text-gray-700 font-semibold`}>Praticante</label>
                            <div className='flex'>
                                <select
                                    onChange={(e) => setLocapegar(e.target.value)}

                                    className={`border border-gray-400 text-1xl
                                      focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                                       focus:outline-none  
                                       font-extralight bg-white w-full py-1 p-1
                                       max-h-10`}>
                                    <option value="">Selecionar a Situação</option>
                                    <option value="Conhecido(a)">Conhecido(a)</option>
                                    <option value="Desconhecido(a)">Desconhecido(a)</option>
                                </select>
                           
                            </div>
                            </div>

<div  className={`flex flex-col col-span-4 mr-2 ml-1`}>
<label className={`text-gray-700 font-semibold `}>Descrição dos Factos</label>
                <textarea 
                value={Descricaofactos} 
                onChange={(e)=>setDescricaofactos(e.target.value)} 
                 rows="15" 
                className={`border border-gray-400 text-1xl w-full
                 focus:border-blue-900 focus:ring-1 focus:border-opacity-0
                focus:outline-none font-extralight bg-white flex flex-col text-black
                                      h-52`}
                ></textarea>
</div>
<div  className=" text-white col-span-4 container"> 
             <div className={`flex justify-end`}>
             <Botao onclick={()=>{
                    Salvar()

            }}>Adicionar</Botao>                 
                    <Botao cor="red">Cancelar</Botao>        
                </div>
             </div>
</div>

        </Layoutmunicipal>
    )
}