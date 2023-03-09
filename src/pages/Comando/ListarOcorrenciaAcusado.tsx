
import { useEffect, useState } from 'react'
import router from 'next/router'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import Usuario_Logado from '../../components/Context/UsuarioAuth'




export default function ListarProvincia() {
    const ULogado = Usuario_Logado()
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
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-indigo-100'} border-2`}
                >
                    <td className="p-1 text-center font-black border-solid border-2 ">{i+1}</td>
                    <td className="p-1 text-center border-solid border-2">{p.Dia}/ {p.Mes}/ {p.Ano}</td>
              
                    <td className="p-1 text-center border-solid border-2 ">{p.nomemunicipio}</td>
                    <td className="p-1 whitespace-nowrap border-solid border-2">{p.nomepessoa}</td>
                    <td className="p-1 border-solid border-2">{p.apelido}</td>
                    
                    <td className="p-1 whitespace-nowrap border-solid border-2">{p.Nomeocorrencia}</td>
                    <td className="p-1 whitespace-nowrap border-solid border-2">{p.Descricadaarma}</td>
                    <td className="p-1 whitespace-nowrap border-solid border-2">{p.Statusacusado }</td>
                    <td className="flex justify-center border-solid border-2">
              
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
                <th className=' p-1 border-solid border-2'>Nº</th>
                <th className=' p-1 border-solid border-2' >Data </th>
                <th className=' p-1 border-solid border-2'>Município</th>
                <th className=' p-1 border-solid border-2' >Acusado</th>
                <th className=' p-1 border-solid border-2'>TCP</th>
                <th className=' p-1 border-solid border-2'>Ocorrência Criminal</th>
                <th className=' p-1 border-solid border-2'>Objecto</th>
                <th className=' p-1 border-solid border-2'>Estado</th>
                <th className=' p-1 border-solid border-2'>Detalhes</th>
             
 
            </tr>
        )
    }
    return (
        <Layoutmunicipal titulo={ULogado.sigla} subtitulo={ULogado.Nomeorgao}> 
        <div className={`container mx-auto shadow-lg rounded-md flex `}>
                <div className="w-full shadow-md">
                <h1 className="shadow bg-gray-700 font-semibold text-1xl text-white 
        uppercase flex items-end content-end justify-end p-2">
                        BOLETIM DE OCORRÊNCIAS COM ACUSADOS CONHECIDOS</h1>
                    <hr />
        <table className=" w-full align-text-center overflow-hidden">
            <thead className="bg-yellow-300 text-white font-bold  rounded-2xl overflow-hidden">
                {CabecalhoTabela()}
            </thead>
            <tbody>
                {DadosTabela()}
            </tbody>
        </table>
        </div></div>
        </Layoutmunicipal>
    )
}

