import { useEffect, useState } from 'react'
import {Aviso,emojierro,IconUser,Certo} from './../../components/icons'
import Entrada from '../../components/formcomp/Entrada'
import Marca from '../Outros/Marca'
import Modelo from '../Outros/Modelo'
import Botao from '../../components/formcomp/Botaosalvar'
import Image from 'next/image'



export default function Veiculo({Origem,onFechar=()=>{},id='modal'}) {

const destino = Origem

    const [tipoviatura, settipoviatura] = useState('')
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
   // const [destino,setdestino ] = useState.Origem)

    const [VisibleMarca, setVisibleMarca]= useState(false)
    const [VisibleModelo, setVisibleModelo]= useState(false)

    const eventoclicar =(e)=>{
        if(e.target.id ===id)
         onFechar()

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
                    Proprietario
             })
             
            })
            const dad = await resul.json()
            if(dad.insertId > 0 ){
                // setcodigoVitima(data.insertId)
             ExibirErro(`Operação Realizada com Sucesso!`,15,2)
             }
           
    }

    return (
               
        <div id={id} className='w-screen h-screen absolute top-0 left-0 flex  
        justify-center items-center 
        bg-black z-10'
         onClick={eventoclicar}>
         
       <div className="h-auto w-full  p-0  m-0 bg-white ">
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
               <h1 className={`bg-white h-10 py-2 font-extrabold 
               pl-5 shadow-inner text-blue-700 border-l-8 border-yellow-500
               align-middle relative
               `}>
                    
                    REGISTO DE VEÍCULO
                    <span className="right-2 absolute z-10
                     bg-indigo-900 text-white 
                    font-bold rounded-full
                     px-1.5 cursor-pointer"
                          onClick={onFechar}>X</span>
                    </h1>
                <hr />


                <div className={`flex flex-row w-4/4 justify-center items-center `}>
               
                    <div className={`flex relative flex-row flex-wrap m-7  w-40 
                     bg-gray-50 shadow-xl rounded-lg h-40  border-2 border-black border-dashed`}>

                       {!fotosel?(
                           <>
                           <label htmlFor="imagem">
                           <Image src="/logo.png"
                           accept=""
                           alt=""  
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
                        <Image src={foto} className={`w-full h-full  bg-green-100 shadow-md rounded-lg`} alt="Sem Foto" />
                       </>)}
                   
                    </div>
                </div>
               
                    <div className={`flex w-4/4`}>
                 
                    <div className={`flex flex-col mx-1 w-1/3`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Tipo de Veiculo</label>
                        <select name={tipoviatura} onChange={(e)=>{settipoviatura(e.target.value)
                         }}
                            className={` border    
                            bg-white mx-2
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}>  
                                 <option value=".">Tipo de Veículo</option>
                            <option value="Viatura">Viatura</option>
                            <option value="Motorizada">Motorizada</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/4`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Marca</label>
                        <select name={idmarca} onChange={(e)=>setidmarca(e.target.value)}
                            className={` border    
                            bg-white -mx-1
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}>  
                            <option>Selecionar a Marca</option>
                          {tipoviatura !=''? Marcaviatura():false}
                        </select>
                    </div>
                    <div className={`flex flex-col py-0 my-0 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 mx-1 rounded-sm  text-white' onClick={()=>setVisibleMarca(true)}>...</button>
                   {VisibleMarca? <Marca onFechar={()=>setVisibleMarca(false)
                }> </Marca>:null}
                 </div>

                 <div className={`flex flex-col py-0 my-0 w-4/12`}>
                    <label className={`text-gray-700 font-semibold  mx-3`}>Modelo</label>
                        <select name={idmodelo} onChange={(e)=>setidmodelo(e.target.value)}
                            className={` border    
                            bg-white mx-1
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 max-h-10`}>  
                            <option>Selecionar o Modelo</option>
                             {idmarca!=0 ? ModeloViatura():false}
                        </select>

                    </div>
                    <div className={`flex flex-col py-0 my-0 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-1 rounded-sm  text-white' onClick={()=>setVisibleModelo(true)}>...</button>
                  {VisibleModelo? <Modelo onFechar={()=>setVisibleModelo(false)}> </Modelo>:null}
                 </div>
                </div>
                <div className={`flex`}>

                    <div className={`flex flex-col w-1/4 mx-1`}>
                        <Entrada label="Matricula"
                            valor={matricula}
                            valorMudou={setmatricula}

                        />
                        </div>
                        <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Nº do motor"
                            valor={nmotor}
                            valorMudou={setnmotor}

                        />
                        </div>
                        <div className={`flex flex-col w-full`}>
                        <Entrada label="Nº do Chassi"
                            valor={nchassi}
                            valorMudou={setnchassi}

                        />
                        </div>
                   

                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/4 mx-1`}>
               
                <Entrada label="Cor"
                            valor={cor}
                            valorMudou={setcor}
                           
                        />
                    </div>
                    <div className={`flex flex-col w-1/5`}>
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
                    </div>
                    <div className={`flex`}>
                    <div className={`flex flex-col w-screen mr-3 mx-3`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Dados do Infactor</label>
                        <select name={Proprietario} onChange={(e)=>setproprietario(e.target.value)}
                            className={` border    
                            bg-white 
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1.5 max-h-10`}>  
                            <option>Selecionar o Infractor</option>
                          {Propritario()}
                        </select>
                    </div>
                    </div>
                  
              
               
                
                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red" onclick={onFechar}>Cancelar</Botao>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}