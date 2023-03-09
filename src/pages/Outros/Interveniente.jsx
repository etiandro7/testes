import { useEffect, useState } from "react";
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
import {Add,carro,procurar,Aviso,Certo} from '../../components/icons'
import IntervenienteP from '../Outros/IntervenintePessoa'
import Veiculos from '../Outros/Veiculo'

export default function Interveniente({Oriem,onFechar=()=>{},id='modal'})
{

    

    const [cor, serCor] =useState('gray')
const [Pessoa, setPessoa] =useState([])
const [Acidente, setAcidente] =useState([])
const [Veiculo, setVeiculo] =useState([])

    const [idpessoa, setIdpessoa] = useState()

    const [idacdidente, setidacdidente] = useState(Oriem)
    const [idveiculo , setIdveiculo] = useState()
    const [posicao,setPosicao] = useState('')
    const [banco, setBanco] = useState('')
    const [estado, setEstado] = useState('')
    const [TemPessoa,setTempessoa] = useState('')
    const [Temveiculo,setTemveiculo] = useState('')
    const [interveniente, setinterveniente] =useState('')
    const [ProcurarPessoa, setProcurarPessoa] =useState('')
    const [ProcurarVeiculo, setProcurarVeiculo] =useState('')
    const [confirma, setConfirma] =useState('')

 
    const [visivel, setvisivel] = useState(false)
    const [VisibleVeiculo, setVisibleVeiculo] = useState(false)
    const [erro ,seterro] = useState(null)



   async  function Salvar(){
       if (idpessoa===undefined) {
        ExibirErro('Preencher campos Obrigatorio! ')
       }else{
    const resp = await  fetch('../api/Outros/Interveniente',
        {
            method: 'POST',
            body: JSON.stringify({ 
                 idpessoa, 
                 estado,
                  posicao, 
                  banco, 
                  idveiculo, 
                  interveniente,
                  idacdidente
                })
            })

                const data = await resp.json()
                if(data.insertId >0 ){
                    //setCodigoacidente(data.insertId)
                    //console.log('Cidogo ', data.insertId)
               ExibirErro('Operação Realizada com Sucesso! ',15,2)
                }
            }
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/TodasPessoa?nome=${ProcurarPessoa}`)
        .then(res =>res.json())
        .then(setPessoa)
       },[ProcurarPessoa])
   
       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/TodosVeiculos?matricula=${ProcurarVeiculo}`)
        .then(res =>res.json())
        .then(setVeiculo)
       },[ProcurarVeiculo])

       function ExibirErro(msg, tempo=15, ida=1){
        seterro(msg)
        setConfirma(ida)
    
        setTimeout(()=>{seterro(null)
        setConfirma(0)}, tempo*100)
    }

 
        function ListarPessoas(){
            return Pessoa?.map(pessoaa =>{return ( 
                <option key={pessoaa.idpessoa}value={pessoaa.idpessoa}>Nome.: 
                {pessoaa.Nomepessoa} || D. Nascimento {pessoaa.nascimento} || Nº Bilhete: {pessoaa.NBI}             
                </option>  
            )})
        
        }
        const dados = Pessoa?.map(p =>{p.Nomepessoa})

        function ListarVeiculo(){
            return Veiculo?.map(pessoaa =>{return ( 
                <option key={pessoaa.idviatura}value={pessoaa.idviatura}>Veiculo.: 
               {pessoaa.Tipo}|| Marca : {pessoaa.marca} || Modelo {pessoaa.modelo} || Matricula: {pessoaa.matricula} 
               || Cor {pessoaa.cor} || Cinlindragem {pessoaa.cilidragem}            
                </option>  
            )})
        
        }
        const dadosVei = Veiculo?.map(p =>{p.marca})

 
          


    return (

        <div className={`container mx-auto shadow-md flex flex-col w-full relative`}>
              {confirma==1 ? 
            <div className='flex justify-end items-end content-end'>
               
               <span className='w-auto bg-red-400 text-white font-light mx-2 p-1 py-3 absolute shadow-2xl right-96 top-0
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
        <div className="w-full shadow-md ">
            <h1 className={` border-l-8 border-yellow-500 h-15 text-2xl font-extralight pl-1 text-indigo-800`}>
                Registo dos intervenientes do acidentes
            </h1>
            <hr/>
                    <div className="text-right">
                         <Botao className="bg-blue-900" onclick={()=>setvisivel(true)} > 
                         <span className="flex justify-center items-center font-extralight ">{Add}
                         Adicionar</span>
                         </Botao>
                         <Botao className="bg-blue-900" onclick={()=>setVisibleVeiculo(true)}> 
                         <span className="flex justify-center items-center font-extralight">{carro}
                         Veículo</span>
                         </Botao>
                     </div>

                     <div className={`flex  felx-col mt-4 mx-2 w-full`}>
                         <Entrada  texto="Digite o  nome"
                         label="" 
                         value={ProcurarPessoa} valorMudou={setProcurarPessoa}
                         className='rounded-full py-2  w-72'
                         />
                         <span className="text-white  py-2 font-black mt-0.5
                         p-1 z-10 rounded-tr-2xl rounded-br-2xl  -mx-8 bg-blue-900">{procurar}</span>
                         
                    </div>
                    <div className={`flex  felx-col mt-4 mx-2 w-full`}>
                         <Entrada  texto="Digite o Nº da Matricula"
                         label="" 
                         value={ProcurarVeiculo} valorMudou={setProcurarVeiculo}
                         className='rounded-full py-2  w-72'
                         />
                         <span className="text-white  py-2 font-black mt-0.5
                         p-1 z-10 rounded-tr-2xl rounded-br-2xl  -mx-8 bg-blue-900">{procurar}</span>
                         
                    </div>
                         <hr className="mt-2"/>

                     <div className="flex ">
<div className={`flex flex-col mx-3 w-full`}>
    <label className={`text-gray-700 font-semibold mt-1`}>Dado Interveniente</label>
    <select name={idpessoa} onChange={(e)=>setIdpessoa(e.target.value)}
        className={`border    
        bg-white 
        focus:border-blue-500 focus:outline-none  font-light rounded-sm
        border-l-4 border-blue-700 py-1 max-h-100`}>
        <option value="">Selecionar o Interveniente</option>
        {ProcurarPessoa!=""?ListarPessoas():null}
    </select>
    {dados.length==0 ?<span className="text-red-600 text-sm animate-bounce">Registo não encontrado do(a):{ProcurarPessoa}</span>:null}
  </div>

                   
                     </div>
                     <div className="flex ">
                     <div className={`flex flex-col w-80 mx-3`}>
                        <label className={`text-gray-700 font-semibold mt-1`}>Interveniente</label>
                        <select name={interveniente} onChange={(e)=>setinterveniente(e.target.value)}
                            className={`border    
                            bg-white 
                            focus:border-blue-500 focus:outline-none  font-light rounded-sm
                            border-l-4 border-blue-700 py-1 max-h-100`}>
                            <option value="">Selecionar o Interveniente</option>
                            <option value="Condutor">Condutor</option>
                            <option value="Ocupante">Ocupante</option>
                            <option value="Peão">Peão</option>
                        </select>
                    </div>
                                        <div className={`flex flex-col w-80 mx-3`}>
                                           <label className={`text-gray-700 font-semibold mt-1`}>Estado</label>
                                           <select name={estado} onChange={(e)=>setEstado(e.target.value)}
                                               className={`border    
                                               bg-white 
                                                      focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                                       border-l-4 border-blue-700 py-1 max-h-100`}>
                                               <option value="">Selecionar o Estado</option>
                                               <option value="Bilhete">Morto</option>
                                               <option value="Passaporte">Ferido</option>
                                           </select>                  
                                       </div>
                                       <div className={`flex flex-col w-80 mx-3`}>
                                           <label className={`text-gray-700 font-semibold mt-1 over`}>Banco</label>
                                           <select name={banco} onChange={(e)=>setBanco(e.target.value)}
                                               className={`border    
                                               bg-white 
                                                      focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                                       border-l-4 border-blue-700 py-1 max-h-100`}>
                                               <option value="">Selecionar o Estado</option>
                                               <option value="Pendura">Pendura</option>
                                               <option value="Traz">Traz</option>
                                           </select>                  
                                       </div>
                     </div>
                     <div className="flex ">

<div className={`flex flex-col mx-3 w-full`}>
    <label className={`text-gray-700 font-semibold mt-1`}>Dados do Veiculo</label>
    <select name={idveiculo} onChange={(e)=>setIdveiculo(e.target.value)}
        className={`border    
        bg-white 
        focus:border-blue-500 focus:outline-none  font-light rounded-sm
        border-l-4 border-blue-700 py-1 max-h-100`}>
        <option value="">Selecionar o Interveniente</option>
    {ProcurarVeiculo!=""?ListarVeiculo():null}
      
    </select>
    {dadosVei.length==0 ?<span className="text-red-600 text-sm animate-bounce">Registo não encontrado</span>:null}
  </div>
</div>
<div className={`flex justify-end`}>
                    <Botao onclick={()=>{
                    Salvar()
                   }}>Adicionar</Botao>
                <Botao cor="red" onclick={onFechar}>Cancelar</Botao>
                </div>

                {visivel? <IntervenienteP tipopessoa='Interveniente' onFechar={()=>setvisivel(false)}> </IntervenienteP>:null}
                {VisibleVeiculo? <Veiculos Origem="Acidente" onFechar={()=>setVisibleVeiculo(false)}  > </Veiculos>:null}
                </div>
            </div>
           
   
    )
}