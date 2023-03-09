import Elemento from '../components/formcomp/Elemento'
import rota from 'next/router'
import Layout from '../components/template/Layout'
import  {Servico,setadireita,Global,Grupo,Procurar,Comando,Menu,IconUser} from '../components/icons'
import Uloago from '../components/Context/UsuarioAuth'

export default function Home() {

  const logado = Uloago()
   const depatamentos ={
      elementos:[
        {
          titulo:"Meu Perfil",
          foto:IconUser,
          fotobotao:Menu,
          texto:'Posto: '+logado.Patente+' - '+logado.Nomecompleto ,
          clicar: ()=>rota.push('/Outros/Perfil'),
          cor:'red'
        }, {
        titulo:"Consulta Dados",
        foto:Global,
        fotobotao:Menu,
        texto:' Consultas Geral',
        clicar: ()=>rota.push('/Global'),
        cor:'blue'
      },
      {
         titulo:"Comando Municipal",
         foto:Comando,
         fotobotao:Menu,
         texto:' Consultas Geral',
         clicar: ()=>rota.push('/Comando'),
         cor:'blue'
       },
       {
         titulo:"DSPO",
         foto:Comando,
         fotobotao:Menu,
         texto:'Depaertamento de Segurança Pública e Operações.',
         clicar: ()=>rota.push('/Dspo'),
         cor:'blue'
       },
       {
         titulo:"D.T",
         foto:Servico,
         fotobotao:Menu,
         texto:'Departamento do Transporte.',
         clicar: ()=>rota.push('/Transporte'),
         cor:'blue'
       }, 
       {
         titulo:"DEP",
         foto:Servico,
         fotobotao:Menu,
         texto:'Departamento Estudo e Planeamento .',
         clicar: ()=>rota.push('/Diip'),
         cor:'red'
       }, 
      
   ]
   
   }

   const Elem = ()=>{
    return (
      depatamentos.elementos.map(todos =><Elemento key={todos.titulo} titulo={todos.titulo} foto={todos.foto} 
      fotobotao={todos.fotobotao} click={todos.clicar} >{todos.texto}</Elemento>)
    )
  }


  return (
     <div className={``}>
       <Layout titulo="SIGPOL" subtitulo="Sistema Integrado de Gestão Policial">
   <h3 className='text-1xl font-extrabold text-blue-900 px-3 border-l-8 border-gray-700 text-left shadow-inner py-2'>
    MÓDULO DE TRABALHO</h3>
   <hr />
   <div className="flex flex-wrap gap-2 flex-1 mt-3 justify-between content-between">
       {Elem()}
      </div>
          
       </Layout>
    </div>
  )
}
