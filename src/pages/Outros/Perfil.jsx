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
                   <Entrada label="CATEGORIA" somenteleitura texto="Agente de 1º Classe" 
                   valor={Ulogogo.Patente}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-full">
                   <Entrada label="NOME COMPLETO" somenteleitura texto="Eusébio Dias Feliciano de Carvalho" 
                    valor={Ulogogo.Nomecompleto}
                   className={'py-2 bg-gray-50 font-extralight' }>
                          
                   </Entrada>
               </div>
              
               
               </div>
           
               <hr></hr>
               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="ÓRGÃO DE COLOCAÇÃO" somenteleitura
                    valor={Ulogogo.Nomeorgao}
                   texto="DEPARTAMENTO DE TELECOMUNICAÇÃO E TECNOLOGIA DE INFORMAÇÃO" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-4/12">
                   <Entrada label="SECÇÃO/UNIDADE POLICIAL" 
                    valor={Ulogogo.Nomeesquadra}
                   somenteleitura texto="SECÇÃO DE TECNOLOGIA E INFORMAÇÃO" 
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
              
               
               </div>

               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="FUNÇÃO " somenteleitura texto="CHEFE DO DEPARTAMENTO" 
                    valor={Ulogogo.Funcao}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
               <div className="flex flex-col w-4/12">
                   <Entrada label="NÍVEL DE ACESSO " somenteleitura texto="ESPECIALISTA " 
                    valor={Ulogogo.Nivelacesso}
                   className={'py-2 bg-gray-50 font-extralight' }>
                   </Entrada>
               </div>
            
               
               </div>

               <div className="flex w-ful">
               <div className="flex flex-col w-4/5">
                   <Entrada label="NOME DE USUÁRIO " 
                   
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
                     
                     <p className="bg-blue-600 text-2xl font-extrabold p-2 rounded-sm shadow-lg">Missão </p>
                     {Missao?<>
                     <span className="text-justify mx-2 mr-5 bg-white box-border">
                     garantia da ordem, a defesa da segurança e tranquilidade pública,
                      fazer cumprir as leis, o seguramentoe procteção e garantir ao cidadão 
                      o exercício dos direitos e garantias fundamentais previstos na constituição 
                      da república, instituições e os respectivos bens, contra a 
                     criminalidade violenta ou organizada e outros tipos de ameaças e riscos
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
                        1)	Contribur para a identifiação dos problemas e promover soluções sustentáveis, que posoam melhor prevenir a proliferação de crime, das incivilidades, da desordem pública do medo e da insegurança;<br/>
                        2)	Melhorar a sensação de segurança entre a população;<br/>
                        3)	Aumentar o nível de satisfação da comunidade com relação à intervenção da polícia e estimular a participação dos cidadãos na produção de segurançpa atraves das suas iniciativas para o contacto com a polícia tornando as acções policiais mas eficaz para prevenir o crime;<br/>
                        4)	Melhorar a capaciadde de prevenção e resolução dos problemas relacionados com a segurança pública;<br/>
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
                      Desenvolver actitudes deontológicas que se basea na ética, na moral, na disciplina, no respeito ao proximo e nas relações inter-pessoais.
                      </span>   </> :null}
                     </li> 
                </ul>

                <button onClick={()=> Ulogogo.Logout()}>Terminar Sessão</button>
               
        
        </div>
    )
}