import { useEffect, useState } from 'react'
import {Aviso,emojierro,IconUser,Certo} from '../../components/icons'
import Entrada from '../../components/formcomp/Entrada'
import Marca from '../Outros/Marca'
import Modelo from '../Outros/Modelo'
import Botao from '../../components/formcomp/Botaosalvar'
import Image from 'next/image'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'

import Usuario_Logado from '../../components/Context/UsuarioAuth'




export default function Meiossubtraido() {


const ULogado = Usuario_Logado()

    const [tipoviatura, settipoviatura] = useState('')
    const [dataop, setdataop] = useState('')
    const [idmarca, setidmarca] = useState(0)
    const [Proprietario, setproprietario] = useState(0)
    const [marca, setmarca] = useState([])
    const [modelo, setmodelo] = useState([])
    const [ListarOrgao, setListarOrgao] = useState([])
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
    fetch(`http://localhost:3000/api/Outros/Orgao`)
    .then(res =>res.json())
    .then(setListarOrgao)
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



function Orgao()
{
    return ListarOrgao?.map(orgao =>{
        return (
        <option key={orgao.idorgao}value={orgao.idorgao}>{orgao.sigla} - {orgao.Nomeorgao}</option>
              )
            }
            )
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
                    
                  REGISTO DE ATRIBUIÇÃO DE MEIOS 
                   
                    </h1>

                    <hr />
                    <Entrada 
                    texto='Procurar por Matricula'
                    />
                    <hr />
                    
                  
                
               
                <div className="grid grid-cols-4 box-border bg-gray-50 gap-1 shadow-lg rounded-lg pl-1">  
                 
                <div className={`flex flex-col col-span-1 mr-2 mx-2`}>
                            <label className={`text-gray-700 font-semibold uppercase`}>Selecionar o meio</label>
                        
                            <select
                        name={tipoviatura} onChange={(e)=>{settipoviatura(e.target.value)
                         }}
                         className={`border border-gray-400 text-1xl  focus:border-blue-900
                         focus:ring-2 focus:border-opacity-0
     focus:outline-none 
      font-extralight bg-white w-full py-1 p-2
                           max-h-10 uppercase`}>
                                 <option value=".">Selevionar o Meio</option>
                            <option value="Viatura">Viatura</option>
                            <option value="Motorizada">Motorizada</option>
                        </select>
                    </div>


                    <div className={`flex flex-col w-full col-span-3`}>
                                <label className={`text-gray-700 font-semibold uppercase`}>ESCOLHER A {tipoviatura}</label>
                                <div className='flex'>
                                <select
                                 name={idmarca} onChange={(e)=>setidmarca(e.target.value)}
                                 className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 
                                 focus:border-opacity-0
                                 focus:outline-none
                                 text-white bg-gray-800 font-semibold
                                   max-h-10 w-full p-1 uppercase mr-2`}> 
                            <option>ESCOLHER A {tipoviatura}</option>
                          {tipoviatura !=''? Marcaviatura():false}
                        </select>
                    
                  
              
                </div>
                 </div>
               

                 <div className={`flex flex-col col-span-3 w-full mx-2`}>
                    <label className={`text-gray-700 font-semibold uppercase`}>Selecionar o Órgão</label>
                    <div className='flex'>
                                <select
                        name={idmodelo} 
                        onChange={(e)=>setidmodelo(e.target.value)}
                        className={`border border-gray-400 text-1xl  focus:border-blue-900 focus:ring-2 
                        focus:border-opacity-0 p-1
                        focus:outline-none
                        font-semibold bg-gray-800 text-white 
                          max-h-10 w-full uppercase mr-4`}> 

                            <option>Selecionar o Modelo</option>
                             {Orgao()}
                        </select>
          
                 </div>
                </div>
                <div className={`flex flex-col col-span-1 mr-2 mx-2`}>
                            <label className={`text-gray-700 font-semibold uppercase`}>Selecionar o meio</label>
                        
                            <select
                        name={tipoviatura} onChange={(e)=>{settipoviatura(e.target.value)
                         }}
                         className={`border border-gray-400 text-1xl  focus:border-blue-900
                         focus:ring-2 focus:border-opacity-0
     focus:outline-none 
      font-extralight bg-white w-full py-1 p-2
                           max-h-10 uppercase`}>
                                 <option value=".">Selevionar Estado</option>
                            <option value="Viatura">Viatura</option>
                            <option value="Motorizada">Motorizada</option>
                        </select>
                    </div>

                    <div className={`w-full -mt-1 col-span-3`}>
                        <Entrada label="Observação "
                            valor={matricula}
                            valorMudou={setmatricula}
                            texto="Observação"

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