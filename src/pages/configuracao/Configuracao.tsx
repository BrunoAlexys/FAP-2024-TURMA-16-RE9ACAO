import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";

export const Configuracao = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full h-full flex flex-col justify-between p-12">
            <div className="flex flex-col">
                <div className="ml-4 flex flex-col gap-10 mt-4">
                    <div className="flex items-center gap-8">
                        <div className="w-[150px] h-[150px] bg-slate-200 rounded-full"></div>
                        <div>
                            <h1 className="text-3xl font-semibold">R9ação - Soluções Integradas</h1>
                        </div>
                    </div>
                    <div className="max-w-[100%]">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi quis maiores molestiae doloribus esse tenetur amet optio praesentium rem, expedita atque quia ratione quasi sunt assumenda accusantium sequi nihil.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim optio, labore commodi exercitationem facilis, aliquid sunt possimus numquam soluta consequuntur incidunt repellendus qui reprehenderit laboriosam nisi quaerat corporis. Asperiores.</p>
                    </div>
                </div>

                <div className="border-2 border-b-gray-200 mt-4"></div>

                <div className="ml-4 mt-10 flex flex-col gap-3">
                    <p>12.345.678/0001-99</p>
                    <p>(00) 00000-0000</p>
                    <p>EmailTeste@gmail.com</p>
                    <p>Rua Verde  34°, casa amarela, Recife, Pernambuco </p>
                </div>
            </div>

            <div className="flex justify-end">
                <Button children='Editar' variant="solid" type="button" onClick={() => navigate('/editar')} />
            </div>
        </section>
    );
};