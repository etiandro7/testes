import { useEffect, useState } from 'react'
import {Aviso,emojierro,IconUser,Certo} from './../../components/icons'
import Entrada from '../../components/formcomp/Entrada'
import Marca from '../Outros/Marca'
import Modelo from '../Outros/Modelo'
import Botao from '../../components/formcomp/Botaosalvar'
import Image from 'next/image'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'

import Usuario_Logado from '../../components/Context/UsuarioAuth'




export default function Veiculo() {


const ULogado = Usuario_Logado()

    const [tipoviatura, settipoviatura] = useState('')
    const [dataop, setdataop] = useState('')
    const [idmarca, setidmarca] = useState(0)
    const [Proprietario, setproprietario] = useState(0)
    const [marca, setmarca] = useState([])
    const [modelo, setmodelo] = useState([])
    const [ListarInfractores, setListarInfractores] = useState([])
    const [idmodelo, setidmodelo] = useState('')
    const [confirma, setConfirma] = useState(0)
    const [matricula, setmatricula] = useState('')
    const [foto, setfoto] = useState('')
    const [fotosel, setfotosel] = useState(false)
    const [nmotor, setnmotor] = useState('')
    const [cor, setcor] = useState('')
    const [anofabrico, setanofabrico] = useState(0)
    const [cilindragem, setcilindragem] = useState('')
    const [nchassi, setnchassi] = useState('')
    const [erro ,seterro] = useState(null)
    const [destino,setdestino ] = useState('Polícia Nacional')
    const [VisibleMarca, setVisibleMarca]= useState(false)
    const [VisibleModelo, setVisibleModelo]= useState(false)
    const [Atribuicao, setAtribuicao]= useState('')
   

    const eventoclicar =(e)=>{
        if(e.target.id ===id);
       //  onFechar()
    }

    function ExibirErro(msg, tempo=15, ida=1){
        seterro(msg)
        setConfirma(ida)
    
        setTimeout(()=>{seterro(null)
        setConfirma(0)}, tempo*100)
    }
    

  
useEffect(()=>{
    fetch(`http://localhost:3000/api/Outros/Marca?tipoviatura=${tipoviatura}`)
    .then(res =>res.json())
    .then(setmarca)
   },[tipoviatura]) 

useEffect(()=>{
    fetch(`http://localhost:3000/api/Outros/LstInfractor?Tipodepessoa=Infractor`)
    .then(res =>res.json())
    .then(setListarInfractores)
   },[]) 

   useEffect(()=>{
    fetch(`http://localhost:3000/api/Outros/Modelo?idmarca=${idmarca}`)
    .then(res =>res.json())
    .then(setmodelo)
   },[idmarca]) 


function ModeloViatura()
{
    return modelo?.map(prov =>{return (
        <option key={prov.idmodelo}value={prov.idmodelo}> {prov.modelo}</option>
    
    )})
}
function Propritario()
{
    return ListarInfractores?.map(proprieta =>{return (
        <option key={proprieta.idpessoa}value={proprieta.idpessoa}>Nome : {proprieta.Nomepessoa} Apelido {proprieta.Apelido} Data de Nascimento: {proprieta.nascimento}
        </option>
    
    )})
}

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

function Marcaviatura()
{
    return marca?.map(prov =>{
        return (
        <option key={prov.idmarca}value={prov.idmarca}>{prov.Tipo} - {prov.marca}</option>
              )
            }
            )
}

 async    function Salvar() {
   const resul = await     fetch('http://localhost:3000/api/Outros/Viatura',
            {
                method: 'POST',
                body: JSON.stringify({
                     tipoviatura,
                     idmarca,
                     idmodelo,
                     matricula,
                     foto,
                     nchassi,
                    nmotor,
                    cor,
                    anofabrico,
                    cilindragem,
                    destino,
                    Proprietario,
                    Atribuicao,
                    dataop
             })
             
            })
            const dad = await resul.json()
            if(dad.insertId > 0 ){
                // setcodigoVitima(data.insertId)
             ExibirErro(`Operação Realizada com Sucesso!`,15,2)
             }
           
    }

    return (
               
        <Layoutmunicipal titulo={ULogado.sigla} subtitulo={ULogado.Nomeorgao}> 
         
       
       <div className={`container mx-auto shadow-lg rounded-md flex opacity-100 w-full`}>
           <div className="w-full shadow-md">
           {confirma==1 ? 
            <div className='flex justify-end items-end content-end'>
               
               <span className='w-auto bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-auto top-0
                rounded-sm flex flex-row  gap-2'> {Aviso} {erro} </span>
               </div>
               :null }
               {confirma==2 ? 
           <div className='flex justify-end items-end content-end'>
              <span className=' w-auto bg-green-600 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl top-0
               rounded-sm flex flex-row  gap-2'> {Certo} {erro} </span>
              </div>
              :null         
              }
           <h1 className="shadow bg-gray-700 font-semibold text-1xl text-white 
        uppercase flex items-end content-end justify-end p-2">
                    
                    REGISTO DOS VEÍCULO DO COMANDO PROVINCIAL
                   
                    </h1>
                <hr />


                <div className={`flex flex-row w-4/4 justify-end items-end `}>
               
                    <div className={`flex relative flex-row flex-wrap m-7  w-40 
                     bg-gray-50 shadow-xl rounded-lg h-40  border-2 border-black border-dashed`}>

                       {!fotosel?(
                           <>
                           <label htmlFor="imagem">
                           <Image src="/logo.png"
                           accept=""
                           alt="" 
                           width={155}
                           height={155} 
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
                        <Image src={foto} className={`w-full h-full  bg-green-100 shadow-md rounded-lg`} alt="Sem Foto"  
                        height={50} width={50}
                        />
                       </>)}
                   
                    </div>
                </div>
               
                <div className="grid grid-cols-4 box-border bg-gray-50 gap-1 shadow-lg rounded-lg pl-1">  
                 
                <div className={`flex flex-col col-span-2 mr-2 mx-2`}>
                            <label className={`text-gray-700 font-semibold`}>Selecionar o Tipo de Veiculos</label>
                        
                            <select
                        name={tipoviatura} onChange={(e)=>{settipoviatura(e.target.value)
                         }}
                         className={`border border-gray-400 text-1xl  focus:border-blue-900
                         focus:ring-2 focus:border-opacity-0
     focus:outline-none 
      font-extralight bg-white w-full py-1 p-2
                           max-h-10`}>
                                 <option value=".">Tipo de Veículo</option>
                            <option value="Viatura">Viatura</option>
                            <option value="Motorizada">Motorizada</option>
                        </select>
                    </div>


                    <div className={`flex flex-col w-full col-span-2`}>
                                <label className={`text-gray-700 font-semibold `}>Marca da {tipoviatura}</label>
                                <div className='flex'>
                                <select
                                 name={idmarca} onChange={(e)=>setidmarca(e.target.value)}
                                 className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 
                                 focus:border-opacity-0
                                 focus:outline-none
                                 font-extralight bg-white 
                                   max-h-10 w-full p-1`}> 
                            <option>Selecionar a Marca</option>
                          {tipoviatura !=''? Marcaviatura():false}
                        </select>
                    
                  
                    <button    className="text-yellow-400  w-8 h-8  ring-1  bg-gray-700 text-2xl mr-2" onClick={()=>setVisibleMarca(true)}>...</button>
                   {VisibleMarca? <Marca
                   /* onFechar={()=>setVisibleMarca(false)
                }*/> </Marca>:null}
                </div>
                 </div>

                 <div className={`flex flex-col w-full col-span-2 mx-2`}>
                    <label className={`text-gray-700 font-semibold `}>Modelo da {tipoviatura}</label>
                    <div className='flex'>
                                <select
                        name={idmodelo} 
                        onChange={(e)=>setidmodelo(e.target.value)}
                        className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 
                        focus:border-opacity-0 p-1
                        focus:outline-none
                        font-extralight bg-white 
                          max-h-10 w-full`}> 

                            <option>Selecionar o Modelo</option>
                             {idmarca!=0 ? ModeloViatura():false}
                        </select>
                    <button className="text-yellow-400  w-8 h-8  ring-1  bg-gray-700 text-2xl mr-2" 
                    onClick={()=>setVisibleModelo(true)}>...</button>
                  {VisibleModelo? <Modelo /*onFechar={()=>setVisibleModelo(false)}*/> </Modelo>:null}
                 </div>
                </div>

                    <div className={`w-full -mt-1`}>
                        <Entrada label="Matricula"
                            valor={matricula}
                            valorMudou={setmatricula}

                        />
                        </div>
                        <div className={`w-full -mt-1`}>
                        <Entrada label="Nº do motor"
                            valor={nmotor}
                            valorMudou={setnmotor}

                        />
                        </div>
                        <div className={`w-full -mt-1`}>
                        <Entrada label="Nº do Chassi"
                            valor={nchassi}
                            valorMudou={setnchassi}
                        />
                        </div>
                   
                        <div className={`w-full`}>
               
               <Entrada label="Cor"
                           valor={cor}
                           valorMudou={setcor}
                          
                       />
                   </div>
                   <div className={`w-full`}>
                       <Entrada label="Ano de Fábrico"
                           valor={anofabrico}
                           valorMudou={setanofabrico}
                           tipo="number"
                       />
                   </div>
                   <div className={`flex flex-col w-full`}>
                       <Entrada label="Cilindragem"
                           valor={cilindragem}
                           valorMudou={setcilindragem}
                         
                       />
                       
                   </div>
                   <div className={`flex flex-col col-span-3 w-full`}>
                       <Entrada label="Atribuido por..."
                           valor={Atribuicao}
                           valorMudou={setAtribuicao}
                           texto="Atribuido por..."
                         
                       />
                       
                   </div>
                   <div className={`flex flex-col col-span-1 w-full`}>
                       <Entrada label="Data de Atribuição"
                           valor={dataop}
                           valorMudou={setdataop}
                         tipo="date"
                       />
                       
                   </div>
                   </div>
         
               
           
                    
              
                  
              
               
                
                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red" >Cancelar</Botao>
                </div>
            </div>
            </div>
          
          
        </Layoutmunicipal>
     
    )
}