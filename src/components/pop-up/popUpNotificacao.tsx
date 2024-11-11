type NotificationPopupProps = {
    onClose: () => void;
    texto: String;
};

export const NotificationPopup = ({texto, onClose }: NotificationPopupProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
            <div className="w-[700px] h-fit rounded-lg bg-[#D9D9D9]">
                <div className="flex p-4 bg-gradient-to-b from-colorMenuPrimary to-colorMenuSecondary rounded-t-lg">
                    <img src="" alt="" className="rounded-full bg-white w-24 h-24"/>
                    <p className="font-bold text-2xl text-white p-7">Nome</p>
                </div>
                <div className="w-full flex flex-col ">
                    <div className="w-[600px] mx-auto text-justify text-base flex flex-col items-center p-5">
                        <p>{texto}</p>
                    </div>
                    <div className="flex justify-end mt-4 mr-16 mb-5">
                        <button
                            className="w-36 h-10 p-4 flex items-center justify-center rounded-lg bg-colorMenuPrimary text-white font-bold"
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