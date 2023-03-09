import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import Image from 'next/image'


export default function Usuario() {
    const [Nomecompleto, setNomecompleto] = useState('')
    const [usuario, setusuario] = useState('')
    const [Patente, setPatente] = useState('')
    const [confirmar, setconfirmar] = useState('')
    const [Senha, setSenha] = useState('')
    const [Nivelacesso, setNivelacesso] = useState('Selecionar o Nível')
    const [Funcao, setFuncao] = useState('')
    const [idorgao, setidorgao] = useState(0)
    const [Orgao,setOrgao]= useState([])
    const [IdEsquadra, setIdEsquadra] = useState(0)
    const [Esquadra, setEsquadra] = useState([])
    const [Provincias, setProvincias] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Idprovincia, setIdprovincia] = useState(0)
    const [Idmunicipio, setIdmunicipio] = useState(0)

    const [foto, setfoto] = useState('')
    const [fotosel, setfotosel] = useState(false)

    function carregarFoto(e)
{
    if(e.target.files && e.target.files[0])
    {
        let reder = new FileReader()
        reder.onload = function(e){
            setfoto(e.target.result)
            setfotosel(true)
        }
         reder.readAsDataURL(e.target.files[0])
    }
}



useEffect(() => {
    fetch(`http://localhost:3000/api/Outros/Provincia`)
        .then((res) => res.json())
        .then(setProvincias)
}, [])

useEffect(() => {
    fetch(
        `http://localhost:3000/api/Outros/Municipio?Idprovincia=${Idprovincia}`
    )
        .then((res) => res.json())
        .then(setMunicipios)
}, [Idprovincia])


    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Orgao`)
        .then(res =>res.json())
        .then(setOrgao)
       },[idorgao]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Esquadra?idorgao=${idorgao}`)
        .then(res =>res.json())
        .then(setEsquadra)
       },[idorgao]) 

       function Orgao_todos(){
        return Orgao?.map(prov =>{return (
            <option key={prov.idorgao}value={prov.idorgao}>{prov.sigla}-{prov.Nomeorgao}</option>
        )})}

        function Orgao_Esquadras(){
            return Esquadra?.map(prov =>{return (
                <option key={prov.idesquadra}value={prov.idesquadra}>{prov.Nomeesquadra}</option>
            )})}


            function ProvinciaMunicipio() {
                return Municipios?.map((prov) => {
                    return (
                        <option key={prov.Idmunicipio} value={prov.Idmunicipio}>
                            {prov.nomemunicipio}
                        </option>
                    )
                })
            }

            function ProvinciaTodas() {
                return Provincias?.map((prov) => {
                    return (
                        <option key={prov.idprovincia} value={prov.idprovincia}>
                            {prov.nomeprovincia}
                        </option>
                    )
                })
            }





    function Salvar() {
        if (confirmar===Senha) {
            fetch('../api/Outros/Usuario',
            {
                method: 'POST',
                body: JSON.stringify({ Nomecompleto,
                    usuario, 
                    Senha, 
                    idorgao, 
                    IdEsquadra,
                    Patente, foto, Nivelacesso, Funcao,Idmunicipio,Idprovincia })
                })
            } else {     
            alert('Senhas diferentes verificar a senha')
        }
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-full bg-gray-50`}>
            <div className="w-full shadow-md">
            <h1 className={`relative bg-blue-900 h-10 py-3 font-extrabold pl-2 shadow-inner text-gray-500`}>REGISTO DE USUÁRIO</h1>
                <hr />


                <div className={`flex flex-row w-full justify-end items-end `}>
              
               <div className={`flex relative flex-row flex-wrap m-7  w-40  bg-gray-50 shadow-xl rounded-lg h-42  border-2 border-black`}>

                  {!fotosel?(
                      <>
                      <label htmlFor="imagem">
                      <Image src="/logo.png"
                      accept=""
                      alt="" 
                      width={150} 
                      height={150}
                      draggable={false} 
                      className={`shadow-md rounded-lg cursor-pointer`} />
                                             
                      </label>
                      <input id="imagem" type="file" className="hidden"
                      onChange={carregarFoto}></input>
                   </>   
                  ):(
                      <>
                      <span className="-right-0 absolute z-10 bg-gray-800 text-white font-bold rounded-full px-1.5 cursor-pointer"
                      onClick={()=>setfotosel(false) 
                      }>X</span>
                   <Image src={foto} className={`w-full h-full  bg-green-100 shadow-md rounded-lg`}
                    alt ="Sem foto"
                      height={150}
                      width={150}
                      />
                  </>)}
              
               </div>
           </div>
           <div className={`box-border flex w-full mx-2`}>  
                            <div className={`flex flex-col mt-2 w-1/2`}>
                                <label className={`text-gray-700 font-semibold pl-1 `}>Provincia</label>
                                <select
                                    name={Idprovincia}
                                    onChange={(e) =>
                                    setIdprovincia(e.target.value)
                                    }
                                    className={`border text-1xl rounded-md font-extralight bg-white 
                                    focus:border-blue-500  py-1.5 max-h-10   border-blue-400`}>
                                    <option value="">
                                        Selecionar a Província
                                    </option>
                                    {ProvinciaTodas()}
                                   
                                </select>
                            </div>
                            <div className={`flex flex-col mx-2 mt-2 w-1/2`}>
                                <label className={`text-gray-700 font-semibold pl-1`}>Município</label>
                                <select
                                    name={Idmunicipio}
                                    onChange={(e) =>
                                    setIdmunicipio(e.target.value)
                                    }
                                    className={`border text-1xl rounded-md font-extralight bg-white 
                                    focus:border-blue-500  py-1.5 max-h-10  mr-2 border-blue-400`}>
                                    <option value="">
                                        Selecionar a Província
                                    </option>
                                    { Idprovincia? ProvinciaMunicipio():null}
                                   
                                </select>
                            </div>
                          
                            </div>








               
                    <div className={`flex`}>
                 
                    <div className={`flex flex-col w-full`}>
                        <label className={`text-gray-700 font-semibold pl-4`}>COLOCAÇÃO</label>
                        <select name={idorgao} onChange={(e)=>setidorgao(e.target.value)}
                        className={`border text-1xl rounded-sm font-extralight bg-white 
                        focus:border-blue-500  py-1.5 max-h-10 mx-2  border-blue-400`}>
                        <option value="">Selecionar a Colocação</option>
                        {Orgao_todos()}
                    </select>
                    </div>
                    <div className={`flex flex-col w-1/2`}>
                        <label className={`text-gray-700 font-semibold pl-4`}>Secção / Esqudras</label>
                        <select name={IdEsquadra} onChange={(e)=>setIdEsquadra(e.target.value)}
                        className={`border text-1xl rounded-md font-extralight bg-white 
                                    focus:border-blue-500  py-1.5 max-h-10 mx-2  border-blue-400`}>
                        <option value="">Selecionar Secção</option>
                        {idorgao!=0? Orgao_Esquadras():false}
                        </select>

                    </div>
                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/3`}>
                        <label className={`text-gray-700 font-semibold pl-4`}>Patente</label>
                        <select name={Patente}  onChange ={(e)=>setPatente(e.target.value)}
                            className={`border text-1xl rounded-md font-extralight bg-white 
                            focus:border-blue-500  py-1.5 max-h-10 mx-2  border-blue-400`}>
                            <option value="">Selecionar a Patente</option>
                            <option value="Comissário - Chefe">Comissário - Chefe</option>
                            <option value="Comissário">Comissário</option>
                            <option value="Subcomissário">Subcomissário</option>
                            <option value="Superintendente - Chefe">Superintendente - Chefe</option>
                            <option value="Superintendente">Superintendente</option>
                            <option value="Intendente">Intendente</option>
                            <option value="Inspector - Chefe">Inspector - Chefe</option>
                            <option value="Inspector">Inspector</option>
                            <option value="SubInspector">SubInspector</option>
                            <option value="1º Subchefe">1º Subchefe</option>
                            <option value="2º Subchefe">2º Subchefe</option>
                            <option value="3º subchefe">3º subchefe</option>
                            <option value="Agente de 1ª Classe<">Agente de 1ª Classe</option>
                            <option value="Agente de 2ª Classe">Agente de 2ª Classe</option>
                            <option value="Agente">Agente</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Nome Completo"
                            valor={Nomecompleto}
                            valorMudou={setNomecompleto}

                        />
                        </div>
                   





                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-full`}>
                        <Entrada label="Nome do Usuário"
                            valor={usuario}
                            valorMudou={setusuario}
                           
                        />
                    </div>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Função"
                            valor={Funcao}
                            valorMudou={setFuncao}
                            
                        />
                    </div>
                </div>
               
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Palavra Passe"
                            valor={Senha}
                            valorMudou={setSenha}
                            tipo="password"
                        />
                    </div>

                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Confirmar"
                            valor={confirmar}
                            valorMudou={setconfirmar}
tipo="password"
                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`text-gray-700 font-semibold pl-4`}>Nível de Acesso</label>
                        <select
                            className={`border text-1xl rounded-md font-extralight bg-white 
                            focus:border-blue-500  py-1.5 max-h-10 mx-2  border-blue-400`}>
                            <option value="M">Selecionar o Nível</option>
                            <option value="Administrador">Administrador(a)</option>
                            <option value="Especialista">Especialista</option>
                            <option value="Convidado">Convidado</option>

                        </select>
                    </div>
                </div>
              

                <div className={`flex justify-end`}>
                    <Botao onclick={Salvar}>Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>
            </div>
        </div>
    )
}