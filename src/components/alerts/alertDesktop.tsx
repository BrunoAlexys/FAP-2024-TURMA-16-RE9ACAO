import clsx from "clsx";
import error from "./assets/error.png"
import alerta from "./assets/warning.png"
import info from "./assets/info.png"
import sucesso from "./assets/sucess.png"
import { useEffect, useState } from "react";


type AlertProps = {
    type: "alerta" | "error" | "info" | "sucesso";
    text: string;
    onClose: () => void;
}

const Alert = ({ type, text, onClose }: AlertProps) => {

    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                setIsVisible(false);
                onClose(); // Chama a função de callback para fechar o alerta
            }, 300); // Tempo para coincidir com a animação
        }, 3000); // Tempo total de exibição

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className={clsx(
            "h-32 w-400 border-l-8 mt-4 flex p-7 fixed top-0 right-0 z-20 transition-all duration-300 ease-in-out",
            {
                'opacity-0 translate-x-full': isExiting,  // Saindo para a direita
                'opacity-100 translate-x-0': !isExiting,   // Aparecendo
                'transition-opacity duration-300': !isExiting, // Transição de opacidade
                'bg-colorAlertWarning border-x-colorAlertWarningBorder': type === 'alerta',
                'bg-colorAlertError border-x-colorAlertErrorBorder': type === 'error',
                'bg-colorAlertInfo border-x-colorAlertInfoBorder': type === 'info',
                'bg-colorAlertSucess border-x-colorAlertSucessBorder': type === 'sucesso',
            }
        )}>
            <div className={clsx("rounded-full h-20 w-20 flex items-center justify-center flex-col",
                {
                    'bg-colorAlertWarningBorder': type === 'alerta',
                    'bg-colorAlertErrorBorder': type === 'error',
                    'bg-colorAlertInfoBorder': type === 'info',
                    'bg-colorAlertSucessBorder': type === 'sucesso',
                }
            )}>
                <img
                    src={type === 'alerta' ? alerta : type === 'error' ? error : type === 'info' ? info : sucesso}
                    alt={type}
                />
            </div>
            <div className="flex flex-col ml-12 p-1">
                <h1 className="text-4xl mb-2">{type == 'error' ? 'Erro' : type}</h1>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    );
};

export default Alert;