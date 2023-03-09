import React from 'react'
import Link from 'next/link'

type props={
  tiutlo:string
  descricao:string
  icon:any
  path:string
}
function Item({tiutlo , descricao, icon,path}:props) {
  return (
    <div className='my-12'>
      <Link href={path}>
        
        <a className='flex items-center'>
        <div className='flex flex-col justify-end items-end m-2'>
          <p className='font-black mb-1'>{tiutlo}</p> 
          <p className='font-light whitespace-nowrap'>{descricao}</p>
          </div>
          <span  className=' flex h-14 w-14 rounded-full text-white bg-gray-300 p-5 justify-center items-center right-2'>{icon}</span>
          <div className='h-2 w-2 ring-2 ring-gray-500 rounded-full ml-5 -mr-1 bg-white'></div>
          </a>
          
     </Link>
     

    </div>
  )
}

export default Item
