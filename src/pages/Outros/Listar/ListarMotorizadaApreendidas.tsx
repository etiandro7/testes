
import { useEffect, useState } from 'react'
import router from 'next/router'
import Entrada from '../../../components/formcomp/Entrada'
import {procurar} from '../../../components/icons'



export default function ListarProvincia() {
    const [provincias,setProvincia]=useState([])
    const [matricula,setmatricula]=useState([])


    useEffect(()=>{
     fetch(`http://localhost:3000/api/Outros/ListarMotorizadaApreendidas?matricula=${matricula}`)
     .then(res =>res.json())
     .then(setProvincia)
    },[matricula]) 

    



    function DadosTabela() {
        return provincias?.map((p, i) => {
            return (
                <tr key={p.idocorrencia}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-indigo-100'}`}
                > 
                    {p.Estado == 'Livre'?<td className="px-4 bg-green-500 text-center h-4 w-4 rounded-full font-black">{i+1 }</td> : <td className="px-4 bg-red-500 h-4 w-4 rounded-full text-center font-black">{i+1 }</td>}
                    
                    <td className="px-4 text-center font-light">{p.nomemunicipio}</td>
                    <td className="px-4 text-center font-light">{p.marca}</td>
                    <td className="px-4 text-center font-light">{p.modelo}</td>
                    <td className="px-4 text-center font-light">{p.matricula}</td>
                    <td className="px-4 text-center font-light">{p.nchassi}</td>
                    <td className="px-4 whitespace-nowrap font-light">{p.nmotor}</td>
  
                    
                    <td className="px-4 whitespace-nowrap">{p.Motivodaapreensao}</td>
                    <td className="px-4 whitespace-nowrap">{p.Efectivo}</td>
                    <td className="px-4 whitespace-nowrap">{p.Dia}</td>
                    <td className="px-4 whitespace-nowrap">{p.Mes}</td>
                    <td className="px-4 whitespace-nowrap">{p.Ano}</td>
                    <td className="px-4 whitespace-nowrap">{p.Hora}</td>
                  
                   
                </tr>
            )
        })
    }



    function CabecalhoTabela() {

        return (
            <tr>
                 <td className=" text-center font-black">N??</td>
                    <td className=" text-center font-light">Munic??pio</td>
                    <td className=" text-center font-light">Marca</td>
                    <td className=" text-center font-light">Modelo</td>
                    <td className=" text-center font-light">Matricula</td>
                    <td className=" text-center font-light">N?? de Chassi</td>
                    <td className=" whitespace-nowrap font-light">N?? de Motor</td>

                    
                    <td className="pl-2 whitespace-nowrap font-light">Motivo Apreens??o</td>
                    <td className="pl-2 whitespace-nowrap font-light">Agente</td>
                    <td className="pl-2 whitespace-nowrap font-light">Dia</td>
                    <td className="pl-2 whitespace-nowrap font-light">M??s</td>
                    <td className="pl-2 whitespace-nowrap font-light">Ano</td>
                    <td className="pl-2 whitespace-nowrap font-light">Hora</td>
                   
                  
            </tr>
        )
    }
    return (
        <>
        <div className={`container mx-auto shadow-lg rounded-md flex `}>
                <div className="w-full shadow-md">
                    <h1 className={`bg-white h-10 py-2 font-extrabold shadow-inner text-indigo-900`}>
                        MOTORIZADAS APREENDIDAS</h1>
                    <hr />
                   
                    <div className={`flex  felx-col mt-4 mx-2 m-2 w-full`}>
                         <Entrada  texto="Matricula"
                         label="" 
                         valor={matricula} valorMudou={setmatricula}
                         className='rounded-full py-2  w-72'
                         />
                         <span className="text-white  py-2 font-black mt-0.5
                         p-1 z-10 rounded-tr-2xl rounded-br-2xl  -mx-8 bg-blue-900">{procurar}</span>
                         
                    </div>
                   

        <table className=" w-full align-text-center overflow-hidden">
            <thead className="bg-blue-800 text-white font-bold mx-2 rounded-2xl overflow-hidden">
                {CabecalhoTabela()}
            </thead>
            <tbody>
                {DadosTabela()}
            </tbody>
        </table>
        </div></div>
        </>
    )
}

