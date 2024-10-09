import React, { useEffect, useState } from 'react';
import clsx from "clsx";
import error from"./assets/error.png"
import alerta from "./assets/warning.png"
import info from "./assets/info.png"
import sucesso from "./assets/sucess.png"


type AlertProps = {
    type: "alerta" | "error" | "info" | "sucesso";
    text: String;
    onClose?: () => void;
}

const Alert = ({type, text, onClose} : AlertProps)=>{
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
                    "h-40 w-400  border-l-8 mt-4 flex p-7 fixed top-0 right-0 transition-transform duration-500 ease-in-out", 
                    {
                        'translate-y-[-150%]': !isVisible, 
                        'translate-y-0': isVisible,
                        'bg-colorAlertWarning border-x-colorAlertWarningBorder': type === 'alerta',
                        'bg-colorAlertError border-x-colorAlertErrorBorder': type === 'error',
                        'bg-colorAlertInfo border-x-colorAlertInfoBorder': type === 'info',
                        'bg-colorAlertSucess border-x-colorAlertSucessBorder': type === 'sucesso',
                    }
                    
                )}>
                    <div className={clsx("rounded-full h-24 w-24  flex items-center justify-center flex-col",
                        {
                            'bg-colorAlertWarningBorder': type === 'alerta',
                            'bg-colorAlertErrorBorder': type === 'error',
                            'bg-colorAlertInfoBorder': type === 'info',
                            'bg-colorAlertSucessBorder': type === 'sucesso',
                            
                        }
                    )}>
                    <img 
                        src={clsx(
                            {
                            [alerta]: type === 'alerta',
                            [error]: type === 'error',
                            [info]: type === 'info',
                            [sucesso]: type === 'sucesso',
                        }
                    )}
                        alt={type}
                    />
                    </div>
                    <div className="flex flex-col ml-12 p-1">
                        <h1 className="text-4xl mb-2">{type}</h1>
                        <p className="w-2/3">{text}</p>
                    </div>
                </div>
        )
           
}

export default Alert;