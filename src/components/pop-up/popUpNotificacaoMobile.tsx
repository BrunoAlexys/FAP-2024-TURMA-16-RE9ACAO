import PersonDefault from "./adicionar-component/select/assets/Default-Profile.png"
type NotificationPopupProps = {
    onClose: () => void;
    titulo: string;
    time: string;
    descricao: string;
    imagem: string;
};

export const NotificationPopupMobile: React.FC<NotificationPopupProps> = ({
    onClose,
    titulo,
    descricao,
    imagem
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
            <div className="w-80 h-fit rounded-lg bg-[#D9D9D9]">
                <div className="flex p-4 bg-gradient-to-b from-colorMenuPrimary to-colorMenuSecondary rounded-t-lg">
                    <img src={!imagem ? imagem : PersonDefault} alt="" className="rounded-full bg-white w-14 h-14" />
                    <p className="font-bold text-xl text-white p-4">{titulo}</p>
                </div>
                <div className="w-full flex flex-col ">
                    <div className="w-72 mx-auto text-justify text-base flex flex-col items-center p-5">
                        <p className="text-sm">{descricao}</p>
                    </div>
                    <div className="flex justify-end mt-4 mr-6 mb-5">
                        <button
                            className="w-24 h-8 p-2 flex text-sm items-center justify-center rounded-lg bg-colorMenuPrimary text-white font-bold"
                            onClick={onClose}
                        >
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
