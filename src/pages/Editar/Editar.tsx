import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/button/button";
import { InputEdit } from "../../components/input-edite/InputEdit";
import Camera from './assets/camera.png';
import { PopUpImage } from "../../components/popup-image/PopUpImage";
import imageDefault from "./assets/Default-Profile.png";

export const Editar = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null); // Estado para armazenar a imagem de perfil

    const openPopup = () => setIsPopupVisible(true);
    const closePopup = () => setIsPopupVisible(false);

    const navigate = useNavigate();

    // Função para lidar com o upload da imagem
    const handleImageUpload = (file: File) => {
        const imageUrl = URL.createObjectURL(file); // Converte a imagem para URL temporária
        setProfileImage(imageUrl); // Atualiza o estado com a nova imagem
    };

    return (
        <div className="bg-corDeFundo flex flex-col gap-12 max-h-screen overflow-auto p-6">
            <div className="mt-24 flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Configurações de Perfil</h1>
                <div className="border-2 border-b-black"></div>
            </div>
            <div className="flex gap-40">
                <div className="w-[60%]">
                    <form className="flex flex-col gap-3">
                        <div>
                            <InputEdit type="text" label="Nome" />
                        </div>
                        <div>
                            <InputEdit type="text" label="CPF" />
                        </div>
                        <div>
                            <InputEdit type="text" label="Email" />
                        </div>
                        <div>
                            <InputEdit type="text" label="Telefone" />
                        </div>
                        <div>
                            <InputEdit type="text" label="UF" />
                        </div>
                        <div>
                            <InputEdit type="text" label="Cidade" />
                        </div>
                        <div>
                            <InputEdit type="text" label="Bairro" />
                        </div>
                        <div>
                            <InputEdit type="text" label="Rua" />
                        </div>
                        <div>
                            <InputEdit type="text" label="CEP" />
                        </div>
                        <div>
                            <InputEdit type="password" label="Senha Atual" />
                        </div>
                        <div>
                            <InputEdit type="password" label="Nova Senha" value={''} />
                        </div>
                    </form>
                </div>
                <div className="w-[40%] flex flex-col gap-2 items-center">
                    <h3 className="font-semibold">Alterar foto de perfil</h3>
                    <div className="w-52 h-52 rounded-full bg-gray-300 relative flex items-center justify-center shadow-lg shadow-black-500/50">
                        <img 
                            src={profileImage || imageDefault}
                            alt="Imagem de perfil"
                            className="w-full h-full rounded-full object-cover"
                        />
                        <button
                            onClick={openPopup}
                            className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute -bottom-0 right-4"
                        >
                            <img src={Camera} alt="Ícone de câmera" />
                        </button>
                        {isPopupVisible && <PopUpImage closePopup={closePopup} handleImageUpload={handleImageUpload} />}
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button children="Cancelar" variant="transparent" type="button" onClick={() => navigate('/configuracao')} />
                <Button children="Salvar" variant="solid" type="submit" />
            </div>
        </div>
    );
};
