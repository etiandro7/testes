
import { useEffect, useState } from 'react'
import router from 'next/router'



export default function ListarProvincia() {
    const [provincias,setProvincia]=useState([])


    useEffect(()=>{
     fetch('http://localhost:3000/api/Outros/BuscarOcorrenciaAcusado')
     .then(res =>res.json())
     .then(setProvincia)
    },[]) 





    function DadosTabela() {
        return provincias?.map((p, i) => {
            return (
                <tr key={p.idocorrencia}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-indigo-100'}`}
                >
                    <td className="px-4 text-center font-black ">{i+1}</td>
                    <td className="px-4 text-center ">{p.Dia}</td>
                    <td className="px-4 text-center ">{p.Mes}</td>
                    <td className="px-4 text-center ">{p.Ano}</td>
                    <td className="px-4 text-center ">{p.nomemunicipio}</td>
                    <td className="px-4 whitespace-nowrap">{p.nomepessoa}</td>
                    <td className="px-4">{p.apelido}</td>
                    
                    <td className="px-4 whitespace-nowrap">{p.Nomeocorrencia}</td>
                    <td className="px-4 whitespace-nowrap">{p.Descricadaarma}</td>
                    <td className="px-4 whitespace-nowrap">{p.Statusacusado }</td>
                    <td className="flex justify-center">
              
              <button  
              onClick={() => router.push(`Outros/Provincia/idprovincia=${p.idprovincia}`)}
               className="flex justify-center items-center
              text-red-800 rounded-full p-1 m-1 text-center
              hover:bg-indigo-800 hover:text-white">detalhes</button>

          
       </td>
                </tr>
            )
        })
    }



    function CabecalhoTabela() {

        return (
            <tr>
                <th >Nº</th>
                <th >Dia</th>
                <th >Mes</th>
                <th >Ano</th>
                <th >Município</th>
                <th >Acusado</th>
                <th >TCP</th>
                <th >Ocorrência Criminal</th>
                <th >Objecto</th>
                <th >Estado</th>
                <th >Detalhes</th>
             
 
            </tr>
        )
    }
    return (
        <>
        <div className={`container mx-auto shadow-lg rounded-md flex `}>
                <div className="w-full shadow-md">
                    <h1 className={`bg-white h-10 py-2 font-extrabold pl-5 shadow-inner text-blue-200`}>
                        BOLETIM DE OCORRÊNCIAS COM ACUSADOS CONHECIDOS</h1>
                    <hr />
        <table className=" w-full align-text-center overflow-hidden">
            <thead className="bg-blue-800 text-white font-bold  rounded-2xl overflow-hidden">
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

