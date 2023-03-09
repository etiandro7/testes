import Link from 'next/link'

export default function Error()
{
    return(
        <div className="flex   h-screen justify-center items-center w-screen bg-fundo-pna bg-no-repeat bg-fixed bg-bottom-center">
        <div className="w-full flex flex-col justify-center items-center">
        
       .
        </div>
        <div className="w-full flex flex-col justify-center">
                           
                            <h1 className="text-6xl text-indigo-900 font-extrabold pb-4">404...</h1>
                            <br/>
<h2 className="text-3xl text-blue-500 pb-6">REPITO, 404. CÂMBIO!</h2>
 <span className="font-bold text-green-800 pb-3">COMANDO PROVINCIAL DA HUÍLA  RESPONDE:</span>
<span className="mb-8 text-gray-500 font-black">
Acho que você errou o endereço.<br />
A página que você requisitou não foi encontrada.
</span>
<span className="bg-gray-800 text-white flex 
                shadow-sm p-2 font-bold rounded-sm w-36 items-center justify-center">
                <Link href="/Comando" >INÍCIO</Link>
                </span>
                        </div>
     </div>
    )
}