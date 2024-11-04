import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { InputEdit } from "../../components/input-edite/InputEdit";
import Camera from './assets/camera.png';

export const Editar = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-12 max-h-screen overflow-auto p-6">
            <div className="mt-24 flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Configurações de Perfil</h1>
                <div className="border-2 border-b-black"></div>
            </div>
            <div className="flex gap-40">
                <div className="w-[60%]">
                    <form className="flex flex-col gap-3">
                        <div>
                            <InputEdit
                                type="text"
                                label="Nome"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="CPF"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Email"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Telefone"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="UF"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Cidade"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Bairro"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Rua"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="CEP"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="password"
                                label="Senha Atual"
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="password"
                                label="Nova Senha"
                                value={''}
                            />
                        </div>
                    </form>
                </div>
                <div className="w-[40%] flex flex-col gap-2 items-center">
                    <h3 className="font-semibold">Alterar foto de perfil</h3>
                    <div className="w-52 h-52 rounded-full bg-gray-300 relative"></div>
                    <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute right-40 bottom-[255px]">
                        <img src={Camera} alt="Ícone de camera" />
                    </button>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button children="Cancelar" variant="transparent" type="button" onClick={() => navigate('/configuracao')} />
                <Button children="Salvar" variant="solid" type="submit" />
            </div>
        </div>
    );
};