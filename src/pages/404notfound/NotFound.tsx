import erro404 from "../404notfound/assets/Erro404.png";
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-corDeFundo h-screen w-full flex items-center justify-center space-x-6'>
            <div>
                <img src={erro404} alt="erro 404" />
            </div>
            <div className="flex flex-col items-start justify-center space-y-4">
                <h1 className="text-9xl font-bold">404</h1>
                <h3 className="text-3xl italic font-light mb-2">Página não encontrada!</h3>
                <button
                    className="rounded-md py-2 px-4 bg-color404 font-semibold text-xl text-white"
                    onClick={() => navigate('/')}
                >
                    Voltar
                </button>
            </div>
        </div>
    );
};