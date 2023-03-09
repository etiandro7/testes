
interface TituloProps{
    texto:string
    rodape: string
}
export default function Titulo(props: TituloProps){
    return (
      <div className="bg-blue-900 w-full flex justify-center items-center mt-2 h-11 bottom-0">
        <h1 className={`font-black text-white`}>{props.texto}</h1>
        <h2 className={`font-semibold drop-shadow-lg text-sm text-gray-600 text-right`}>{props.rodape}</h2>
     </div>
    )
}