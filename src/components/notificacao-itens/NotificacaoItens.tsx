import PersonDefault from "./assets/Default-Profile.png"
interface NotificacaoProps {
    titulo: string;
    time: string;
    descricao: string;
    imagem: string;
    isRead: boolean;
    onClick: ()=>void;
}

export const NotificacaoItem: React.FC<NotificacaoProps> = ({
    titulo,
    time,
    descricao,
    imagem,
    isRead,
    onClick
}) => {

    return (
        <button onClick={onClick} className="flex justify-between p-4 gap-2 bg-blue-100 rounded-lg w-full max-w-1g text-black font-bold shadow-cardShadow">
            <img
                src={!imagem ? imagem: PersonDefault}
                alt={imagem}
                className="w-10 h-10 rounded-full bg-white"
            />
            <div className="flex flex-col flex-1 max-h-32 overflow-hidden">
                <div className="flex justify-between relative">
                    <h4 className="font-medium truncate">{titulo}</h4>
                    <span className="text-sm">{time}</span>
                    {!isRead && (
                        <span className="block p-1 bg-red-500 rounded-full absolute -right-3 -top-2" />
                    )}
                </div>
                <p className="text-sm font-normal text-justify truncate">{descricao}</p>
            </div>
        </button>
    );
};
