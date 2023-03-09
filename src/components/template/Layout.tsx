import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import Topo from "./Topo";
import Forcar from '../Context/Forcar'
import Image from "next/image";


interface LayoutProps{
    titulo:string
    subtitulo:string
    children?:any
}

export default function Layout(props: LayoutProps)
{

    return (

        <div className={`w-full`}>
            <Topo texto={`Comando Municipal`}/>
            <div className={`flex h-wull w-full `}>
            
             <div className={`flex flex-col w-full bg-fundo-pna bg-no-repeat bg-fixed bg-bottom-center bg-gray-50`}>
             <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            
             <Conteudo>
                 <div className={`h-full container mx-auto`}>
               {props.children}
               </div>
            </Conteudo>
             <Rodape texto="2022" rodape="."/>
            </div>
            </div>

        </div>

    )
}