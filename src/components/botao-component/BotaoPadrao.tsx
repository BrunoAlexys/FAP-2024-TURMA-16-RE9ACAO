import clsx from "clsx";
import addIcon from "./assets/add.svg"

interface BotaoPadraoProps{
    icone: string,
    nome: string,
}

function checarIcon(icone: string){
    switch(icone){
        case "add":
            return addIcon
    }
}

export const BotaoPadrao = (props: BotaoPadraoProps) => {
    return (
        <button className={clsx("fixed lg:relative lg:bottom-0 lg:right-0 bottom-20 right-2 rounded-full px-2 bg-colorMenuPrimary lg:rounded-xl flex text-white lg:px-4 py-2 lg:gap-4 justify-between items-center")}>
            <p className="hidden lg:block">{props.nome}</p>
            <img className="w-8 lg:w-7" src={checarIcon(props.icone)} alt="+" />
        </button>
    )
};