import clsx from "clsx";
import addIcon from "./assets/add.png"

interface BotaoPadraoProps{
    icone: string,
    nome: string,
    tipo: string
}

function checarIcon(icone: string){
    switch(icone){
        case "add":
            return addIcon
    }
}

function checarResponsividade(tipo: string){
    switch(tipo){
        case "mobile":
            return "flex"
        case "desktop":
            return "hidden lg:flex"
    }
}

export const BotaoPadrao = (props: BotaoPadraoProps) => {
    return (
        <button className={clsx("bg-colorMenuPrimary rounded-xl text-white px-4 py-2 gap-4 justify-between items-center", checarResponsividade(props.tipo))}>
            <p>{props.nome}</p>
            <img src={checarIcon(props.icone)} alt="+" />
        </button>
    )
};
