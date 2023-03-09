import Link from 'next/link'
interface MenuItemProps{

    url:string
    texto:string
    icone?:any
}

export default function Menugeral(props: MenuItemProps){
    return (
             <li className={`bg-gradient-to-tr from-indigo-900 to-yellow-600  py-1 rounded-sm text-white`}>
               <Link href={props.url}>
                   <a className={`flex justify-start items-center`}>
                        <span className={`text-sm mx-2 font-light font-serif`}>
                            {props.texto}
                        </span>
                   </a>  
                   </Link>
             </li>
        
    )
}