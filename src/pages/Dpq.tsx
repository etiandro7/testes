
import Layout from '../components/template/Layout'
import Ocorrencia from './Outros/Ocorrencias'

export default function Dinfop() {
  return (
  
       <Layout titulo="DPQ" subtitulo="DEPARTAMENTO DE PESSOAL E QUADRO"> 
           <div className={`flex`}>
               <button className={` bg-white text-blue-900 shadow rounded-sm  p-1 mr-0.5  font-light`}>CADASTRO DE EFECTIVO</button>
               <button className={` bg-white text-blue-900 shadow  rounded-sm p-1 mr-0.5 font-light`}>PROMOÇÕES</button>
               <button className={` bg-white text-blue-900 shadow  rounded-sm p-1 mr-0.5 font-light`}>NOMEAÇÕES</button>
               <button className={` bg-white text-blue-900 shadow rounded-sm p-1 mr-0.5 font-light`}>PATENTEAMENTO</button>
               <button className={` bg-white text-blue-900 shadow rounded-sm p-1 mr-0.5 font-light`}>FORMAÇÕES</button>
               <button className={` bg-white text-blue-900 shadow rounded-sm p-1 mr-0.5 font-light`}>FERIAS</button>
               <button className={` bg-white text-blue-900 shadow rounded-sm p-1 mr-0.5 font-light`}>EFECTIVIDADES</button>
            </div>
            <hr className="border-2 border-yellow-600"></hr>
<div className="mt-4">
          
            </div>
            

       </Layout>

  )
}

