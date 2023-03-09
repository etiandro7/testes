interface BotaoProps{
    children:any
    className?:string
    cor?:'blue'|'red'
    onclick?: ()=>void
  
}

export default function Botao(props: BotaoProps){
const cor = props.cor ?? 'blue'
    return(
           <button onClick = {props.onclick} className={`text-white px-3 py-2 font-semibold  rounded-full h-10 w-16
             bg-${cor}-500  transform hover:scale-105
           ${props.className}`}>
            {props.children}
            </button>  
    )
}