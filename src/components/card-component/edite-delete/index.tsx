import { useState } from 'react';
import Editar from './assets/editar.png';
import Excluir from './assets/lixo.png';
import { PopDel } from '../../pop-del/PopDel';
import { FormPopUp } from '../../form-pop-up/FormPopUp';
import { PopUpImage } from '../../popup-image/PopUpImage';

type AddOrEdit = {
    type: "Editar" | "Adicionar";
};

export const EditeDelete = ({ type }: AddOrEdit) => {
    const [activePopup, setActivePopup] = useState<"delete" | "edit" | "add" | null>(null);

    const closePopup = () => setActivePopup(null);

    const openPopup = (popup: "delete" | "edit" | "add") => setActivePopup(popup);

    const handleImageUpload = (image: File) => {
        console.log('Imagem enviada:', image);
        closePopup(); 
    };

    return (
        <>
            <div className="flex flex-col gap-2 w-32 rounded-md items-center justify-start p-2 absolute right-2 top-14 bg-white shadow-lg border border-gray-300">
                <button
                    className="flex items-center gap-2 p-1 w-full"
                    onClick={() => openPopup(type === "Adicionar" ? "add" : "edit")}
                >
                    <img src={Editar} alt="Icone de editar" className="w-5 h-5" />
                    <p className="text-black">{type}</p>
                </button>
                <div className="border-t border-gray-300 w-full"></div>
                <button
                    className="flex items-center gap-2 p-1 w-full"
                    onClick={() => openPopup("delete")}
                >
                    <img src={Excluir} alt="Icone de excluir" className="w-5 h-5" />
                    <p className="text-black">Excluir</p>
                </button>
            </div>

            {activePopup === "delete" && <PopDel onClose={closePopup} />}
            {activePopup === "add" && <PopUpImage closePopup={closePopup} handleImageUpload={handleImageUpload} />}
            {activePopup === "edit" && (
                <FormPopUp
                    onClose={closePopup}
                    type="tasks"
                    title="Editar Tarefa"
                    descriptionLabel="Descrição"
                    namePlaceholder="Título"
                    descriptionPlaceholder="Descrição"
                />
            )}
        </>
    );
};
