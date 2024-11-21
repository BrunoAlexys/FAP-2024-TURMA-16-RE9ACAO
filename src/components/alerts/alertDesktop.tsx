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
            "h-40 w-400  border-l-8 mt-4 flex p-7 fixed top-0 right-0 transition-transform duration-500 ease-in-out z-20",
            {
                'translate-y-[-150%]': !isVisible,
                'translate-y-0': isVisible,
                'bg-[#fdf9e8] border-x-[#F2C94C]': type === 'alerta',
                'bg-[#ffeeef] border-x-[#EB5757]': type === 'error',
                'bg-[#efedff] border-x-[#5458F7]': type === 'info',
                'bg-[#dffcf5] border-x-[#00CC99]': type === 'sucesso',
            }

        )}>
            <div className={clsx("rounded-full h-24 w-24  flex items-center justify-center flex-col",
                {
                    'bg-[#F2C94C]': type === 'alerta',
                    'bg-[#EB5757]': type === 'error',
                    'bg-[#5458F7]': type === 'info',
                    'bg-[#00CC99]': type === 'sucesso',

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