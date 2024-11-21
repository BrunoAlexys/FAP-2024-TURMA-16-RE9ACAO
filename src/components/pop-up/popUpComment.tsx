type CommentPopupProps = {
    onClose: () => void;
};

export const CommentPopup = ({ onClose }: CommentPopupProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
            <div
                className="w-[500px] h-[250px] bg-popup rounded-2xl flex flex-col px-4 transform transition-transform duration-300 scale-100 opacity-100 mx-4"
            >
                <h1 className="text-xl font-semibold p-3">Adicionar um comentário</h1>
                <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded-lg resize-none shadow-inner focus:outline-none"
                    placeholder="Digite seu comentário"
                ></textarea>
                <div className="py-6 flex justify-end">
                    <button onClick={onClose} className="text-colorMenuPrimary font-bold mx-5">
                        Cancelar
                    </button>
                    <button className="bg-colorMenuPrimary text-white px-3 h-8 rounded-md font-bold">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};
