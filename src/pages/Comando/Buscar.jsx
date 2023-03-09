import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import {procurar} from '../../components/icons/'
import Detalhe from '../Outros/detalhesAcusado'
import Image from 'next/dist/client/image'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import Usuario_Logado from '../../components/Context/UsuarioAuth'


export default function Buscar(props) {

    const ULogado = Usuario_Logado()
    
    const [buscar, setbuscar] = useState('')
    const [nome, setnome] = useState('')
    const [apelido, setapelido] = useState('')
    const [Todos,setTodos]=useState([])
    const [Msel,setMsel]=useState(0)

    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/buscar?buscar=${buscar}`)
        .then(res =>res.json())
        .then(setTodos)
       // console.log(Todos)
       },[buscar]) 



       function pessoa(){
           let cor =""
        return Todos?.map(m =>{return (
            
            <li key={m.idpessoa} className="flex  border-blue-100 rounded-sm">
              
              <div className='flex flex-col m-2 justify-center items-center w-full'>
              
               <Image src={m.foto ? m.foto : '/pessoa.png'}  alt="sem Foto" width={150} height={150}         
               className=" border-indigo-100 border-2 flex flex-col justify-center items-center rounded-full bg-gray-600"/>
               <span className='font-bold text-yellow-700'>REGISTO Nº.: {m.idpessoa}</span>
               <span className={`font-semibold  text-white bg-gray-800 rounded-md p-1 mt-2`}>Acusado.:  {m.Nomepessoa} - {m.Apelido}  </span> 
               <span>Provincia.: {m.nomeprovincia}</span>
               <span>Município.: {m.nomemunicipio}</span>
             
               <button
                className="bg-blue-700 text-white uppercase p-1
                hover:bg-gray-900 font-light right-auto 
                rounded-sm"
                onClick={()=>{
                    setnome(m.Nomepessoa)
                    setapelido(m.Apelido)
                    setMsel(1)
                }}
                >+ informações</button>
                </div>
            </li>
        )})}
 
   
    return (
        <Layoutmunicipal titulo={ULogado.sigla} subtitulo={ULogado.Nomeorgao}> 
        <div className={`container mx-auto shadow-md flex flex-col w-full`}>
             {Msel!=0 ? <Detalhe nome={nome} apelido={apelido} ></Detalhe>:(<>
        <div className={`container  shadow-md flex flex-col`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-white h-10 py-3 font-extrabold pl-5 shadow-inner text-red-500`}>
                    Todas as Pessoas Registadas </h1>
                <hr />
                
             
                <div className={`flex  felx-col mt-4 mx-2 m-2 w-full`}>
                         <Entrada  texto="Nome Ou Apelido"
                         label="" 
                         value={buscar} valorMudou={setbuscar}
                         className='rounded-full py-2  w-72'
                         />
                         <span className="text-white  py-2 font-black mt-0.5
                         p-1 z-10 rounded-tr-2xl rounded-br-2xl  -mx-8 bg-blue-900">{procurar}</span>
                         
                    </div>
                <hr className="m-2 border-indigo-900  border-1"/>
             
              <ul className="flex flex-row justify-center items-center flex-wrap mt-8">
                    {pessoa()}</ul>
            </div>

        </div>
        </>)}
        </div>
        </Layoutmunicipal>
    )
}