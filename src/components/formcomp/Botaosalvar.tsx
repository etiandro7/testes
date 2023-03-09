interface BotaosalvarProps{
    children:any
    className?:string
    cor?:'blue'|'red'
    onclick?: ()=>void
    foto?:any
    activado?:boolean
  
}

export default function Botaosalvar(props: BotaosalvarProps){
const cor = props.cor?? 'blue'
    return(
           <button onClick = {props.onclick} className={` text-white px-3 py-1 font-semibold 
            shadow-lg mt-3 mb-3 transform hover:scale-x-100 mr-1 bg-${cor}-600 rounded-md
           ${props.className}`}
           disabled={props.activado}
           >
            {props.foto}{props.children}
            </button>  
      
    )
}