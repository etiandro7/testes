import { useState } from "react"
import Entrada from '../../components/formcomp/Entrada'
import Botao from '../../components/formcomp/Botaosalvar'
import UsuarioLogado from '../../components/Context/UsuarioAuth'
import image from "next/image"

export default function Perfil(){


   const  Ulogogo = UsuarioLogado()
    const [foto, setfoto] = useState('')
    const [fotosel, setfotosel] = useState(false)
    const [utilizador, setutilizador] = useState(Ulogogo.usuario)
    const [Missao, setMissao] = useState(false)
    const [Valor, setValor] = useState(false)
    const [Objectivo, setObjectivo] = useState(false)

    const [senha, setsenha] = useState(Ulogogo.senha)
    //const [fotosel, setfotosel] = useState(false)
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


    return (
        <div className="container mx-auto  w-4/5 bg-white shadow-xl">
<div className={`flex flex-row w-4/4 justify-center items-center mt-5`}>
               
               <div className={`flex relative flex-row flex-wrap   w-48
                 shadow-inner rounded-full h-48 p-4  `}>

                  {!fotosel?(
                      <>
                      <label htmlFor="imagem">
                      <image src="./logo.png" 
                    
                      accept=""
                      alt=""  
                      draggable={false} 
                      className={` bg-green-100 shadow-2xl rounded-full cursor-pointer`} />
                                             
                      </label>
                      <input id="imagem" type="file" className="hidden"
                      onChange={carregarFoto}></input>
                   </>   
                  ):(
                      <>
                      <span className="-right-0 absolute z-10 bg-gray-800 text-white font-bold rounded-full px-1.5 cursor-pointer"
                      onClick={()=>setfotosel(false) 
                      }>X</span>
                   <image src={foto}   className={`rounded-full shadow-inner bg-red-100  `} />
                  </>)}
              
               </div>
               </div>
             
        <div className="flex w-ful">
               <div className="flex flex-col w-4/12">
                   <Entrada label="CATEGORIA" somenteleitura texto="Agente de 1?? Classe" 
                   valor={Ulogogo.Patente}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-full">
                   <Entrada label="NOME COMPLETO" somenteleitura texto="Eus??bio Dias Feliciano de Carvalho" 
                    valor={Ulogogo.Nomecompleto}
                   className={'py-2 bg-gray-50 font-extralight' }>
                          
                   </Entrada>
               </div>
              
               
               </div>
           
               <hr></hr>
               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="??RG??O DE COLOCA????O" somenteleitura
                    valor={Ulogogo.Nomeorgao}
                   texto="DEPARTAMENTO DE TELECOMUNICA????O E TECNOLOGIA DE INFORMA????O" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-4/12">
                   <Entrada label="SEC????O/UNIDADE POLICIAL" 
                    valor={Ulogogo.Nomeesquadra}
                   somenteleitura texto="SEC????O DE TECNOLOGIA E INFORMA????O" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
              
               
               </div>

               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="FUN????O " somenteleitura texto="CHEFE DO DEPARTAMENTO" 
                    valor={Ulogogo.Funcao}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-4/12">
                   <Entrada label="N??VEL DE ACESSO " somenteleitura texto="ESPECIALISTA " 
                    valor={Ulogogo.Nivelacesso}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
            
               
               </div>

               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="NOME DE USU??RIO " 
                   
                   valor={utilizador} valorMudou={setutilizador} texto="MARIANO.PEDRO" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-4/12">
                   <Entrada label="Senha do Sistema" valor={senha} valorMudou={setsenha} texto="ESPECIALISTA " tipo="password" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
            
               
               </div>

               <div className={`flex justify-end`}>
                    <Botao>Alterar Dados</Botao>
                   
                </div>
                <hr/>

                <ul className="flex flex-col ">
                     <li className="cursor-pointer" onClick={()=>{!setMissao(true)
                    setValor(false)
                    setObjectivo(false)
                     }}> 
                     
                     <p className="bg-blue-600 text-2xl font-extrabold p-2 rounded-sm shadow-lg">Miss??o </p>
                     {Missao?<>
                     <span className="text-justify mx-2 mr-5 bg-white box-border">
                     garantia da ordem, a defesa da seguran??a e tranquilidade p??blica,
                      fazer cumprir as leis, o seguramentoe procte????o e garantir ao cidad??o 
                      o exerc??cio dos direitos e garantias fundamentais previstos na constitui????o 
                      da rep??blica, institui????es e os respectivos bens, contra a 
                     criminalidade violenta ou organizada e outros tipos de amea??as e riscos
                     </span>
                     </> :null}
                     </li>  
                     <li className="cursor-pointer" onClick={()=>{setMissao(false)
                    setValor(false)
                    setObjectivo(true)
                     }}> 
                         <p className="bg-green-600 text-2xl font-extrabold p-2 rounded-sm shadow-lg" >Objectivos </p>
                         {Objectivo? <> 
                     <span className="text-justify bg-white">
                        1)	Contribur para a identifia????o dos problemas e promover solu????es sustent??veis, que posoam melhor prevenir a prolifera????o de crime, das incivilidades, da desordem p??blica do medo e da inseguran??a;<br/>
                        2)	Melhorar a sensa????o de seguran??a entre a popula????o;<br/>
                        3)	Aumentar o n??vel de satisfa????o da comunidade com rela????o ?? interven????o da pol??cia e estimular a participa????o dos cidad??os na produ????o de seguran??pa atraves das suas iniciativas para o contacto com a pol??cia tornando as ac????es policiais mas eficaz para prevenir o crime;<br/>
                        4)	Melhorar a capaciadde de preven????o e resolu????o dos problemas relacionados com a seguran??a p??blica;<br/>
                        5)	Contribuir para a melhoria da qualidade de vida da comunidade.<br/>

                     </span> 
                     </> :null}
                     </li> 
                     <li className="cursor-pointer" onClick={()=>{setMissao(false)
                    setValor(true)
                    setObjectivo(false)
                     }}> 
                         <p className="bg-yellow-600 text-2xl font-extrabold p-2 rounded-sm shadow-lg">Valor </p>
                         {Valor ? <> <span className="text-justify bg-white">
                      Desenvolver actitudes deontol??gicas que se basea na ??tica, na moral, na disciplina, no respeito ao proximo e nas rela????es inter-pessoais.
                      </span>   </> :null}
                     </li> 
                </ul>

                <button onClick={()=> Ulogogo.Logout()}>Terminar Sess??o</button>
               
        
        </div>
    )
}