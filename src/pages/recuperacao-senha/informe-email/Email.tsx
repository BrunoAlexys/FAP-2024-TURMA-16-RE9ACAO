import Logo from './assets/logo.png';
import { DiagonalSection } from '../../../components/diagonal-section/DiagonalSection';
import { useNavigate } from 'react-router-dom';

export const RecuperacaoDeSenhaP1 = () => {
    const navigate = useNavigate();

    return (
        <div >
            <DiagonalSection text="Redefinir" subtext="Senha" />
            <div className="flex flex-col justify-center items-center bg-white border-[2px] border-[#3C68C5] shadow-[4px_4px_10px_rgba(0,0,0,0.25)] rounded-3xl p-6 sm:p-6  w-full max-w-[350px] xl:mt-auto mt-14 sm:mt-32 aspect-[521/609] mx-auto text-center">

                <div className="mb-2 flex justify-center ">
                    <img src={Logo} alt="Logo da empresa" className="h-20 sm:h-24 w-auto" />
                </div>

                <p className="text-gray-950 align-middle mb-5 text-base sm:text-sm">
                    Informe o e-mail cadastrado para receber um código de seleção.
                </p>

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

                <div className="flex justify-end gap-2">
                    <button
                        className="text-[#0C3EA6] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => navigate('/')}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-blue-900 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-blue-700"
                        onClick={() => navigate('/recuperacaop2')}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};
