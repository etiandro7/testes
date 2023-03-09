import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import Topo from "./Topo";
import Menulateral from "./Menulateral";



interface LayoutProps{
    titulo:string
    subtitulo:string
    children?:any
}

export default function Layout(props: LayoutProps)
{

    return (
        <div className={`w-full  bg-gray-700`}>        
           <div className={`flex  w-full`}>  
           <Menulateral/>            
             <div className={`flex flex-col w-full h-screen bg-fundo-pna bg-no-repeat bg-fixed bg-bottom-center bg-gray-50`}>
             <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
             <Conteudo>
            <div className={`h-screen container mx-auto`}>
               {props.children}
               </div>
            </Conteudo>
           
            </div>
            </div>
           

        </div>

    )
}