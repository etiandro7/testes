import Entrada from '../components/formcomp/Entrada'
import Botao from '../components/formcomp/Botaosalvar'
import { useEffect, useState } from 'react'
import router from 'next/router'
import { Aviso } from '../components/icons'
import Autor from '../components/hook/useUsario'
import contexto from '../components/Context/UsuarioAuth'
import Image from 'next/dist/client/image'
export default function UsuarioP() {
    const { Logar, Logado } = Autor()

    const Novo = contexto()

    const { Autenticacao } = contexto()
    const [usuario, setusuario] = useState('')
    const [senha, setsenha] = useState('')
    const [erro, seterro] = useState(null)

    function ExibirErro(msg, tempo = 15) {
        seterro(msg)
        setTimeout(() => seterro(null), tempo * 100)
    }

    async function Entrar() {
        try {
            const aut = await Autenticacao(usuario, senha)
            if (aut) {
                router.push('/home')
            } else{
                ExibirErro(
                    'Erro na Autenticação Verificar nome Usuario e a Senha'
                )}
        } catch (erro) {
            setusuario('')
            setsenha('')
            ExibirErro(`${erro}!`)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen py-2">
            <main className="flex flex-col justify-center items-center w-full py-28 text-center rounded-2xl">
                <div className="flex bg-white shadow-2xl w-2/3 max-w-4xl rounded-2xl">
                    <div className="w-3/5 p-5 flex flex-col items-center">
                        <div className={`flex flex-col w-full`}>
                            <div className="text-left text-gray-300  text-sm font-bold pb-16">
                                <span className="text-gray-200">
                                    SISTEMA INTEGRADO DE GESTÃO POLICIAL
                                </span>
                            </div>

                            <div className="text-gray-400  font-bold pb-12 ">
                                <span className="text-blue-900 text-2xl uppercase">
                                    Introduza a sua Credencial do acessso <br />
                                </span>
                                <div className="border-2 w-10 border-blue-900 inline-block h-1 bg-blue-900"></div>
                            </div>
                            {erro ? (
                                <span
                                    className="bg-red-500 text-white text-1xl font-semibold mx-3 p-1 py-3 
               rounded-md flex flex-row gap-2"
                                >
                                    {Aviso} {erro}
                                </span>
                            ) : null}
                            <div className={`flex flex-col w-full text-left`}>
                                <Entrada
                                    label="Nome do Usuário"
                                    valor={usuario}
                                    valorMudou={setusuario}
                                    texto="Digite o nome de usuário!"
                                />

                                <Entrada
                                    label="Palavra Passe"
                                    valor={senha}
                                    valorMudou={setsenha}
                                    tipo="password"
                                    texto="Digite a senha"
                                />
                            </div>
                        </div>
                        <div
                            className={`flex flex-row justify-end w-full pb-5`}
                        >
                            <Botao
                                onclick={() => Entrar()}
                                className="rounded-sm bg-blue-900 font-extrabold w-1/4 hover:bg-yellow-500
                     hover:text-blue-800 hover:ring-2 py-2"
                            >
                                ACESSAR
                            </Botao>
                        </div>
                        <div className="flex flex-row justify-end content-end items-end w-full font-bold text-gray-300">
                            <span>DTTI/HUÍLA</span>
                        </div>
                    </div>
                    <div className="w-2/5 bg-blue-800 text-white rounded-tr-2xl rounded-br-2xl px-12 py-36">
                        <div className="w-full flex flex-col justify-center items-center">
                            <Image
                                src="/logo.png"
                                width="60"
                                height="150"
                                
                                alt=""
                                className="mt-3 h-16 w-16"
                            />
                            <h1 className={`font-light  text-white `}>
                                COMANDO PROVINCIAL DA POLÍCIA NACIONAL NA HUÍLA
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
