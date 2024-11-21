import clsx from "clsx";
import AddIcon from "./assets/adicionar.png";

interface BotaoPadraoProps {
    icone: 'add',
    nome: string,
    onClick?: () => void;
}

function checarIcon(icone: string) {
    switch (icone) {
        case "add":
            return AddIcon;
    }
}

export const BotaoPadrao = (props: BotaoPadraoProps) => {
    return (
        <button
            className={clsx("w-[48px] h-[48px] sm:w-[48px] sm:h-[48px] md:w-[70px] md:h-[70px] lg:w-[95px] lg:h-[40px] fixed z-20 lg:relative lg:bottom-0 lg:right-0 bottom-20 right-2 md:m-5 rounded-full px-2 bg-colorMenuPrimary lg:rounded-xl flex text-white lg:px-4 py-2 lg:gap-4 justify-center items-center")}
            onClick={props.onClick}
        >
            <p className="hidden lg:block">{props.nome}</p>
            <img className="w-6 md:w-10 lg:w-5" src={checarIcon(props.icone)} alt="+" />
        </button>
    )
};
