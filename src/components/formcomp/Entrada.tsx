interface EntradaProps{
    label:string
    valor?:any
 
    tipo?:'text'| 'email'|'password'|'date'|'number'|'time'
    valorMudou?:(novovalor:any) => void
    className?:any
    somenteleitura?:any
    texto?:string
  
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col mt-1 px-2`}>
             <label className={`text-gray-700  font-semibold`}>{props.label}</label>
                 <input type={props.tipo ?? 'text'}  
                 value={props.valor}
                 readOnly={props.somenteleitura}
                 onChange={e=>props.valorMudou?.(e.target.value)}
                 placeholder={props.texto}
                 className={`border rounded text-1xl px-1  font-extralight border-gray-400
                  focus:border-gray-400 focus:ring-1 focus:border-opacity-0 focus:rounded
                 focus:outline-none py-1   ${props.className}`}
                 
                 />
              
        </div>
    )
}