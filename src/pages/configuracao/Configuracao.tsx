import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import PerfilDefault from "./Assets/Default-Profile.png";
import { Edite } from "./edite/edite";

export const Configuracao = () => {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState<string>(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi quis maiores molestiae doloribus esse tenetur amet optio praesentium rem, expedita atque quia ratione quasi sunt assumenda accusantium sequi nihil.

Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim optio, labore commodi exercitationem facilis, aliquid sunt possimus numquam soluta consequuntur incidunt repellendus qui reprehenderit laboriosam nisi quaerat corporis. Asperiores.`);

    return (
        <section id="configuracao" className="w-full max-h-[calc(100vh-92px)] lg:max-h-screen flex flex-col lg:justify-between md:justify-between lg:p-12 overflow-auto md:h-screen md:px-2 ">
            <div className="flex flex-col md:pt-7">
                <div className="lg:ml-4 flex flex-col gap-10 mt-4 px-4">
                    <div className="flex md:flex-col lg:flex-row items-center gap-8">
                        <div className="w-1/4 lg:w-[150px] lg:h-[150px] bg-slate-200 rounded-full">
                            <img src={PerfilDefault} alt="Foto de perfil" />
                        </div>
                        <div>
                            <h1 className="text-xl lg:text-3xl font-semibold">R9ação - Soluções Integradas</h1>
                        </div>
                    </div>
                    <div className="max-w-[100%] text-justify lg:text-left md:font-semibold xl:font-semibold font-medium text-sm px-2">
                        <p>{descricao}</p>
                    </div>
                    <div className="">
                        <Edite description={descricao} setDescricao={setDescricao} />
                    </div>
                </div>

                <div className="border-2 mx-2 border-b-gray-200 mt-4 md:mx-4"></div>

                <div className="lg:ml-4 lg:mt-10 flex flex-col gap-3 px-4 mt-4 md:font-semibold xl:font-semibold font-medium">
                    <p>12.345.678/0001-99</p>
                    <p>(00) 00000-0000</p>
                    <p>EmailTeste@gmail.com</p>
                    <p>Rua Verde  34°, casa amarela, Recife, Pernambuco </p>
                </div>
            </div>

            <div className="px-3 flex justify-end xl:pt-8 md:py-6">
                <Button className="md:h-12 md:w-32 md:text-xl xl:h-9 xl:w-32 xl:text-lg" children='Editar' variant="solid" type="button" onClick={() => navigate('/editar')} />
            </div>
        </section>
    );
};
