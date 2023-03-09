import rota from 'next/router'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import  {Servico,setadireita,Global,Grupo,Procurar,Comando,Menu,IconUser} from './../../components/icons/'

import Uloago  from '../../components/Context/UsuarioAuth'
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import Image from 'next/image'

export default function Diip() {
     const Logado = UsuarioLogado()
  const logado = Uloago()
   const depatamentos ={
      elementos:[
        {
          titulo:"SOI",
          foto:IconUser,
          fotobotao:Menu,
          texto:'Secção de Operações e Informação' ,
          clicar: ()=>rota.push('/Outros/Perfil'),
          cor:'red'
        }, {
        titulo:"SIIP",
        foto:Global,
        fotobotao:Menu,
        texto:'Secção de Investigação e Ilicitos Penais',
        clicar: ()=>rota.push('/Global'),
        cor:'blue'
      },
      {
         titulo:"SINFOP",
         foto:Comando,
         fotobotao:Menu,
         texto:' Secção de Informações Policiais',
         clicar: ()=>rota.push('/Comando'),
         cor:'blue'
       },
       {
         titulo:"Esquadra",
         foto:Comando,
         fotobotao:Menu,
         texto:'Esquadra e Posto Policial',
         clicar: ()=>rota.push('/Dspo'),
         cor:'blue'
       },
       {
         titulo:"STSER",
         foto:Servico,
         fotobotao:Menu,
         texto:'Secção de Trânsito e Segurança Rodoriária',
         clicar: ()=>rota.push('/Diip'),
         cor:'red'
       }, 
       {
         titulo:"SAS",
         foto:Servico,
         fotobotao:Menu,
         texto:'Secção Administrativa e Serviço',
         clicar: ()=>rota.push('/Diip'),
         cor:'red'
       }, 
       {
          titulo:"PDB",
          foto:Servico,
          fotobotao:Menu,
          texto:'Polícia do Bairro',
          clicar: ()=>rota.push('/Diip'),
          cor:'red'
        }, 
      
   ]
   }

  return (
       <Layoutmunicipal titulo={Logado.sigla} subtitulo={Logado.Nomeorgao}> 
       <div className="flex flex-wrap gap-2 flex-1 mt-3 justify-between content-between">
         <h1>Aqui Mesmo do Comando Municiapal</h1>
       </div>
       </Layoutmunicipal>

  )
}

