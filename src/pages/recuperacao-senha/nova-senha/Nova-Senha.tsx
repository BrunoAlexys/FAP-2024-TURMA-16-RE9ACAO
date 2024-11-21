import React from 'react';
import Logo from './assets/logo.png';
import { DiagonalSection } from '../../../components/diagonal-section/DiagonalSection';
import { useNavigate } from 'react-router-dom';

export const RecuperacaoDeSenhaP3 = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center'>
            <DiagonalSection text="Redefinir" subtext="Senha" />
            <div className="flex flex-col justify-center items-center bg-white border-[2px] border-[#3C68C5] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] rounded-3xl p-6 w-[340px] sm:w-[340px] md:w-[450px] h-[430px] sm:h-[540px] xl:mt-auto mt-14 sm:mt-3 md:mt-28 lg:mt-3 sm:mb-5 lg:mb-9 xl:mt-auto mt-14 sm:mt-32 aspect-[521/609] mx-auto text-center">

                <div className="mb-2 sm:mb-3 md:mb-5 flex justify-start">
                    <img src={Logo} alt="Logo da empresa" className="h-20 sm:h-24 w-auto" />
                </div>

                <p className="text-gray-950 align-middle mb-5 text-base sm:text-sm md:text-lg">
                    Crie uma nova senha
                </p>

                <div className="mb-4 text-left">
                    <label className="block text-gray-950 text-base sm:text-lg font-bold mb-1" htmlFor="NovaSenha">
                        Nova Senha
                    </label>
                    <input
                        type="NovaSenha"
                        id="NovaSenha"
                        placeholder="Digite uma nova senha"
                        className="shadow-md appearance-none border border-[#0C3EA6] rounded-xl w-[300px] sm:w-[270px] md:w-[380px] py-2 md:py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-2 text-left">
                    <label className="block text-gray-950 text-lg font-bold mb-1" htmlFor="ConfirmarNovaSenha">
                        Confirmar Senha
                    </label>
                    <input
                        type="ConfirmarNovaSenha"
                        id="ConfirmarNovaSenha"
                        placeholder="Confirme a nova senha"
                        className="shadow-md appearance-none border border-[#0C3EA6] rounded-xl w-[300px] sm:w-[270px] md:w-[380px] py-2 md:py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex justify-end gap-2 mt-6">
                    <button
                        className="text-[#0C3EA6] font-bold md:text-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => navigate('/recuperacaop2')}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-900 text-white font-bold md:text-xl py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700"
                        onClick={() => navigate('/')}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};
