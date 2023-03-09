interface ElementoProps{
    children:any
    className?:string
    cor?:'blue'|'red'
    click?: ()=>void
    titulo:any
    foto:any
    fotobotao:any

  
}

export default function Elementos(props: ElementoProps){
    const cor = props.cor?? 'blue'
    return(
           <div className={`text-gray-800 font-light flex flex-col shadow-lg  py-26 w-1/5 flex-grow p-2 relative bg-white border-2 box-border`}>
               
               <div className="rounded-full bg-blue-900 px-1 py-1 h-12 w-12 flex gap-2 items-center whitespace-nowrap ">
               <span className="text-yellow-500 animate-pulse "> {props.foto}</span>
               <span className="text-1xl font-black text-yellow-700 uppercase"> {props.titulo}</span>
                </div>
               <div className="-mt-12 py-12">
                 {props.children}
                </div>
            <button className={`bg-${cor}-500 text-white shadow-xl p-1 rounded-sm 
             self-start items-start absolute bottom-1`}>
            <div className="flex text-justify gap-1 font-light" onClick = {props.click}>
            {props.fotobotao} Entrar 
                </div>
            </button>
            </div>
              
      
    )
}