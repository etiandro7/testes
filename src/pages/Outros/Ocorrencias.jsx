import { useEffect, useState } from "react";
import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
//import Acusado from '../Outros/Acusado'
import usuarioData from '../../components/hook/useUsario'
import Usuario_Logado from '../../components/Context/UsuarioAuth'
import {Aviso,Certo} from './../../components/icons'


export default function Ocorrencia(props)
{
  
    const ULogado = Usuario_Logado()
    const DadosGeral = usuarioData()

    const [Passo, setPasso] = useState(false)
    
    const [Nomeocorrencia,setNomeocorrencia]= useState('')
    const [nome,setnome]= useState(props.nome)
    const [apelido,setapelido]= useState(props.apelido)
    const [Dataocorrencia,setDataocorrencia]= useState('')
    const [Autor,setAutor]= useState('')
    const [causa,setcausa]= useState('')
    const [Hora,setHora]= useState('')
    const [Esclarecido,setEsclarecido]= useState('')

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
    const [Idprovincia, setIdprovincia] = useState(0)
    const [Idmunicipio, setIdmunicipio] = useState(0)
    const [Idusuario, setIdusuario] = useState(ULogado.idusuario)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
    const [Idpessoa, setIdpessoa] = useState(props.codigovitima)
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
  
    const [confirma, setConfirma] = useState(0)


 
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
       },[]) 

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
        fetch('http://localhost:3000/api/Outros/Provincia')
        .then(res =>res.json())
        .then(setProvincias)
       },[Idprovincia]) 

    
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



    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Municipio?Idprovincia=${Idprovincia}`)
        .then(res =>res.json())
        .then(setMunicipios)
       },[Idprovincia]) 


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

       function TipodeArma_Todos(){
        return TipodeArma?.map(prov =>{return (
            <option key={prov.idtipodearma}value={prov.idtipodearma}>{prov.Nomearma}</option>
        )})}

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
             if(Nomeocorrencia==""){
                ExibirErro(' Os Campos nome e Contactos são Obrigatórios (: ')
                setObrigatorio(true)
             }
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
                    if(Autor==="Detido(a)")
                    setPasso(true)
                 else
                    setPasso(false)
                    }
            }

    return (

        <div className={`container mx-auto shadow-md flex flex-row  
         h-auto  relative`}>
             
            {confirma==1 ? 
            <div className='flex justify-end items-end content-end'>
               <span className=' w-1/2 bg-red-500 text-white font-light mx-2 p-1 py-3 absolute right-1 top-0
                rounded-sm flex flex-row  gap-2'> {Aviso} {erro} </span>
               </div>
               :null }
               {confirma==2 ? 
           <div className='flex justify-end items-end content-end'>
              <span className=' w-auro bg-green-500 text-white font-light mx-2 p-1 py-3 absolute right-0 top-10
               rounded-sm flex flex-row  gap-2'> {Certo} {erro} </span>
              </div>
              :null         
              }
              {Passo ? "<Acusado Nomeocorrencia={Nomeocorrencia} Codigoocorrencia={CodigoOcorrencia}></Acusado>":(<>
        <div className="w-full shadow-md bg-white">
            <h1 className={`bg-white h-10 py-2 font-extrabold pl-5 shadow-inner text-indigo-800 `}>
                BOLETIM DE REGISTO DE OCORRÊNCIA CRIMINAL DO(A) SR(A).
                 <span className="uppercase text-yellow-400"> {nome} Alcunha:  {apelido}</span></h1>
            <hr />
            <div className={`flex items-center justify-between align-baseline mx-5 mr-5 mt-5`}>
                <ul className='mx-5 flex items-center justify-between align-baseline'>
                <li className='font-light text-sm mx-2 text-green-600 rounded-sm p-1 -mt-12'> 2º Passos Registo da Ocorrência</li> 
                 </ul> 
                <button className="bg-green-700 rounded-full py-1 pl-2 font-semibold text-2xl text-white  h-12- w-12 -mt-3 ">1º</button>
                <button  className={`text-2xl rounded-full py-1 pl-1
                font-semibold text-white  h-12- w-12 bg-green-700 animate-pulse`} >2º </button>
                <button className="bg-red-700 rounded-full py-1 pl-2 font-semibold text-2xl text-white  h-12- w-12  -mt-3">3º </button>
                    </div>
                    <hr className='bg-gray-300 h-0.5 mr-10 mx-10 -my-8'/>

<div className='my-20'>
            
            
                    <div className={`flex`}>
               
               <div className={`flex flex-col w-1/6`}>
                  <Entrada 
                  label="Data"
                  value={Dataocorrencia} 
                  valorMudou={setDataocorrencia}
                  tipo="date" />

               </div>
               <div className={`flex flex-col w-1/6 `}>
                  <Entrada 
                  label="Hora"
                  value={Hora} 
                  valorMudou={setHora}
                  tipo="time" 
                  />

               </div>
               <div className={`flex flex-col w-full`}>
                  <Entrada 
                  label="Titulo da Ocorrência"
                  value={Nomeocorrencia} 
                  valorMudou={setNomeocorrencia}
                   />

               </div>
           </div>

           <div className={`flex`}>
            <div className={`flex flex-col mt-2 w-1/3`}>
                    <label className={`text-gray-700 font-semibold  mx-3`}>Provincia</label>
                        <select name={Idprovincia} onChange={(e)=>setIdprovincia(e.target.value)}
                            className={`  border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-indigo-300 p-1 max-h-10`}>
                            <option value=".">Selecionar a Província </option>
                            {ProvinciaTodas()}
                        </select>   
                    </div>
                    <div className={` flex flex-row mt-2  py-0 my-0 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-3 rounded-sm  text-white
                
                 ' >...</button>
                 </div>
                   
                  <div className={`flex flex-col mt-2   w-1/3 mx-3`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Município</label>
                        <select name={Idmunicipio} onChange={(e)=>setIdmunicipio(e.target.value)}
                            className={`border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-indigo-300 p-1 max-h-10`}>
                             <option value=".">Selecionar a Município </option>
                            {Idprovincia!=0? ProvinciaMunicipio():false}
                        </select>
                    </div>
                    <div className={` flex flex-row mt-2   mx-1 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-7 rounded-sm  text-white'>...</button>
                 </div>
                   
                   <div className={`flex flex-col mt-2  mx-2  w-72`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Bairro</label>
                        <select name={Idbairro} onChange={(e)=>setIdbairro(e.target.value)}
                            className={`  border    
                            bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-indigo-300 p-1 max-h-10`}>
                                 <option value=".">Selecionar a Bairro </option>
                            {Idmunicipio!=0? ProvinciaBairro():false}
                        </select>
                       
                    </div>
                    <div className={` flex flex-row mt-2 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-12 
                 p-1 mt-6 -mx-5 rounded-sm  text-white
                
                 ' >...</button>
                 </div>
                 
        </div>
          <div className={`flex`}>
       <div className={`flex flex-col mt-2  w-4/12`}>
                        <label className={`text-gray-700 font-semibold  mx-3`}>Rua </label>
                        <select name={Idrua} onChange={(e)=>setIdrua(e.target.value)}
                            className={`   border    bg-white mx-3
                                   focus:border-blue-500 focus:outline-none  font-light rounded-sm
                                    border-l-4 border-indigo-300 p-1 max-h-10`}>
                             <option value=".">Selecionar a Rua </option>
                            {Idbairro!=0? ProvinciaRua():false}
                        </select>
                        </div> 
                        <div className={` flex flex-row mt-2 w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-3 rounded-sm  text-white
                
                 ' >...</button>
                 </div>
            <div className={`flex flex-col mt-2 mx-3 w-4/12`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Familia Delitiva</label>
                <select name={Idfamilia} onChange={(e)=>setIdfamilia(e.target.value)}
                            className={`  border    bg-white mx-3
                            focus:border-blue-500 focus:outline-none  font-light rounded-sm
                             border-l-4 border-indigo-300 p-1 max-h-10`}>
                   <option value="">Selecionar Familia deletiva</option>
                        {Familia_todos()}
                </select>
            </div>
                     
            <div className={` flex flex-row mt-2   w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-6 rounded-sm  text-white
                
                 ' >...</button>
                 </div>
                 
            <div className={`flex flex-col mt-2  mx-4  w-3/12`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Tipicidade Criminal</label>
                <select name={IdTipologia} onChange={(e)=>setIdTipologia(e.target.value)}
                            className={` border    bg-white mx-3
                            focus:border-blue-500 focus:outline-none  font-light rounded-sm
                             border-l-4 border-indigo-300 p-1 max-h-10`}>
                             <option value=".">Tipologia criminal </option>
                            {Idfamilia!=0? Topologia_todos():false}
                        </select>

            </div>
            <div className={` flex flex-row mt-2  w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-12 
                 p-1 mt-6 -mx-7 rounded-sm  text-white
                
                 ' >...</button>
                 </div>
        </div>
          <div className={`flex`}>

            <div className={`flex flex-col mt-2  w-4/12`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Descrição do Crime</label>
                <select name={IdDescricao} onChange={(e)=>setIdDescricao(e.target.value)}
                            className={` border    bg-white mx-3
                            focus:border-blue-500 focus:outline-none  font-light rounded-sm
                             border-l-4 border-indigo-300 p-1 max-h-10`}>
                             <option value=".">Selecionar o Crime </option>
                            {IdTipologia!=0? Descricao_todos():false}
                        </select>

            </div>
            <div className={` flex flex-row mt-2   w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-3 rounded-sm  text-white
                
                 ' >...</button>
                 </div>

                 <div className={`flex flex-col mt-2  mx-4  w-4/12`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Local de Ocorrência</label>
                <select name={idLoca} onChange={(e)=>setIdLocal(e.target.value)}
                        className={`  border    bg-white mx-3
                        focus:border-blue-500 focus:outline-none  font-light rounded-sm
                         border-l-4 border-indigo-300 p-1 max-h-10`}>
                        <option value="">Local</option>
                        {Local_todos()}
                    </select>
            </div>
            <div className={` flex flex-row mt-2   w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-10 
                 p-1 mt-6 -mx-7 rounded-sm  text-white'>...</button>
                 </div>
                 <div className={`flex flex-col mt-2  mx-3  w-1/4`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Tipo de Arma</label>
                <select name={IdTipodeArma} onChange={(e)=>setIdTipodeArma(e.target.value)}
                        className={` border    bg-white mx-3
                        focus:border-blue-500 focus:outline-none  font-light rounded-sm
                         border-l-4 border-indigo-300 p-1 max-h-10`}>
                        <option value="">Tipo de Arma</option>
                        {TipodeArma_Todos()}
                    </select>
            </div>
            <div className={` flex flex-row mt-2   w-1/9`}>
                    <button className='bg-indigo-800 min-h-5 w-12 
                 p-1 mt-6 -mx-7 rounded-sm  text-white'>...</button>
                 </div>

        </div>
        <div className={`flex`}>
            <div className={`flex flex-col w-4/12`}>
                  <Entrada 
                  label="Descrição da Arma"
                  value={Descricadaarma} 
                  valorMudou={setDescricadaarma}
                   />

               </div>
               <div className={`flex flex-col w-4/12`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Relação com A vítima</label>
                <select value={Relacaovitima} onChange={(e)=>setRelacaovitima(e.target.value)}
                     className={` border    bg-white mx-3
                     focus:border-blue-500 focus:outline-none  font-light rounded-sm
                      border-l-4 border-indigo-300 p-1 max-h-10 py-1.5`}>
                     <option value=".">Relação com a Vitima</option>
                    <option value="Desconhecido">Desconhecido</option>
                    <option value="Pai">Pai</option>
                    <option value="Mãe">Mãe</option>
                    <option value="Madrasta">Madrasta</option>
                    <option value="Padrasto">Padrasto</option>
                    <option value="Colega">Colega</option>
                    <option value="Filho(a)">Filho(a)</option>
                    <option value="Tio(a)">Tio(a)</option>
                    <option value="Neto(a)">Neto(a)</option>
                    <option value="Primo(a)">Esposa(a)</option>
                    <option value="Primo(a)">Primo(a)</option>
                    <option value="Primo(a)">Colega</option>
                </select>

            </div>
            <div className={`flex flex-col w-1/3`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>Situação do Acusado</label>
                <select value={Autor} onChange={(e)=>setAutor(e.target.value)}
                  className={`border    bg-white mx-3
                  focus:border-blue-500 focus:outline-none  font-light rounded-sm
                   border-l-4 border-indigo-300 p-1 max-h-10 py-1.5`}>
                    <option value="">Selecionar a Situação</option>
                    <option value="Em fuga">Em Fuga</option>
                    <option value="Detido(a)">Detido(a)</option>
                </select>

            </div>
         </div>
         <div className={`flex`}> 
            <div className={`flex flex-col w-1/2`}>
                  <Entrada 
                  label="Modus Operandi"
                  value={Modusoperandi} 
                  valorMudou={setModusoperandi}
                  texto="Modo de actuação do acusado"
                   />

               </div>
            <div className={`flex flex-col w-1/2`}>
            <Entrada 
                  label="Causas"
                  value={causa} 
                  valorMudou={setcausa}
                  texto="Causa da Ocorrência"
                   />
            </div>         
         </div>
        
         <div className={`flex flex-col mt-2 pl-2`}>
                <label className={`text-gray-700 font-semibold  mx-3`}>DESCRIÇÃO DOS FACTOS</label>
                <textarea 
                value={Descricaofactos} 
                onChange={(e)=>setDescricaofactos(e.target.value)} 
                 rows="3"
                className={`px-2  border  mx-2 py-1 shadow-inner
                border-l-4 border-blue-700
             focus:border-blue-500 focus:outline-none   rounded-sm font-extrabold`}
                >.</textarea>
                        
                  <label className={`text-gray-700 font-semibold  mx-3`}>MEIOS SUBTRAIDOS</label>
                <textarea 
                value={Meiosubtraido} 
                onChange={(e)=>setMeiosubtraido(e.target.value)} 
                 rows="3"
                className={`px-2  border  mx-2 py-1 shadow-inner
                border-l-4 border-blue-700
             focus:border-blue-500 focus:outline-none  font-extrabold rounded-sm `}
                >.</textarea>             
            </div>
            </div>
         <div className={`flex justify-end -mt-24`}>
                    <Botao onclick={()=>{
                    Salvar()
            }}>Adicionar</Botao>                 
                    <Botao cor="red">Cancelar</Botao>            
                
              
                    </div>
                    </div>
           
       
            </>)}
        </div>
    )
}