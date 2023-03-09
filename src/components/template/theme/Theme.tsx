import React, { ReactNode } from 'react'
import {Aviso} from '../../icons'
import  Header  from './Header'
import Item from './Item'

type props={
    children:ReactNode
}
export default function Theme({children}:props) {
  return (
      <>
      <div className='w-1/2 bg-fundo-pna bg-no-repeat bg-fixed bg-bottom-center bg-gray-50'>
                {children}           
            </div>
           


     </>
  )
}

