import { useState,useEffect } from "react";
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
import {Certo,Aviso} from '../../components/icons'
import usuarioData from '../../components/hook/useUsario'
import Usuario_Logado from '../../components/Context/UsuarioAuth'
import Interveniente from '../Outros/Interveniente'
import Link from 'next/link'

import Layoutmunicipal from '../../components/template/Layoutmunicipal'


export default function Acidente()
{
    const ULogado = Usuario_Logado()

    const [cor, serCor] =useState('gray')
    const DadosGeral = usuarioData()
    const [Codigoacidente,setCodigoacidente]= useState(0)

    const [Dataacidente,setDataacidente]= useState('')
    const [InterAcidente,setInterAcidente]= useState(false)
    const [Latitude,setLatitude]= useState('000000')
    const [Hora,setHora]= useState('')
    const [Tipodeacidente,setTipodeacidente]= useState('')

    const [via,setvia]= useState('')
    const [confirma,setConfirma]= useState('')
    const [Longitude,setLongitude]= useState('0000000')

    const [Provincias, setProvincias] = useState([])
   

    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])

    const [Local, setLocal] = useState('')
    const [Rua, setRua] = useState([])

    const [v, setV] =useState(false)
    
  
    const [Idesquadra, setIdesquadra] = useState(ULogado.idesquadra)
 
    const [Idprovincia, setIdprovincia] = useState(ULogado.provincia)
    const [Idmunicipio, setIdmunicipio] = useState(ULogado.municipio)
    const [Idusuario, setIdusuario] = useState(ULogado.idusuario)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)

    const [Idorgao, setIdorgao] = useState(ULogado.idorgao)
  
    const [Descricafactos, setDescricafactos] = useState('Descrição do Aciednte')

    const [Causa, setCausa] = useState('')
    const [Vita, setVita] = useState([])
    const [erro ,seterro] = useState(null)

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

      async  function Salvar() {
if(Dataacidente=="" || Idbairro ==0 || Causa=="" || Tipodeacidente=="M"){
    ExibirErro('Preencher Todos os Campos Obrigatório! ',20,1)
}else{
       const resul = await fetch('../api/Outros/Acidentes',
            {
                method: 'POST',
                body: JSON.stringify({
                    Tipodeacidente,
                     Dataacidente, Hora,
                      Idprovincia, Idmunicipio, 
                      Idbairro, Idrua,
                      Idorgao,
                       Idesquadra, via, 
                       Descricafactos, Local, 
                       Latitude, Longitude, 
                       Causa
                 })
            })
            const data = await resul.json()
            if(data.insertId >0 ){
                
                setCodigoacidente(data.insertId)
                //console.log('Cidogo ', data.insertId)
           ExibirErro('Operação Realizada com Sucesso! ',15,2)
            }
            else{
                ExibirErro('Operação não foi realizda com Sucesso! ',15,1)
            }
        }
    }

    function ExibirErro(msg, tempo=15, ida=1){
        seterro(msg)
        setConfirma(ida)
    
        setTimeout(()=>{seterro(null)
        setConfirma(0)}, tempo*100)
    }

    function ProvinciaTodas(){
                return Provincias?.map(prov =>{return (
                    <option key={prov.idprovincia}value={prov.idprovincia}>{prov.nomeprovincia}</option>
                )})}
        
    function ProvinciaBairro(){
                    return Bairro?.map(prov =>{return (
                        <option key={prov.idbairro}value={prov.idbairro}>{prov.nomebairro}</option>
                    )})}
    function ProvinciaRua()
    {
    return Rua?.map(prov =>
        {
            return (
                    <option key={prov.idrua}value={prov.idrua}>{prov.nomerua}</option>
                    )
                    })
    }
        
    function ProvinciaMunicipio(){
                    return Municipios?.map(prov =>{return (
                        <option key={prov.Idmunicipio}value={prov.Idmunicipio}>{prov.nomemunicipio}</option>
                    )})}
    return (

        <Layoutmunicipal titulo={ULogado.sigla} subtitulo={ULogado.Nomeorgao}> 
         {confirma==1 ? 
            <div className='flex justify-end items-end content-end'>           
               <span className='w-auto bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-96 top-0
                rounded-sm flex flex-row  gap-2'> {Aviso} {erro} </span>
               </div>
               :null }
               {confirma==2 ? 
           <div className='flex justify-end items-end content-end'>
              <span className='w-auto bg-green-600 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl top-0
               rounded-sm flex flex-row  gap-2'> {Certo} {erro} </span>
              </div>
              :null         
              }
        <h1 className="shadow bg-gray-700 p-1 font-semibold text-2xl text-white 
        uppercase flex items-end content-end justify-end">Registo de Acidente</h1>
          <div className="grid grid-cols-3   box-border bg-gray-50 shadow-md">    
             <div className="flex"> 
                  <Entrada 
                  label="Data"
                  value={Dataacidente} 
                  valorMudou={setDataacidente}
                  tipo="date" className={'w-32'}/>
                  <Entrada 
                  label="Hora"
                  value={Hora} 
                  valorMudou={setHora}
                  tipo="time" className={'w-32'} />  
                
             </div>
             <div  className="col-span-2"> 
             <div  className="text-white flex flex-col pr-2 pl-2">
             
             <label className={`text-gray-700 font-semibold`}>
                            Natureza do Acidente</label>
                <select name={Tipodeacidente} onChange={(e)=>setTipodeacidente(e.target.value)}
                    className={` border border-gray-400 text-1xl  font-extralight bg-white text-black
                    focus:border-gray-400 focus:ring-1 focus:border-opacity-0 w-full
                   focus:outline-none py-1.5 `}>
                          <option value="M">Selecionar a Natureza</option>
                    <option value="Colisão entre Veiculos">Colisão entre Veiculos </option>
                    <option value="Colisão entre Motociclos">Colisão entre Motociclos</option>
                    <option value="Atropelamento">Atropelamento</option>
                    <option value="Capotamento">Capotamento</option>
                    <option value="Capotamento">Outros</option>

                </select>
             </div>
            </div>
             <div  className=" text-white col-span-2 pr-2 pl-2">

             <div className={`flex flex-col`}>
                        <label className={`text-gray-700 font-semibold`}>Bairro</label>
                 <div className={`flex `}>
                        <select name={Idbairro} onChange={(e)=>setIdbairro(e.target.value)}
                            className={` border border-gray-400 text-1xl px-1  font-extralight bg-white text-black
                            focus:border-gray-400 focus:ring-1 focus:border-opacity-0 w-full
                           focus:outline-none py-1`}>
                                 <option value=".">Selecionar a Bairro </option>
                            {Idmunicipio!=0? ProvinciaBairro():false}
                        </select>
                                          
                    <button className='text-gray-100 ring-0 rounded-sm bg-gray-700 text-1xl h-8 w-8'>+</button>
                 </div>
                 </div>
             </div>

             <div  className=" text-white">
             <div className={`flex flex-col pr-2 pl-2`}>
                        <label className={`text-gray-700 font-semibold`}>Rua</label>
                 <div className={`flex`}>
                        <select name={Idrua} onChange={(e)=>setIdrua(e.target.value)}
                            className={` border border-gray-400 text-1xl  font-extralight bg-white text-black
                            focus:border-gray-400 focus:ring-1 focus:border-opacity-0 w-full
                           focus:outline-none py-1`}>
                              <option value=".">Selecionar a Rua </option>
                            {Idbairro!=0? ProvinciaRua():false}
                        </select>
                                          
                    <button className='text-gray-100 ring-0 rounded-sm bg-gray-700 text-1xl h-8 w-8'>+</button>
                 </div>
                 </div>
             </div>
           
             <div  className="">
             <Entrada 
                  label="Nome da Estrada/Via"
                  value={via} 
                  valorMudou={setvia}
                  texto="Nome da Estrada/ Via"
                   />

             </div>
             <div  className="">

             <Entrada 
                  label="Locais de Proximidade"
                  value={Local} 
                  valorMudou={setLocal}
                  texto="Local de Proximidade"
                   />
             </div>
          
             <div  className=" "> 
             <Entrada 
                  label="Causa do Acidente"
                  value={Causa}
                  valorMudou={setCausa}
                  texto="Causa do Acidente"
                   /></div>
             <div  className=" text-white col-span-3 container box-border pr-2 pl-2">

             <label className={`text-gray-700 font-semibold `}>Descrição dos Factos</label>
                <textarea 
                value={Descricafactos} 
                onChange={(e)=>setDescricafactos(e.target.value)} 
                 rows="15" 
                className={`border border-gray-400 text-1xl w-full
                 focus:border-blue-900 focus:ring-1 focus:border-opacity-0
                focus:outline-none font-extralight bg-white flex flex-col text-black
                                      h-52`}
                ></textarea>
             </div>
             <div  className=" text-white col-span-3 container"> 
             <div className={`flex justify-end`}>
                    <Botao onclick={()=>{Salvar()
                    setInterAcidente(true)}}>Adicionar</Botao>
                    <Botao cor="red"> <span><Link href="/Comando">
            <a>Voltar</a></Link>
        </span></Botao>
                </div>
             </div>
          </div>
      
        
        </Layoutmunicipal>
    )
}