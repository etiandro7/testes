import Image from 'next/image'

export default function princiapl()
{

    return(
        <>
          <div className=" bg-gray-700  w-screen">
         <header className="flex justify-between col-span-3">
        
                <div className="flex justify-center items-center content-center m-2">
                    <Image src="/logo.png" height="45" width={40} alt=""/>
                    <span className="ml-2">
                        POLICIA NACIONAL DE ANGOLA 
                  <br></br><span className="font-semibold text-sm text-gray-500">
                    COMANDO PROVINCIAL DA HUÍLA</span></span>
                </div>
                <ul className="flex m-2 gap-1  justify-center items-center content-center font-semibold uppercase">

                <li> ínicio</li>
                <li> Policia do Bairro</li>
                <li> Entrar</li>
                </ul>
                
          
         </header>

     
          </div>
        
        </>
    )
}