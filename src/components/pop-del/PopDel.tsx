type CommentPopupProps = {
    onClose: () => void;
};

export const PopDel = ({ onClose }: CommentPopupProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
            <div
                className="w-[500px] h-[95px] bg-popup rounded-lg flex flex-col px-4 transform transition-transform duration-300 scale-100 opacity-100 mx-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                <h1 className="text-xl font-semibold p-3">Deseja realmente excluir? </h1>
                
                <div className="py-1
                 flex justify-end">
                    <button onClick={onClose} className="text-[#2D2D2D] font-bold mx-5">
                        Cancelar
                    </button>
                    <button className="bg-delete text-white w-[100px] h-[28px] rounded-md font-bold"> 
                        Excluir
                    </button> 
                </div>
            </div>
        </div>
    );
};
