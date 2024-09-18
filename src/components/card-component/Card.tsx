import clsx from "clsx"

interface CardProps{
    tipo: number,
    img: string,
    projectName: string,
    children: React.ReactNode
}

function tipar(tipo: number){
    switch(tipo){
        case 1:
            return "bg-colorCardPrimary"
        case 2:
            return "bg-colorCardSecondary"
        case 3:
            return "bg-colorCardTerciary"
        default:
            return "bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary"
    }
}

export const Card = (props: CardProps) => {
    return (
    <div id="card" className={clsx("h-40 w-full rounded-xl shadow-cardShadow overflow-hidden lg:w-1/3 xl:w-1/4 2xl:w-1/5 lg:h-60")}>
        <div className={clsx("w-full rounded-t-xl py-2 px-2 flex justify-between items-center gap-2", tipar(props.tipo))}>
            <img src={props.img} alt={props.projectName} />
            <h2 className="text-white font-medium text-lg max-w-full text-right text-nowrap truncate">{props.projectName}</h2>
        </div>
        <div className="px-4 py-2">
            <p className="text-justify text-wrap truncate">{props.children}</p>
        </div>
    </div>
  )
}
