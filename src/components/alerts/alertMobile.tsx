import React, { useEffect, useState } from 'react';
import clsx from "clsx";
import error from"./assets/error.png"
import alerta from "./assets/warning.png"
import info from "./assets/info.png"
import sucesso from "./assets/sucess.png"


type AlertProps = {
    type: "alerta" | "error" | "informação" | "sucesso";
    onClose?: () => void;
}

    

const AlertMobile = ({type, onClose} : AlertProps)=>{
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        setIsVisible(true);

        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) {
                setTimeout(onClose, 500); 
            }
        }, 5000);

        return () => clearTimeout(timer); 
    }, [onClose]);

    return (
        <div className={clsx(
            "h-14 flex p-4 rounded-lg fixed top-1 left-1 right-1 transition-transform duration-500 ease-in-out", 
            {
                'translate-y-[-150%]': !isVisible, 
                'translate-y-0': isVisible,
                'bg-colorAlertMobileWarning': type === 'alerta',
                'bg-colorAlertMobileError': type === 'error',
                'bg-colorAlertMobileInfo': type === 'informação',
                'bg-colorAlertMobileSucess': type === 'sucesso',
            }
            
        )}>
            <div className={clsx("rounded-full h-7 w-7 flex items-center justify-center overflow-hidden ",
                {
                    'bg-colorAlertWarningBorder': type === 'alerta',
                    'bg-colorAlertErrorBorder': type === 'error',
                    'bg-colorAlertInfoBorder': type === 'informação',
                    'bg-colorAlertSucessBorder': type === 'sucesso',
                    
                }
            )}>
            <img className={clsx(
                {
                'w-1': type === 'alerta' || type === 'informação',
                }
            )}
                src={clsx({
                    [alerta]: type === 'alerta',
                    [error]: type === 'error',
                        [info]: type === 'informação',
                    [sucesso]: type === 'sucesso',
                })}
                alt={type}
            />
            </div>
            <div className="flex ml-4 p-1">
                <p className="text-xs">mensagem de {type} -  verifique agora mesmo </p>
            </div>
        </div>
    )
           
}

export default AlertMobile;