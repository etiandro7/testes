import { useEffect, useState } from "react";
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
import Usuario_Logado from '../../components/Context/UsuarioAuth'
import {Aviso,Certo} from './../../components/icons'

export default function TermoEntrega()
{

    const ULogado = Usuario_Logado()
  
  
    const [idorgao, setidorgao] = useState(ULogado.idorgao)
    const [IdEsquadra, setIdEsquadra] = useState(ULogado.idesquadra)
    const [Nomedofuncionario, setNomedofuncionario] = useState(ULogado.Nomecompleto)
    const [Datadeentrega, setDatadeentrega] = useState('')
    const [Hora, setHora] = useState('')
    const [Patente, setPatente] = useState(ULogado.Patente)
    const [Tipo, setTipo] = useState('Motorizada')
    const [TipoVeiculo, setTipoVeiculo] = useState([])
    const [Idapreensao, setIdapreensao] = useState(0)
    const [confirma, setConfirma] = useState('')
    const [erro, seterro] = useState('')
 

    async function Salvar(){

        if (Idapreensao===0) {
            ExibirErro('Campo obrigatório!')
        }else{
   const resp = await     fetch('../api/Outros/TermoEntrega',
        {
            method: 'POST',
            body: JSON.stringify({ 
                Datadeentrega,
                 Hora, idorgao,
                  IdEsquadra, Nomedofuncionario,
                   Patente, Idapreensao, 
                   
                })
        }) 
        const resposta = await resp.json()
        if(resposta.insertId > 0 ){
        ExibirErro(`Operação realizadaa com Sucesso!`,15,2)
    }
        
    }
    }
    function ExibirErro(msg, tempo=15, ida=1){
        seterro(msg)
        setConfirma(ida)
    
        setTimeout(()=>{seterro(null)
        setConfirma(0)}, tempo*100)
    }


    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/ListarApreensaoViatura?Tipo=${Tipo}`)
        .then(res =>res.json())
        .then(setTipoVeiculo)
       },[Tipo])


     


        function Todos(){
            if(Tipo=="Arma de Fogo"){
            return TipoVeiculo?.map(({idapreensao,Nomearma,Marca,Ndaarma}) =>
               {
                return(
                <option key={idapreensao}value={idapreensao}>Nome.: {Marca}-Marca.:{Nomearma}- Nº: {Ndaarma}</option>
                )}
            
                )}
                if(Tipo=="Viatura" || Tipo=="Motorizada"){
                    return TipoVeiculo?.map(({idapreensao,modelo,marca,matricula,nchassi}) =>
                     {
                         return(
                        <option key={idapreensao}value={idapreensao}>Marca.: {marca}- Modelo.: {modelo}- Matricula.:{matricula}-Nº Chassi{nchassi}</option>
                        )}
                        )
                }
                if(Tipo=="Diversos Meios")
                {
                return TipoVeiculo?.map(({idapreensao,Localdaapreensao,Motivodaapreensao,outros}) =>
                    {
                    return(
                    <option key={idapreensao}value={idapreensao}>Motivo.: {Motivodaapreensao}- Ojbecto: {outros} Local: {Localdaapreensao} </option>
                    )}
                
                    )
            }
            }

    return (

        <div className={`container mx-auto shadow-md flex flex-col w-4/5`}>
               {confirma==1 ? 
            <div className='flex justify-end items-end content-end'>
               
               <span className='w-auto bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-auto top-1
                rounded-sm flex flex-row  gap-2'> {Aviso} {erro} </span>
               </div>
               :null }
               {confirma==2 ? 
           <div className='flex justify-end items-end content-end'>
              <span className=' w-auto bg-green-600 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-auto top-1
               rounded-sm flex flex-row  gap-2'> {Certo} {erro} </span>
              </div>
              :null         
              }
        <div className="w-full shadow-md">
            <h1 className={`bg-white h-10 py-2 font-extrabold pl-5 shadow-inner text-indigo-800 `}>
               Termo de Entrega </h1>
            <hr />

            <div className={`flex`}>
               <div className={`flex flex-col w-full`}>
                   <label className={`text-gray-700 font-semibold  mx-3 `}>Meio a ser entregue</label>
                   <select name={Tipo} onChange={(e)=>setTipo(e.target.value)}
                       className={` border    
                       bg-white mx-3
                              focus:border-blue-500 focus:outline-none  font-light rounded-sm
                               border-l-4 border-indigo-300 p-1 max-h-10 py-1.5`}>
                       <option value="">Selecionar Meio</option>
                      <option value="Viatura">Viatura</option>
                       <option value="Motorizada">Motorizada</option>
                       <option value="Arma de Fogo">Arma de Fogo</option>
                       <option value="Diversos Meios">Diversos Meios</option>
                   </select>

               </div>
               <div className={`flex flex-col w-1/5 whitespace-nowrap -mx-4`}>
                  <Entrada 
                  label="Data"
                  valor={Datadeentrega}
                  valorMudou={setDatadeentrega} 
                  tipo="date" />

               </div>
                  
           <div className={`flex flex-col w-1/6 whitespace-nowrap mx-1`}>
                  <Entrada 
                  label="Hora"
                  value={Hora} 
                  valorMudou={setHora}
                  tipo="time" />

          </div> 
               </div>


         
               <div className={`flex`}>
               <div className={`flex flex-col w-full`}>
                   <label className={`text-gray-700 font-semibold  mx-3`}>Objectos Apreendidos</label>
                   <select name={Idapreensao} onChange={(e)=>setIdapreensao(e.target.value)}
                       className={` border    
                       bg-white mx-3
                              focus:border-blue-500 focus:outline-none  font-light rounded-sm
                               border-l-4 border-indigo-300 p-1 max-h-10 py-1.5`}>
                       <option value="">Selecionar A Apreensão</option>
                      {Tipo!=''?Todos():false}
                   </select>

               </div>
           
           </div>

         <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>

            </div>
        </div>
    )
}