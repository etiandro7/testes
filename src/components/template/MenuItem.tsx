import Link from 'next/link'
interface MenuItemProps{

    url:string
    texto:string
    icone:any
    Click?: ()=>void
}

export default function MenuItem(props: MenuItemProps){
    return (
        <div className="mx-0 w-full" onClick = {props.Click}>

          <li className={`hover:bg-gray-400  text-white flex mx-0 w-full`}>
               <Link href={props.url}>
                   <a className={`flex justify-start items-center  mx-2 my-2 h-19  hover: outline-none`}>
                        {props.icone}
                        <span className={`text-xs mx-2 text-white font-light`}>
                            {props.texto}
                        </span>
                   </a>  
                   </Link>
             </li>
        </div>
    )
}