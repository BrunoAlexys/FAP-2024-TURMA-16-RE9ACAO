import React from 'react';
import Logo from './assets/logo.png';
import { DiagonalSection } from '../../../components/diagonal-section/DiagonalSection';

export const RecuperacaoDeSenha = () => {
    return (
        <div className='bg-[#F9FAFB]'>
            <DiagonalSection text="Redefinir" subtext='Senha' />
            <div className="min-h-screen flex flex-col justify-center items-center">
                
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                        <img src={Logo} alt="Logo da empresa" className="h-20" />
                    </div>

                    {/* Instrução */}
                    <p className="text-gray-700 mb-4">
                        Informe o e-mail cadastrado para receber um código de seleção.
                    </p>

                    {/* Campo de E-mail */}
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            className="shadow appearance-none border border-[#0C3EA6] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Botões Cancelar e Enviar */}
                    <div className="flex justify-end gap-2 mt-6">
                        <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-400">
                            Cancelar
                        </button>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
