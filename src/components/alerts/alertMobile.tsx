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
                'bg-[#fae4c1]': type === 'alerta',
                'bg-[#fabdc2]': type === 'error',
                'bg-[#bcd6ea]': type === 'informação',
                'bg-[#b4e7cd]': type === 'sucesso',
            }
            
        )}>
            <div className={clsx("rounded-full h-7 w-7 flex items-center justify-center overflow-hidden ",
                {
                    'bg-[#f9cf47]': type === 'alerta',
                    'bg-[#ff2d56]': type === 'error',
                    'bg-[#6c00f9]': type === 'informação',
                    'bg-[#00d998]': type === 'sucesso',
                    
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