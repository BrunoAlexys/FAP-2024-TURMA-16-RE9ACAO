import { useState } from "react";
import Editar from "./assets/editar.png";
import { PopUpEdite } from "../../../components/pop-up/adicionar-component/popUpEdite";

type EditeProps = {
    setDescricao: (descricao: string) => void;
    description: string;
};

export const Edite = ({description, setDescricao }: EditeProps) => {
    const [activePopup, setActivePopup] = useState<"edit" | null>(null);

    const closePopup = () => setActivePopup(null);
    const openPopup = (popup: "edit") => setActivePopup(popup);

    const handleDescricaoSubmit = (descricaoRecebida: string) => {
        setDescricao(descricaoRecebida); 
        closePopup();
    };

    return (
        <div id="btnEdite">
            <div className="flex flex-col gap-2 max-w-12 lg:w-12 rounded-full items-center justify-start p-2 right-10 top-52 bg-white shadow-lg border border-gray-300">
                <button
                    className="flex items-center gap-2 p-1 w-full"
                    onClick={() => openPopup("edit")}
                >
                    <img src={Editar} alt="Icone de editar" className="w-5 h-5" />
                </button>
            </div>

            {activePopup === "edit" && (
                <PopUpEdite oldDescricao={description} onClose={closePopup} onSubmit={handleDescricaoSubmit} />
            )}
        </div>
    );
};
