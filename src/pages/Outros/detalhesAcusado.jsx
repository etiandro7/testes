import { useEffect, useState } from "react";
import Image from "next/dist/client/image";


export default function Acidente(props)
{
    const [Pessoas, setPessoas] = useState([])
    const [nome, setnome] = useState(props.nome)
    const [apelido, setapelido] = useState(props.apelido)
/*
    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/buscar?nome=${nome}&apelido=${apelido}`)
        .then(res =>res.json())
        .then(setPessoas)
       },[]) 
*/
       function Pessoastodoas(){
        return Pessoas?.map(prov =>{return (
            <li key={prov.idpessoa}value={prov.idpessoa} className="grid grid-cols-2 gap-2">
                <div className="flex-0">
           <Image src={prov.foto} className="h-40 w-40" alt="SEM FOTO"/>
           </div>
           <div className="bg-green-200"> 
            Nome.: <span className="font-black text-red-700">{prov.Nomepessoa}</span>   Apelido.: {prov.Apelido}
           <hr/>
            <span className="mx-0">Sexo.: {prov.Sexo}</span>
            <hr/>
            <span>Filho(a) de {prov.pai}</span> e de <span>Filho(a) de {prov.Mae}<br></br></span>
            <hr/>
            <span>Nacionalidade de {prov.nacionalidade}</span>  <span>Provincia {prov.nomeprovincia}<br></br></span> 
            <hr/>
            <span>Município de {prov.nomemunicipio} </span>  <span>Bairro {prov.nomebairro}<br></br></span> 
            <hr/>
            <span>Nome da Rua {prov.nomerua} </span> 
            <hr/>
            <div className={`flex justify-end`}>
            <button className="my-2 bg-red-600 rounded-md shadow-sm mx-2 p-1 flex justify-end items-end">Caracteristicas</button>
          <button className="my-2 bg-indigo-600 rounded-md p-1 shadow-sm flex justify-end items-end "> Historial</button> 
            </div>
            </div>
           
            
                
                </li>
        )})} 
    
     

    return (

        <div className={`container mx-auto shadow-md flex flex-col `}>
        <div className=" shadow-md">
            <h1 className={`bg-white h-10 py-2 font-extrabold pl-5 shadow-inner text-indigo-900`}>

                DETALHES DO(A) SENHOR(A)- <span className="text-yellow-400 uppercase">
                    {nome} - <span className="text-green-500 ">Apelido.:</span>  {apelido}</span></h1>
            <hr />
            
    <ul>{Pessoastodoas()}</ul>
          
            </div>
        </div>
    )
}