import React from 'react';
import Logo from './assets/logo.png';
import { DiagonalSection } from '../../../components/diagonal-section/DiagonalSection';

export const RecuperacaoDeSenhaP1 = () => {
    return (
        <div className="bg-[#F9FAFB] min-h-screen flex flex-col px-4 sm:px-0">
            <DiagonalSection text="Redefinir" subtext="Senha" />
            <div className="bg-white border-[2px] border-[#3C68C5] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] rounded-3xl p-6 sm:p-8  w-full max-w-[350px] aspect-[521/609] mx-auto text-center">
                
                {/* Logo */}
                <div className="mb-2 flex justify-center ">
                    <img src={Logo} alt="Logo da empresa" className="h-20 sm:h-24 w-auto" />
                </div>

                {/* Instrução */}
                <p className="text-gray-950 align-middle mb-5 text-base sm:text-sm">
                    Informe o e-mail cadastrado para receber um código de seleção.
                </p>

                {/* Campo de E-mail */}
                <div className="mb-20 text-left"> 
                    <label className="block text-gray-950 text-base sm:text-lg font-bold mb-1" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        className="shadow-md appearance-none border border-[#0C3EA6] rounded-xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Botões Cancelar e Enviar */}
                <div className="flex justify-end gap-2">
                    <button className="text-[#0C3EA6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cancelar
                    </button>""
                    <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};
