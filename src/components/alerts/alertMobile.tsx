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
                'opacity-0 translate-y-[-20px]': isExiting,
                'opacity-100 translate-y-0': !isExiting,
                'bg-colorAlertMobileWarning': type === 'alerta',
                'bg-colorAlertMobileError': type === 'error',
                'bg-colorAlertMobileInfo': type === 'info',
                'bg-colorAlertMobileSucess': type === 'sucesso',
            }

        )}>
            <div className={clsx("rounded-full h-7 w-7 flex items-center justify-center overflow-hidden ",
                {
                    'bg-colorAlertWarningBorder': type === 'alerta',
                    'bg-colorAlertErrorBorder': type === 'error',
                    'bg-colorAlertInfoBorder': type === 'info',
                    'bg-colorAlertSucessBorder': type === 'sucesso',

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