import clsx from "clsx";
import error from "./assets/error.png"
import alerta from "./assets/warning.png"
import info from "./assets/info.png"
import sucesso from "./assets/sucess.png"
import { useEffect, useState } from "react";


type AlertProps = {
    type: "alerta" | "error" | "info" | "sucesso";
    message: string;
    onClose: () => void;
}

const AlertMobile = ({ type, message, onClose }: AlertProps) => {

    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                setIsVisible(false);
                onClose(); // Chama a função de callback para fechar o alerta
            }, 500); // Tempo para coincidir com a animação
        }, 5000); // Tempo total de exibição

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div className={clsx(
            "h-14 w-11/12 flex items-center p-4 rounded-lg fixed top-2 right-2 transition-all duration-500 ease-in-out z-20",
            {
                'translate-y-[-150%]': !isVisible, 
                'translate-y-0': isVisible,
                'bg-[#fae4c1]': type === 'alerta',
                'bg-[#fabdc2]': type === 'error',
                'bg-[#bcd6ea]': type === 'info',
                'bg-[#b4e7cd]': type === 'sucesso',
            }

        )}>
            <div className={clsx("rounded-full h-7 w-7 flex items-center justify-center overflow-hidden ",
                {
                    'bg-[#f9cf47]': type === 'alerta',
                    'bg-[#ff2d56]': type === 'error',
                    'bg-[#6c00f9]': type === 'info',
                    'bg-[#00d998]': type === 'sucesso',
                    
                }
            )}>
                <img className={clsx(
                    {
                        'w-1': type === 'alerta' || type === 'info',
                    }
                )}
                    src={clsx({
                        [alerta]: type === 'alerta',
                        [error]: type === 'error',
                        [info]: type === 'info',
                        [sucesso]: type === 'sucesso',
                    })}
                    alt={type}
                />
            </div>
            <div className="flex ml-4 p-1">
                <p className="text-xs">{message}</p>
            </div>
        </div>
    )

}

export default AlertMobile;