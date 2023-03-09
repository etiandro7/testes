import { useEffect, useState } from "react";
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
import usuarioData from '../../components/hook/useUsario'
import Municipio from '../Outros/Municipio'
import Usuario_Logado from '../../components/Context/UsuarioAuth'
import Veiculo from '../Outros/Veiculo'
import Arma1 from '../Outros/Arma'
import {Aviso,Certo} from './../../components/icons'
import Bairro1 from '../Outros/Bairro'
import Rua1 from '../Outros/Rua'
import Provincia from '../Outros/Provincia'
import {Add,carro,procurar} from '../../components/icons'
import IntervenienteP from '../Outros/IntervenintePessoa'
import Image from "next/image";
import Layoutmunicipal from '../../components/template/Layoutmunicipal'


export default function Apreensao({onFechar=()=>{},id='modal'})
{

    const DadosGeral = usuarioData()
    const ULogado = Usuario_Logado()
    

    const [confirma, setConfirma] = useState(0)
    const [VisibleVeiculo, setVisibleVeiculo] = useState(false)
    const [VisibleInfcator, setVisibleInfcator] = useState(false)
    const [visivel, setvisivel] = useState(false)
    const [visivel1, setvisivel1] = useState(false)
    const [Visiblemunicipio, setVisiblemunicipio] = useState(false)
    const [VisualBairro, setVisualBairro] = useState(false)
    const [VisualRua, setVisualRua] = useState(false)

    const [IdEsquadra, setIdEsquadra] = useState(ULogado.idesquadra)
    const [Datadaapreensao, setDatadaapreensao] = useState('')
    const [Hora, setHora] = useState('')
    const [Localdaapreensao, setLocaldaapreensao] = useState('')
    const [Descricao, setDescricao] = useState('Descrição de como o Facto Ocorreu')
    const [Motivodaapreensao, setMotivodaapreensao] = useState('')
    const [Fieldepositado, setFieldepositado] = useState('')
    const [Idviatura, setIdviatura] = useState(0)
    const [Idarma, setIdarma] = useState(0)
    const [Tipo, setTipo] = useState('')
    const [TipoVeiculo, setTipoVeiculo] = useState([])
    const [idorgao, setidorgao] = useState(ULogado.idorgao)
    const [Idoperacao, setIdoperacao] = useState(0)

    const [Provincias, setProvincias] = useState([])
    const [Arma, setArma] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])
    const [Rua, setRua] = useState([])
    const [Operacao, setOperacao] = useState([])
    const [Foto, setFoto] = useState('')
    const [Foto1, setFoto1] = useState('')
    const [Efectivo, setEfectivo] = useState('')
  
    const [fotosel, setfotosel] = useState(false)
    const [fotosel1, setfotosel1] = useState(false)
    const [Idprovincia, setIdprovincia] = useState(0)
  
    const [Idmunicipio, setIdmunicipio] = useState(0)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
    const [Outros, setOutros] = useState(0)
    const [erro ,seterro] = useState(null)

  


   function ExibirErro(msg, tempo=15, ida=1){
    seterro(msg)
    setConfirma(ida)

    setTimeout(()=>{seterro(null)
    setConfirma(0)}, tempo*100)
}
    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Operacao`)
        .then(res =>res.json())
        .then(setOperacao)
       },[]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Arma`)
        .then(res =>res.json())
        .then(setArma)
       },[])

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/ViaturaTipo?Tipo=${Tipo}`)
        .then(res =>res.json())
        .then(setTipoVeiculo)
       },[Tipo]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Municipio?Idprovincia=${ULogado.provincia}`)
        .then(res =>res.json())
        .then(setMunicipios)
       },[ULogado.provincia]) 


       useEffect(()=>{
        fetch('http://localhost:3000/api/Outros/Provincia')
        .then(res =>res.json())
        .then(setProvincias)
       },[Idprovincia]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Bairro?Idmunicipio=${ULogado.municipio}`)
        .then(res =>res.json())
        .then(setBairro)
       },[ULogado.municipio]) 
       
       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Rua?Idbairro=${Idbairro}`)
        .then(res =>res.json())
        .then(setRua)
       },[Idbairro]) 


       function carregarFoto(e)
       {
           if(e.target.files && e.target.files[0])
           {
               let reder = new FileReader()
               reder.onload = function(e){
                   setFoto(e.target.result)
                   setfotosel(true)
               }
                reder.readAsDataURL(e.target.files[0])
           }
       }
       
       function ProvinciaTodas(){
        return Provincias?.map(prov =>{return (
            <option key={prov.idprovincia}value={prov.idprovincia}>{prov.nomeprovincia}</option>
        )})}

        
       function TipoVeiculoTodos(){
        return TipoVeiculo?.map(prov =>{return (
            <option key={prov.idviatura}value={prov.idviatura} className="bg-gray-900 text-white font-medium">
                
             Marca {prov.marca} Modelo {prov.modelo} Matricula {prov.matricula} Cor {prov.cor}</option>
            
        )})}

        function ArmaTodos(){
            return Arma?.map(({idarma,Nomearma,Marca,Ndaarma}) =>{return(
                <option key={idarma}value={idarma}>{Marca}-{Nomearma}- Nº: {Ndaarma}</option>
                )})}

        function OperacoesTodas(){
            return Operacao?.map(prov =>{return (
                <option key={prov.idoperacao}value={prov.idoperacao}>{prov.nomeoperacao} -- {prov.orientadoPor}</option>
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


   async  function Salvar() {
        if(Tipo==""){
        ExibirErro('Preencher  os campos OBRIGATÓRIOS! ')
    }
        else{
     const _ap   =await fetch('../api/Outros/Apreensao',
            {
                method: 'POST',
                body: JSON.stringify({ 
                    Tipo,
                    Descricao,Datadaapreensao,
                    Hora,Idprovincia,Idmunicipio,Idbairro,
                    Idrua,idorgao,IdEsquadra,Idoperacao,
                    Idviatura,Idarma,Motivodaapreensao,
                    Fieldepositado,
                    Outros,Localdaapreensao,Foto1,Foto,Efectivo })
            })
            const resposta = await _ap.json()
            if(resposta.insertId > 0 )
            {
            ExibirErro(`Operação realizadaa com Sucesso!`,15,2)
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
        uppercase flex items-end content-end justify-end p-2">
                Registo de Apreensão de Veículo e outros Meios</h1>
            <hr />
            <div className="text-right">
            <Botao  onclick={()=>setVisibleInfcator(true)}> 
                         <span className="flex justify-center shadow-2xl items-center font-light">{Add}Infacrtor</span>
                         </Botao>
                       <Botao  onclick={()=>setVisibleVeiculo(true)}> 
                         <span className="flex justify-center items-center font-extralight">{carro}Veículo</span>
                         </Botao>
                         <Botao  onclick={()=>setvisivel1(true)} > 
                         <span className="flex justify-center items-center font-light">{Aviso}Arma de Fogo</span>
                         </Botao>                         
                     </div>
                     <hr className="mt-2"/>
                         
            <div className={`flex bg-gray-50`}>              
               <div className={`flex mt-2 pl-1 w-full justify-end mr-2`}>
               {!fotosel?(
                           <>
                           <label htmlFor="imagem">
                           <Image src="/logo.png"
                           accept=""
                           alt=""  
                           width={150}
                           height={150}
                           draggable={false} 
                           className={` bg-green-100 shadow-md rounded-lg cursor-pointer w-40 h-40`} />
                                                  
                           </label>
                           <input id="imagem" type="file" className="hidden"
                           onChange={carregarFoto}></input>
                        </>   
                       ):(
                           <>
                           <span className="-right-0 absolute z-10 bg-gray-800 text-white font-bold rounded-full px-1.5 cursor-pointer"
                           onClick={()=>setfotosel(false) 
                           }>X</span>
                        <Image src={Foto} className={`w-40 h-40  bg-green-100 shadow-md rounded-lg`}  alt="" 
                          width={500}
                          height={500} />
                       </>)}
               </div>
           </div>

          
            <div className="grid grid-cols-4 box-border shadow-lg rounded-lg bg-gray-50 ">   
            <div className="-mt-1.5"> 
                  <Entrada 
                  label="D. de Apreensão"
                  value={Datadaapreensao} 
                  valorMudou={setDatadaapreensao}
                  tipo="date" />
               </div>
               <div className={`whitespace-nowrap -mt-1.5`}>
                  <Entrada 
                  label="H.de Apreensao"
                  value={Hora} 
                  valorMudou={setHora}
                  tipo="time" />
               </div>

             <div className={`col-span-2`}>
             <label className={`text-gray-700 font-semibold`}>Meios Apreendido</label>
                            <div className='flex'>
                   <select name={Tipo} onChange={(e)=>setTipo(e.target.value)}
                      className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                      focus:outline-none  font-extralight bg-white w-full py-1 p-1
                                            max-h-10 mr-2`}>
                       <option value=".">Selecionar o Meio</option>
                       <option value="Viatura">Viatura</option>
                       <option value="Motorizada">Motorizada</option>
                       <option value="Arma de Fogo">Arma de Fogo</option>
                       <option value="Diversos Meios">Diversos Meios</option>
                   </select>
               </div>
               </div>

        
      
                 <div className={`flex flex-col mx-2`}>
                 <label className={`text-gray-700 font-semibold `}>Bairro</label>
                 <div className='flex'>
                   
                        <select name={Idbairro} onChange={(e)=>setIdbairro(e.target.value)}
                            className={`border border-gray-400 text-1xl 
                            focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                             focus:outline-none 
                             font-extralight 
                             bg-white w-full py-1 p-1
                              max-h-10`}>
                                 <option value=".">Selecionar a Bairro </option>
                            {ULogado.provincia!=0? ProvinciaBairro():false}
                        </select>
                       
          
                    <button    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl"  onClick={()=>setVisualBairro(true)} >+</button>
                 {VisualBairro? <Bairro1 onFechar={()=>setVisualBairro(false)}> </Bairro1>:null}
                 </div>
                 </div>
                 <div className={`flex flex-col mx-3`}>
                 <label className={`text-gray-700 font-semibold`}>Rua </label>
                 <div className='flex'>
                        <select name={Idrua} onChange={(e)=>setIdrua(e.target.value)}
                              className={`border border-gray-400 text-1xl 
                              focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                               focus:outline-none 
                               font-extralight 
                               bg-white w-full py-1 p-1
                                max-h-10`}>
                             <option value=".">Selecionar a Rua </option>
                            {Idbairro!=0? ProvinciaRua():false}
                        </select>
                  
                    <button className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl"  onClick={()=>setVisualRua(true)} >+</button>
                  {VisualRua? <Rua1 onFechar={()=>setVisualRua(false)}> </Rua1>:null}
                 </div>
                 </div>
    <div className={`-mt-1`}>
       
       <Entrada 
       label="Local de Apreensão"
       value={Localdaapreensao}
       valorMudou={setLocaldaapreensao}
       texto="Local de Apreensão"
        />

 </div>
 <div className={`-mt-1`}>
       
 <Entrada 
                  label="Motivo de Apreensão"
                  value={Motivodaapreensao}
                  valorMudou={setMotivodaapreensao} 
                  texto="Motivo de Apreensão"
                   />

 </div>
 
 <div className={`flex flex-col mx-2`}>
                 <label className={`text-gray-700 font-semibold`}>Tipo de Operacão</label>
                 <div className='flex'>
                   
                 <select name={Idoperacao} onChange={(e)=>setIdoperacao(e.target.value)}
                            className={`border border-gray-400 text-1xl 
                            focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                             focus:outline-none 
                             font-extralight 
                             bg-white w-full py-1 p-1
                              max-h-10`}>
                                 <option value=".">Selecionar a Operação </option>
                                 {OperacoesTodas()}
                        </select>
                       
          
                    <button    className="text-yellow-400  w-8 h-8 ring-1  bg-gray-700 text-2xl"  onClick={()=>setVisualBairro(true)} >+</button>
                    {VisualRua? <Rua1 onFechar={()=>setVisualRua(false)}> </Rua1>:null}
                 </div>
                 </div>
                
        
            <div className={`flex flex-col col-span-3 mx-3`}>
                {Tipo ==="Diversos Meios"?(<>
                    <div className={`flex flex-col w-full`}>
                  <Entrada 
                  label="Dados do Objectos"
                  value={Outros} 
                  valorMudou={setOutros}
                   />

               </div>
                </>):(<>
                    <label className={`text-gray-700 font-semibold`}>Dado da {Tipo}</label>
                <select name={Tipo =="Arma de Fogo"?Idarma:Idviatura} 
                onChange={Tipo =="Arma de Fogo"?
                (e)=>setIdarma(e.target.value):
                (e)=>setIdviatura(e.target.value)}
                className={`border border-gray-400 text-1xl 
                focus:border-blue-900 focus:ring-2 focus:border-opacity-0
                 focus:outline-none 
                 font-extralight 
                 bg-white w-full py-1 p-1
                  max-h-10`}>
                   <option value="." className="bg-indigo-900 text-white font-extrabold">Selecionar a {Tipo} </option>
                   {Tipo =="Arma de Fogo"? (<>
                            {ArmaTodos()}
                            </>) :TipoVeiculoTodos()}
                </select>
                
                </>)}

            </div>
       
               <div className={``}>
                  <Entrada 
                  label="Fiel depositário"
                  value={Fieldepositado}
                  valorMudou={setFieldepositado}
                  texto="Fiel depositário"
                   />
               </div>
        
         <div className={`col-span-3`}>
                  <Entrada 
                  label="Atuante"
                  value={Efectivo}
                  valorMudou={setEfectivo}
                  texto="Patente e nome do Agente "
                   />
               </div>

               <div  className={`flex flex-col col-span-4 mr-2 ml-1`}>
<label className={`text-gray-700 font-semibold `}>Descrição dos Factos</label>
                <textarea 
                
                value={Descricao} onChange={(e)=>setDescricao(e.target.value)}
                 rows="10" 
                className={`border border-gray-400 text-1xl w-full p-2
                 focus:border-blue-900 focus:ring-1 focus:border-opacity-0
                focus:outline-none font-extralight bg-white flex flex-col text-black
                                      h-52`}
                ></textarea>
</div>
<div  className=" text-white col-span-4 container"> 
             <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red" onclick={onFechar}>Cancelar</Botao>
                </div>
                </div>
            </div>
            

       
            {visivel1 ? <Arma1 Oriem="Apreendida" onFechar={()=>setvisivel1(false)} > </Arma1>:null}
            {VisibleVeiculo ? <Veiculo onFechar={()=>setVisibleVeiculo(false)} Origem="Apreendido(a)"> </Veiculo>:null}                       
            {VisibleInfcator ? <IntervenienteP tipopessoa="Infractor" onFechar={()=>setVisibleInfcator(false)} > </IntervenienteP>:null}
                        
         </Layoutmunicipal>
        
    )
}