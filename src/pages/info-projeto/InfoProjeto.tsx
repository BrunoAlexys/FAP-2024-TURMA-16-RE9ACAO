import { CardComentario } from "../../components/card-comentario/CardComentario";
import { CardParticipante } from "../../components/card-participante/CardParticipante";

export const InfoProjeto = () => {
    return (
        <div className="w-full lg:max-h-screen lg:overflow-y-auto">
            <div className="w-full h-44 bg-gray-400"></div>
            <div className="lg:p-6">
                <h1 className="text-3xl font-bold">Projeto Teste</h1>
                <p className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error quod ducimus non. Sunt, dolorum. Id velit, nam sint laudantium tempora omnis non accusamus magni! Esse praesentium corporis quia necessitatibus.</p>
                <div className="border-2 border-b-gray-200 mt-4"></div>
            </div>
            <div className="flex gap-4">
                <div className="lg:p-6">
                    <CardComentario />
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <CardParticipante />
                    </div>
                    <div>
                        <CardParticipante />
                    </div>
                </div>
            </div>
        </div>
    );
};