
import Selecionar from 'react-select'
interface SelectProps{
    label:string
    valor:any
    obrigatorio?:boolean
    valorMudou:(novovalor:any) => void
    className?:any
     options?:any[]
}
export default function Select(props: SelectProps)
{
    return(
        <div>
            <h1 className={`mx-3  font-semibold text-gray-700`}>{props.label}</h1>
               <Selecionar options={props.options} 
                className={`font-extralight  mx-1 px-1 rounded-md py-1
                focus:border-blue-500 focus:outline-none`}
               />
               
        </div>
    )
}