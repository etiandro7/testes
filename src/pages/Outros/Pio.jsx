import { useEffect, useState } from 'react'
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import image from 'next/image'


export default function Pio() {
    const [Nomepessoa, setNomepessoa] = useState('')
    const [Nascimento, setNascimento] = useState('')
    const [Tipopessoa, setTipopessoa] = useState('PIO')
    const [Apelido, setApelido] = useState('')
    const [Estado_civil, setEstado_civil] = useState('')
    const [Sexo, setSexo] = useState('')
    const [Altura, setAltura] = useState('')
    const [NBI, setNBI] = useState('')
    const [Pai, setPai] = useState('')
    const [Mae, setMae] = useState('')
    const [Provincias, setProvincias] = useState([])
    const [Municipios, setMunicipios] = useState([])
    const [Bairro, setBairro] = useState([])
    const [Rua, setRua] = useState([])


    const [foto, setfoto] = useState('')
    const [fotosel, setfotosel] = useState(false)

    const [Nacionalidade, setNacionalidade] = useState('')
    const [Idprovincia, setIdprovincia] = useState(0)
  
    const [Idmunicipio, setIdmunicipio] = useState(0)
    const [Idbairro, setIdbairro] = useState(0)
    const [Idrua, setIdrua] = useState(0)
    const [Proximo, setProximo] = useState('')
    const [Profissao, setProfissao] = useState('')
    const [Contacto, setContacto] = useState('')


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

    useEffect(()=>{
        fetch('http://localhost:3000/api/Outros/Provincia')
        .then(res =>res.json())
        .then(setProvincias)
       },[]) 

    



    useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Municipio?Idprovincia=${Idprovincia}`)
        .then(res =>res.json())
        .then(setMunicipios)
       },[Idprovincia]) 


       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Bairro?Idmunicipio=${Idmunicipio}`)
        .then(res =>res.json())
        .then(setBairro)
       },[Idmunicipio]) 

       useEffect(()=>{
        fetch(`http://localhost:3000/api/Outros/Rua?Idbairro=${Idbairro}`)
        .then(res =>res.json())
        .then(setRua)
       },[Idbairro]) 




       function ProvinciaTodas(){
        return Provincias?.map(prov =>{return (
            <option key={prov.idprovincia}value={prov.idprovincia}>{prov.nomeprovincia}</option>
        )})}

      
        function ProvinciaBairro(){
            return Bairro?.map(prov =>{return (
                <option key={prov.idbairro}value={prov.idbairro}>{prov.nomebairro}</option>
            )})}
            function ProvinciaRua(){
                return Rua?.map(prov =>{return (
                    <option key={prov.idrua}value={prov.idrua}>{prov.nomerua}</option>
                )})}

        function ProvinciaMunicipio(){
            return Municipios?.map(prov =>{return (
                <option key={prov.Idmunicipio}value={prov.Idmunicipio}>{prov.nomemunicipio}</option>
            )})}

    function Salvar() {
        fetch('../api/Outros/Vitima',
            {
                method: 'POST',
                body: JSON.stringify({ Nomepessoa,
                     Tipopessoa,
                      Apelido, Estado_civil, 
                       Sexo, Nascimento,
                        Altura, NBI, Pai, Mae, Nacionalidade,
                           Idprovincia, Idmunicipio, 
                           Idbairro, Idrua, Proximo, Profissao,
                             Contacto ,foto})
            })
    }

    return (
        <div className={`container mx-auto shadow-md flex flex-col w-full`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-3 font-extrabold pl-5 shadow-inner text-gray-50`}>
                    Registo do Intervenientes do Acidente</h1>
                <hr />


                <div className={`flex flex-row w-full justify-end items-end `}>
               
                    <div className={`flex relative flex-row flex-wrap m-7  w-40  bg-gray-50 shadow-xl rounded-lg h-40  border-2 border-black border-dashed`}>

                       {!fotosel?(
                           <>
                           <label htmlFor="imagem">
                           <image src="/logo.png"
                           accept=""
                           alt=""  
                           draggable={false} 
                           className={` bg-green-100 shadow-md rounded-lg cursor-pointer`} />
                                                  
                           </label>
                           <input id="imagem" type="file" className="hidden"
                           onChange={carregarFoto}></input>
                        </>   
                       ):(
                           <>
                           <span className="-right-0 absolute z-10 bg-gray-800 text-white font-bold rounded-full px-1.5 cursor-pointer"
                           onClick={()=>setfotosel(false) 
                           }>X</span>
                        <image src={foto} alt ="sem foto" className={`w-full h-full  bg-green-100 shadow-md rounded-lg`} />
                       </>)}
                   
                    </div>
                </div>



                <div className={`flex`}>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Nome Completo"
                            valor={Nomepessoa}
                            valorMudou={setNomepessoa}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Apelido"
                            valor={Apelido}
                            valorMudou={setApelido}
                        />
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Filiação "
                            valor={Pai}
                            valorMudou={setPai}

                        />
                    </div>
                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Nome da Mãe"
                            valor={Mae}
                            valorMudou={setMae}
                        />
                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Data de Nascimento"
                            valor={Nascimento}
                            valorMudou={setNascimento}
                            tipo="date"
                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Genero</label>
                        <select name={Sexo} onChange={(e)=>setSexo(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Masculino</option>
                            <option value="F">Fmenino</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Estado Civil</label>
                        <select name={Estado_civil} onChange={(e)=>setEstado_civil(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Solteiro(a)</option>
                            <option value="F">Casado(a)</option>
                            <option value="F">Viúvo(a)</option>
                            <option value="F">Divorciado(a)</option>
                        </select>

                    </div>
                </div>
                <div className={`flex`}>
                    <div className={`flex flex-col w-1/5`}>
                        <Entrada label="Altura"
                            valor={Altura}
                            valorMudou={setAltura}

                        />
                    </div>

                    <div className={`flex flex-col w-1/2`}>
                        <Entrada label="Nº do Documento"
                            valor={NBI}
                            valorMudou={setNBI}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Nacionalidade</label>
                        <select name={Nacionalidade} onChange={(e)=>setNacionalidade(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="Angolano">Angolano(a)</option>
                            <option value="Estrangeiro">Estrangeiro(o)</option>
                        </select>
                    </div>
                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Provincia</label>
                        <select name={Idprovincia} onChange={(e)=>setIdprovincia(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value=".">Selecionar a Provincia </option>
                            {ProvinciaTodas()}
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Município</label>
                        <select name={Idmunicipio} onChange={(e)=>setIdmunicipio(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                             <option value=".">Selecionar a Município </option>
                            {Idprovincia!=0? ProvinciaMunicipio():false}
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Bairro</label>
                        <select name={Idbairro} onChange={(e)=>setIdbairro(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                             <option value=".">Selecionar a Bairro </option>
                            {Idmunicipio!=0? ProvinciaBairro():false}
                        </select>
                    </div>


                </div>
                <div className={`flex`}>
                <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Rua </label>
                        <select name={Idrua} onChange={(e)=>setIdrua(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                             <option value=".">Selecionar a Rua </option>
                            {Idbairro!=0? ProvinciaRua():false}
                        </select>
                    </div> 
                    <div className={`flex flex-col w-1/3`}>
                        <Entrada label="Contacto"
                            valor={Contacto}
                            valorMudou={setContacto}

                        />
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Profissão</label>
                        <select name={Profissao} onChange={(e)=>setProfissao(e.target.value)}
                            className={`mt-1 border  mx-3 py-2 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Pedreiro </option>
                            <option value="F">Maconheiro</option>
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