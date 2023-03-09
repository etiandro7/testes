
import { useEffect, useState } from 'react'
import router from 'next/router'
import Entrada from '../../../components/formcomp/Entrada'
//import BoletimVitima from './BoletimVitima'
import UsuarioLogado from '../../../components/Context/UsuarioAuth'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



export default function ListarProvincia() {

const dado = UsuarioLogado()

    const [provincias,setProvincia]=useState([])
    const [nome,setnome]=useState('')
    const [Data,setData]=useState('')
    const [activar, setActivar] = useState(false)


    useEffect(()=>{
     fetch('http://localhost:3000/api/Outros/ListarVitimaOc')
     .then(res =>res.json())
     .then(setProvincia)
     //console.log(provincias)
    },[]) 

    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/ListarVitimaOc?nome=${nome}&apelido=${nome}&codigo=${nome}`)
        .then(res =>res.json())
        .then(setProvincia)
       },[nome]) 



    function DadosTabela() {
        return provincias?.map((p, i) => {
            return (
                <tr key={p.idocorrencia}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-indigo-100'}`}
                >
                    <td className="px-4 text-center">{i+1}</td>
                    <td className=" text-center">{p.Nomepessoa}</td>
                    <td className=" text-center">{p.Hora}</td>
                    <td className=" text-center">{p.Dia}</td>
                    <td className=" text-center">{p.Mes}</td>
                    <td className=" text-center">{p.Ano}</td>
                    <td className=" text-center whitespace-nowrap">{p.Nomeocorrencia}</td>
                    <td className="px-4 whitespace-nowrap">000000{p.idocorrencia}/CPHL</td>
                    <td className="whitespace-nowrap">{p.Nomeesquadra}</td>
                    <td className="font-black">{p.Nomecompleto }</td>
               
                    
                   
                    <td className="flex justify-center">
              
              <button  
              onClick={() =>{/*BoletimVitima(p,dado.Nomecompleto, dado.Patente)*/}}
               className="flex justify-center items-center
              text-red-800 rounded-full p-1 m-1 text-center
              hover:bg-indigo-800 hover:text-white">Imprimir</button>
       </td>
                </tr>
            )
        })
    }



    function CabecalhoTabela() {

        return (
            <tr>
                <th >Nº</th>
                <td >Vítima </td>
                <td >Hora </td>
                <td >Dia </td>
                <td >Mês</td>
                <td >Ano</td>
                <td >Ocorrência</td>
                <td >Nº da Ocorrencia</td>  
                <td>Esquadra</td>  
                <td> Graduado de Serviço</td>       
                <th >Ficha</th>
             
 
            </tr>
        )
    }
    return (
        <>
        <div className={`container mx-auto shadow-lg rounded-md flex `}>
                <div className="w-full shadow-md">
                    <h1 className={`bg-white h-10 py-2 font-extrabold pl-5 shadow-inner text-blue-500`}>
                        BOLETIM DE OCORRÊNCIAS COM ACUSADOS CONHECIDOS</h1>
                    <hr />
                    <div className='m-1 flex roudend-lg w-full'>
                    <div className=''>
                    <Entrada label="Procurar" 
                    className="rounded-2xl"
                    valor={nome} valorMudou={setnome}
                    texto='Procurar'
                    />
                    </div>
                    <div className='justify-center'>
                    <Entrada label="Data" 
                    tipo='date'
                    className="rounded-2xl"
                    valor={Data} valorMudou={setData}
                    />
                    </div>
                    </div>
        <table className=" w-full align-text-center overflow-hidden" id="table-to-xls">
            <thead className="bg-blue-800 text-white font-bold  rounded-2xl overflow-hidden">
                {CabecalhoTabela()}
            </thead>
            <tbody>
                {DadosTabela()}
            </tbody>
        </table> 
        <div className='mt-2 text-right'>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="bg-blue-500 shadow-lg roudend-sm p-2"
          table="table-to-xls"
          filename="Ocorrenências"
          sheet="Ocorrencias"
          buttonText="Exportar Dados"/>
          </div>
        </div></div>
        </>
    )
}

