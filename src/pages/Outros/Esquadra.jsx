import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'


export default function Esquadra() {
    const [idorgao, setidorgao] = useState(0)
    const[Orgao,setOrgao]= useState([])
    const [Nomeesquadra, setNomeesquadra] = useState('')

    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Orgao`)
        .then(res =>res.json())
        .then(setOrgao)
       },[idorgao]) 




       function Orgao_todos(){
        return Orgao?.map(prov =>{return (
            <option key={prov.idorgao}value={prov.idorgao}>{prov.sigla}-{prov.Nomeorgao}</option>
        )})}




    function Salvar() {
        fetch('../api/Outros/Esquadra',
            {
                method: 'POST',
                body: JSON.stringify({ idorgao, Nomeesquadra })
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>


            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-2 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE SECÇÃO / ESQUADRAS</h1>
                <hr />
                <div className={`flex flex-col mt-2 pl-5`}>
                    <label className={`font-black mx-3`}>Órgão /Comandos/ Unidades </label>
                    <select name={idorgao} onChange={(e)=>setidorgao(e.target.value)}
                        className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                        <option value="">Selecionar o Órgão/Unidade/Comando</option>
                        {Orgao_todos()}
                    </select>
                    </div>
<div className={`flex flex-col mt-2 pl-5`}>
                <Entrada label="Nome da Seção / Esquadras"
                    valor={Nomeesquadra}
                    valorMudou={setNomeesquadra}
                />
      </div>        

                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>
            </div>
        </div>
    )
}