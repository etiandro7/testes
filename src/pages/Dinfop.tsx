import Layout from '../components/template/Layout'

export default function Dinfop() {
  return (
     <div className={``}>
       <Layout titulo="DINFOP" subtitulo="DEPARTAMENTO DE INFORMAÇÕES POLICIAIS">
       <div className={`flxe`}>
               <button className={` bg-gray-200 text-black shadow rounded- rounded-t-md p-1 mr-1  font-light`}>Boletim de Registo</button>
               <button className={` bg-gray-200 text-black shadow rounded- rounded-t-md p-1 mr-1  font-light`}>Massivo</button>
               <button className={` bg-gray-200 text-black shadow rounded- rounded-t-md p-1 mr-1  font-light`}>Ocorrências</button>
              
            </div>
            <hr></hr>
       </Layout>
    </div>
  )
}
