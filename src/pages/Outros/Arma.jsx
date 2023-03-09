import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import {Aviso,emojierro,Certo} from './../../components/icons'




export default function Arma({Oriem,onFechar=()=>{},id='modal'})
{
    const [confirma, setConfirma] = useState(0)
   const [nomearma,setnomearma] =useState('') 
   const[calibre,setCalibre]= useState('')
   const[narma,setarma]=useState('')
   const [marca,setmarca] = useState('')
   const[foto , setfoto] = useState('')
   const [Proprietario, setproprietario] = useState(0)
   const [ListarInfractores, setListarInfractores] = useState([])
   const[Origem , setOrigem] = useState(Oriem)
   
   const [erro ,seterro] = useState(null)


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
    fetch(`http://localhost:3000/api/Outros/LstInfractor?Tipodepessoa=Infractor`)
    .then(res =>res.json())
    .then(setListarInfractores)
   },[]) 

   async function Salvar()
   {

     const resp = await fetch('../api/Outros/Arma', {
        method: 'POST',
        body: JSON.stringify(
            { nomearma,
                 calibre,
                 narma,
                 marca,
                 foto,Origem, Proprietario
             })
    })
    const dad = await resp.json()
    if(dad.insertId > 0 ){
        // setcodigoVitima(data.insertId)
     ExibirErro(`Operação Realizada com Sucesso!`,15,2)
     }
   }

   function Propritario()
{
    return ListarInfractores?.map(proprieta =>{return (
        <option key={proprieta.idpessoa}value={proprieta.idpessoa}>Nome : {proprieta.Nomepessoa} Apelido {proprieta.Apelido} Data de Nascimento: {proprieta.nascimento}
        </option>
    
    )})
}





    return(
               
        <div id={id} className='w-screen h-screen absolute top-0 left-0 flex  
        justify-center items-center 
        bg-black z-10'
         onClick={eventoclicar}>
         
       <div className="h-auto w-full  p-0  m-0 bg-white ">
       <div className={`container mx-auto shadow-lg rounded-md flex content-center justify-center opacity-100 w-full`}>
           <div className="w-4/5 shadow-md">
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
               pl-2 shadow-inner text-blue-700 border-l-8 border-yellow-500
               align-middle relative
               `}>
                    REGISTO DE ARMAS DE FOGO
                    
                    <span className="right-0 absolute z-10 bg-indigo-900 text-white 
                    font-bold rounded-full px-1.5 cursor-pointer"
                          onClick={onFechar}>X</span>
                    </h1>
                   
                <hr />

                <div className={`flex`}>

                <div className={`flex flex-col w-1/5`}>
                <label className={`text-gray-400 font-semibold mx-3`}>Tipo de Arma</label>
                        <select name={marca} onChange={(e)=>setmarca(e.target.value)}
                            className={`border    
                            bg-white mx-2
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 py-1.5 max-h-10`}>
                            <option value="Jericho">Jericho</option>
                            <option value="Barack">Barack</option>
                            <option value="AKM">AKM</option>
                            <option value="PKM">PKM</option>
                        </select>
                        </div>
                        <div className={`flex flex-col  flex-grow m-0`}>
                <Entrada label="Nome da Arma"
                    valor={nomearma}
                    valorMudou={setnomearma}
                />
                 </div>
                 </div>
                 <div className={`flex`}>
                 <div className={`flex flex-col  flex-grow m-0`}>
                <Entrada label="Nº da Arma"
                    valor={narma}
                    valorMudou={setarma}
                />
                 </div>
                 <div className={`flex flex-col  flex-grow m-0`}>
                <Entrada label="Calibre"
                    valor={calibre}
                    valorMudou={setCalibre}
                />
                 </div>
                 <div className={`flex flex-col  flex-grow m-0`}>
                <Entrada label="Nome da Arma"
                    valor={foto}
                    valorMudou={setfoto}
                />
                 
                 </div>
                 </div>
                 <div className={`flex`}>
                    <div className={`flex flex-col w-screen mr-3 mx-3`}>
                        <label className={`text-gray-700 font-semibold`}>Dados do Infactor</label>
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