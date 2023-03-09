
interface TituloProps{
    titulo:string
    subtitulo: string
}
export default function Titulo(props: TituloProps){
    return (
      <div>
        <h1 className={`font-black text-3xl text-blue-900 text-right `}>{props.titulo}</h1>
        <h2 className={`font-semibold drop-shadow-lg text-sm text-gray-600 text-right`}>{props.subtitulo}</h2>
     </div>
    )
}