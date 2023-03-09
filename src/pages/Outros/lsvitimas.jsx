import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import image from 'next/image'


export default function Buscar() {
    const [buscar, setbuscar] = useState('')
    const [apelido, setapelido] = useState('')
    const [Todos,setTodos]=useState([])
    const [Msel,setMsel]=useState(0)

    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/buscar?buscar=${buscar}`)
        .then(res =>res.json())
        .then(setTodos)
       },[buscar]) 



       function pessoa(){
           let cor =""
        return Todos?.map(m =>{return (
            <li key={m.idpessoa} className="flex flex-col border-2 m-1 h-auto w-1/2  rounded-2xl mx-1">
               <image src={m.foto} alt="sem Foto" className="shadow-xl border-indigo-100 border-2 h-40 w-full rounded-2xl flex flex-col justify-center items-center"/>
        
               
               <span className={`font-light text-white bg-red-900`}> Categoria: {m.Tipopessoa} </span> 
               <span className="font-light"> Nome Completo:</span> {m.Nomepessoa} 
               <span className="font-light"> Apelido:</span> {m.Apelido} 
               <span>Provincia.: {m.nomeprovincia}</span>
               <span>Município.: {m.nomemunicipio}</span>
            </li>
        )})}
 




    function Salvar() {
        fetch('../api/Outros/TipologiaCriminal',
            {
                method: 'POST',
                body: JSON.stringify({ Crimes, Msel })
            })
    }


   
    return (
        
        <div className="h-auto w-9/12 fixed flex justify-center items-center">
            
        <div className={`container w-screen shadow-md flex flex-col`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-3 font-extrabold pl-5 shadow-inner text-gray-50`}>
                    FORMULÁRIO DE PESQUISA DE PDS, PIOS, ACUSADOS </h1>
                <hr />
             
              <Entrada label="PROCURAR DE PDS, PIOS, ACUSADOS"
              value={buscar} valorMudou={setbuscar}
              />
               <hr className="m-2 border-indigo-900 border-1"/>
               <input type="radio" name="pessoa" className="mx-3"/>Vitima
               <input type="radio" name="pessoa"className="mx-3" />Acusado
               <input type="radio" name="pessoa" className="mx-3"/>PIOS
               <input type="radio" name="pessoa" className="mx-3"/>PDS

               <hr className="m-2 border-indigo-900  border-1"/>
              <ul className="flex flex-row justify-center items-center">  {Msel==0? pessoa():false}</ul>
            </div>

        </div>
        </div>
    )
}