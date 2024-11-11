import erro404 from "../404notfound/assets/Erro404.png";
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-corDeFundo h-screen w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 p-4">
            <div className="w-1/2 lg:w-auto">
                <img src={erro404} alt="erro 404" className="w-full max-w-xs lg:max-w-md" />
            </div>
            <div className="flex flex-col items-start justify-center space-y-4">
                <h1 className="text-9xl md:text-9xl font-bold">404</h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl italic font-light mb-2">Página não encontrada!</h3>
                <button
                    className="rounded-xl py-2 px-4 bg-color404 font-semibold text-lg md:text-xl text-white"
                    onClick={() => navigate('/')}
                >
                    Voltar
                </button>
            </div>
        </div>
    );
};
