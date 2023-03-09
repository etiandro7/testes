
import { useEffect, useState } from 'react'
import router from 'next/router'


interface PropsProvincia {

    selecionado?: (provincia:any) => void
    selecionadoExcluir?: (provincia:any) => void
}

export default function ListarProvincia(props: PropsProvincia) {
    const [provincias,setProvincia]=useState([])


    useEffect(()=>{
     fetch('http://localhost:3000/api/Outros/Provincia')
     .then(res =>res.json())
     .then(setProvincia)
    },[]) 


const exibir = props.selecionado || props.selecionadoExcluir


    function DadosTabela() {
        return provincias?.map((p, i) => {
            return (
                <tr key={p.id}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-indigo-100'}`}
                >
                    <td className="px-4">{p.idprovincia}</td>
                    <td className="px-4">{p.nomeprovincia}</td>
                    <td className="flex justify-center">
              
              <button  
              onClick={() => router.push(`Outros/Provincia/idprovincia=${p.idprovincia}`)}
               className="flex justify-center items-center
              text-green-600 rounded-full p-2 m-1 text-center
              hover:bg-purple-500">Alterar</button>

           <button 
            className="flex justify-center items-center
            text-red-600 rounded-full p-2 m-1 text-center
            hover:bg-gray-50">Eliminar</button>
       </td>
                </tr>
            )
        })
    }



    function CabecalhoTabela() {

        return (
            <tr>
                <th >Codigo</th>
                <th >Província</th>
              {exibir ?  <th>Acções</th>: false}
            </tr>
        )
    }
    return (
        <>
        <div className={`container mx-auto shadow-lg rounded-md flex   w-1/2 `}>
                <div className="w-full shadow-md">
                    <h1 className={`bg-blue-900 h-10 py-2 font-extrabold pl-5 shadow-inner text-gray-50`}>TODAS PROVINCIAS REGISTADAS</h1>
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

