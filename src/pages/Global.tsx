
import Layout from '../components/template/Layout'
import rota from 'next/router'
import Acidentes from './Comando/Acidentes'
import Apreensao from './Comando/Apreensao'
import Buscara from './Outros/Buscar'
import Vitima from './Outros/Vitima'
import Perfil from './Outros/Perfil'
import Termo from './Comando/TermoEntrega'
import ListarVitmaOC from './Outros/Listar/ListarOcorrenciaVitima'
import ListarViaturaAp from './Outros/Listar/ListarViaturaApreendidas'
import ListarMotorizada from './Outros/Listar/ListarMotorizadaApreendidas'
import ListarAcusado from './Outros/Listar/ListarOcorrenciaAcusado'

import { useEffect, useState } from 'react'


export default function Dinfop() {


     const [AbrirApreensoes, SetAbrirApreensoes] = useState(false)
     const [AbrirMotorizada, SetAbrirMotorizada] = useState(false)
     const [Veracusados, setVerAcusados] = useState(false)
     const [AbrirApViatura, SetAbrirApViatura] = useState(false)
     const [Buscar, SetBuscar] = useState(false)
     const [abrirOcorrencia, SetAbrirOcorrencia] = useState(false)
     const [AbrirAcidentes, SetAbrirAcidentes] = useState(false)
     const [AbrirTermodeEntrega, SetAbrirTermodeEntrega] = useState(false)
     const [PerfilA, SetPerfilA] = useState(false)
     const [Logout, SetLogout] = useState(false)
     const [cor, Setcor] = useState('blue')
     const [vprovincia, setVprovincia] = useState()
     return (

          <Layout titulo="DADOS GERAIS" subtitulo="Consultas Gerais no Sistema">
               <div className={`flex`}>
        
                   
                    <button 
                   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(true)
                     setVerAcusados(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbrirMotorizada(false)
                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 m-0.5 font-light`}>
                    Todos Registados</button>

<button 
                   onClick={() => {SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(true)
                     SetBuscar(false)
                     setVerAcusados(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbrirMotorizada(false)
                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 m-0.5 font-light`}>
                         Vítima e Ocorrências</button>
<button 
                   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     setVerAcusados(false)
                     SetAbrirApViatura(true)
                     SetPerfilA(false)
                     SetAbrirMotorizada(false)

                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 m-0.5  font-light`}>Viaturas Apreendidas</button>
<button 
                   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     setVerAcusados(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbrirMotorizada(true)

                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 m-0.5  font-light`}>Motorizadas Apreendidas</button>

<button 
                   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     setVerAcusados(true)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbrirMotorizada(false)

                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 m-0.5  font-light`}>Acusados</button>
  <button 
                   onClick={()=>rota.push('/')}

                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 mx-0.5  font-light`}>VOLTAR</button>





               </div>
               <hr className="border-2 border-yellow-600"></hr>
               <div className="mt-4">
                    {abrirOcorrencia?
                    <ListarVitmaOC></ListarVitmaOC>:false
                    
                    }
                      {AbrirAcidentes?
                    <Acidentes></Acidentes>:null
                    }

{AbrirApreensoes?
                    <Apreensao></Apreensao>:null
                    }
                    {Buscar?
                    <Buscara ></Buscara >:null
                    }
  {AbrirMotorizada?
                    <ListarMotorizada ></ListarMotorizada >:null
                    }
 {Veracusados?
                    <ListarAcusado ></ListarAcusado >:null
                    }
 {AbrirApViatura?
                    <ListarViaturaAp ></ListarViaturaAp >:null
                    }
 

               </div>


          </Layout>

     )
}

