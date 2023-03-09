import Titulo from "./Titulo";

interface CabecalhoProps{
    titulo:string
    subtitulo: string
}
export default function Cabecalho(props:CabecalhoProps){

    return (

        <div className="container mx-auto pr-4">
            <Titulo titulo = {props.titulo} subtitulo={props.subtitulo}   />
        </div>
    )
}