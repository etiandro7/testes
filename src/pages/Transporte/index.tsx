import rota from 'next/router'
import Layoutmunicipal from '../../components/template/Layoutmunicipal'
import  {Servico,setadireita,Global,Grupo,Procurar,Comando,Menu,IconUser} from './../../components/icons/'
import Veiculo from '../Outros/Veiculo'

import Uloago  from '../../components/Context/UsuarioAuth'
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import Image from 'next/image'

export default function Diip() {
     const Logado = UsuarioLogado()
  const logado = Uloago()
 

  return (
       <Layoutmunicipal titulo={Logado.sigla} subtitulo={Logado.Nomeorgao}> 
       <div className="flex flex-wrap gap-2 flex-1 mt-3 justify-between content-between">
      
       </div>
       </Layoutmunicipal>

  )
}

