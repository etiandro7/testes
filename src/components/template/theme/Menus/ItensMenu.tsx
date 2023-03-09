import Menugeral from "./Menugeral"

function ItensMenu() {
  return (
    <ul className='flex gap-1  justify-end w-full'>
                      <Menugeral  url='/Comando' texto='Principal'/>
                      <Menugeral  url='/Comando/Vitima' texto='Registo de Q. Criminal'/>
                       <Menugeral  url='/Comando/Acidentes' texto='Registo de Acidente'/>
                       <Menugeral  url='/Comando/Apreensao' texto='Registo de Apreensão'/>
                       <Menugeral  url='/Comando/Acidentes' texto='Registo de Detenção'/>
                       <Menugeral  url='/Comando/Acidentes' texto='Registo de Entregas'/>
    </ul>
  )
}

export default ItensMenu