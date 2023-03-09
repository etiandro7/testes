import rota from 'next/router'
import Layout from '../components/template/Layout'
import Acidentes from '../pages/Comando/Acidentes'
import Apreensao from '../pages/Comando/Apreensao'
import Buscara from '../pages/Outros/Buscar'
import Cadastro from '../pages/Outros/Usuario'
import Vitima from '../pages/Outros/Vitima'
import Perfil from '../pages/Outros/Perfil'
import Termo from '../pages/Comando/TermoEntrega'
import ListarVitmaOC from '../pages/Outros/Listar/ListarOcorrenciaVitima'
import ListarViaturaAp from '../pages/Outros/Listar/ListarViaturaApreendidas'

import { useEffect, useState } from 'react'


export default function Dinfop() {



     const [AbrirApreensoes, SetAbrirApreensoes] = useState(false)
     const [AbriCadastro, SetAbriCadastro] = useState(false)
     const [AbrirListarOcorrenciaVitima, SetAbrirListarOcorrenciaVitima] = useState(false)
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

          <Layout titulo="Operações" subtitulo="Ocorrências, Apreensões, Acidentes, Escalas">
               <div className={`flex`}>
                    <button onClick={() => {SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(true)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                      }} className={` ${abrirOcorrencia? 'bg-green-600':'bg-blue-600'} text-white shadow-xl rounded-sm  p-1 mx-0.5  font-light text-xl`}>Ocorrências</button>
               
                  <button onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(true)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbriCadastro(false)
                    
                    }}
                     className={` bg-blue-600 text-white shadow-xl-xl  rounded-sm p-1 mx-0.5  font-light`}>Acidentes</button>
                   
                    <button onClick={() => { SetAbrirApreensoes(true) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)

                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbriCadastro(false)
                    
               }} className={` bg-blue-600 text-white shadow-xl  rounded-sm p-1 mx-0.5  font-light`}>Apreensões</button>
          
                    <button   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(true)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbriCadastro(false)
                         }}
               
              
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 mx-0.5  font-light`}>Termo de Entrega</button>
          <button   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(false)
                     SetAbriCadastro(true)
                         }}
               
              
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 mx-0.5  font-light`}>Cadastro de Usuário</button>

<button 
                   onClick={() => { SetAbrirApreensoes(false) 
                    SetAbrirTermodeEntrega(false)
                    SetAbrirAcidentes(false)
                     SetAbrirOcorrencia(false)
                     SetBuscar(false)
                     SetAbrirListarOcorrenciaVitima(false)
                     SetAbrirApViatura(false)
                     SetPerfilA(true)
                     SetAbriCadastro(false)

                     }} 
                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 mx-0.5  font-light`}>Meu Perfil</button>

                  <button 
                   onClick={()=>rota.push('/')}

                    className={` bg-blue-600 text-white shadow-xl rounded-sm p-1 mx-0.5  font-light`}>VOLTAR</button>




               </div>
               <hr className="border-2 border-yellow-600"></hr>
               <div className="mt-4">
                    {abrirOcorrencia?
                    <Vitima></Vitima>:false
                    
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
  {AbrirTermodeEntrega?
                    <Termo ></Termo >:null
                    }
 {/*AbrirListarOcorrenciaVitima?
                    <ListarVitmaOC ></ListarVitmaOC >:null
               */}
 {AbrirApViatura?
                    <ListarViaturaAp ></ListarViaturaAp >:null
                    }
 {PerfilA?
                    <Perfil></Perfil>:null
                    }

{AbriCadastro?
                    <Cadastro></Cadastro>:null
                    }
               </div>


          </Layout>

     )
}

