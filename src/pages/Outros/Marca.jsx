import { useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Marca({onFechar=()=>{},id='modal'}) {
    const [marca, setmarca] = useState('')
    const [Tipo, setTipo] = useState('')
    const [erro ,seterro] = useState(null)         
    function ExibirErro(msg, tempo=15){
        seterro(msg)
        setTimeout(()=>seterro(null), tempo*100)
    }
     
        const eventoclicar =(e)=>{
            if(e.target.id ===id)
             onFechar()
        }


    function Salvar() {
        fetch('../api/Outros/Marca',
            {
                method: 'POST',
                body: JSON.stringify({ Tipo, marca })
            })
    }

    return (
        <div id={id} className='w-screen h-screen absolute top-0 left-0 flex  
        justify-center items-center 
        bg-black z-10'
         onClick={eventoclicar} >
          
       <div className="h-auto w-full  p-0  m-0 bg-white ">
       <div className={`container mx-auto shadow-lg rounded-md flex content-center justify-center opacity-100 w-full`}>
           <div className="w-1/2 shadow-md">
           {erro ? 
       <div className='flex justify-end items-end content-end'>
          <span className=' w-1/3 bg-red-500 text-white font-semibold mx-2 p-1 
          py-3 rounded-sm flex flex-row  gap-2'> {Aviso} {erro} <span className='text-yellow-400'>{emojierro} </span></span>
          </div>
          :null}
               <h1 className={`bg-white h-10 py-2 font-extrabold 
               pl-5 shadow-inner text-blue-700 border-l-8 border-yellow-500
               align-middle relative
               `}>
                    REGISTO DE MARCA de VEÍCULO
                    
                    <span className="right-2 absolute z-10 bg-indigo-900 text-white 
                    font-bold rounded-full px-1.5 cursor-pointer"
                          onClick={onFechar}>X</span>
                    </h1>
                <hr />


               
               
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Veículo</label>
                        <select name={Tipo} onChange={(e)=>setTipo(e.target.value)}
                            className={` border    
                            bg-white mx-2
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-blue-700 p-1 py-1.5 max-h-10`}>
                                        <option value="">Selecionar o Tipo</option>
                            <option value="Viatura">Viatura</option>
                            <option value="Motorizada">Motorizada</option>
                           

                        </select>
                    </div>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Marca "
                            valor={marca}
                            valorMudou={setmarca}
                       
                        />
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