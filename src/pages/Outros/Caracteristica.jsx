import Botao from "../../components/formcomp/Botaosalvar";
import Entrada from "../../components/formcomp/Entrada";
import Image from "next/dist/client/image";

export default function Caracteristica() {
    return (

        <div className={`container mx-auto shadow-md flex flex-col w-1/2`}>
            <div className="w-full shadow-md">
                <h1 className={`bg-blue-900 h-10 py-2 font-extrabold pl-5 shadow-inner text-gray-50`}>REGISTO DE CARACTERISTICAS PDS</h1>
                <hr />


                <div className={`flex`}>
               
                    <div className={`flex   mt-2 pl-1 w-full justify-end mr-2`}>
                        <Image src="" alt="" className={`bg-gray-800 shadow-lg h-40 w-40 rounded-3xl`} />
                    </div>
                </div>
                <div className={`flex`}>

                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Raça</label>
                        <select
                            className={`mt-1 border  mx-3 py-0.5 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Amarelos</option>
                            <option value="F">Pensando</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Cor dos Olhos</label>
                        <select
                            className={`mt-1 border  mx-3 py-0.5 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Amarelos</option>
                            <option value="F">Pensando</option>
                        </select>
                    </div>

                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Nariz</label>
                        <select
                            className={`mt-1 border  mx-3 py-0.5 shadow-inner bg-white
                        focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Amarelos</option>
                            <option value="F">Pensando</option>
                        </select>
                    </div>

                </div>
                <div className={`flex`}>

                    <div className={`flex flex-col w-1/3`}>
                        <label className={`font-black mx-3`}>Raça</label>
                        <select
                            className={`mt-1 border  mx-3 py-0.5 shadow-inner bg-white
    focus:border-blue-500 focus:outline-none  font-light rounded-lg`}>
                            <option value="M">Amarelos</option>
                            <option value="F">Pensando</option>
                        </select>
                    </div>
                    <div className={`flex flex-col w-full`}>
                        <Entrada label="Tatuagem"
                            valor="{Familia}"
                            valorMudou="{setFamilia}"

                        />
                    </div>

                </div>


                <div className={`flex justify-end`}>
                    <Botao onclick="{}">Adicionar</Botao>
                    <Botao cor="red">Cancelar</Botao>
                </div>


            </div>
        </div>
    )
}