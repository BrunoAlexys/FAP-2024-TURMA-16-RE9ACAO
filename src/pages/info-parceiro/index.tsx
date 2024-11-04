import { useParams } from "react-router-dom";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { CardParticipante } from "../../components/card-participante/CardParticipante";
import { FormPopUp } from "../../components/form-pop-up/FormPopUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { Parceiro } from "../../types/parceiro";
import { Curso } from "./curso";

export const InfoParceiro = () => {
    const { id } = useParams<{ id: string }>();

    const [parceiro, setParceiro] = useState<Parceiro | null>(null);
    const [isOpenNewTask, setIsOpenNewTask] = useState(false);

    const onCloseNewTask = () => {
        setIsOpenNewTask(false);
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/parceiros/${id}`)
            .then((response) => {
                setParceiro(response.data)
            })
            .catch((error) => {
                throw new Error(error);
            })
    }, [])

    return (
        <div className="w-full lg:max-h-screen lg:overflow-y-auto">
            <div className="flex flex-col">
                <div className="w-full h-48 bg-gray-400"></div>
                <div className="lg:p-6">
                    <h1 className="text-3xl font-bold">{parceiro?.name}</h1>
                    <p className="text-lg font-medium mt-2">{parceiro?.description}</p>
                    <div className="border-2 border-b-gray-200 mt-4"></div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between mx-16 gap-4 mb-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-bold">Cursos cadastrados</h3>
                            <BotaoPadrao nome="Nova curso" icone="add" onClick={() => setIsOpenNewTask(true)} />
                            {/* Chamar novo pop-up */}
                            {isOpenNewTask && <FormPopUp onClose={onCloseNewTask} type="curso" title="Novo Curso" descriptionLabel="Descrição" namePlaceholder="Título" descriptionPlaceholder="Descrição" />}
                        </div>
                        <div className="flex flex-col gap-4">
                            {parceiro?.cursos && parceiro.cursos.length > 0 ? (
                                parceiro.cursos.map((curso) => (
                                    <Curso
                                        key={curso.id}
                                        name={curso.titulo}
                                        img={curso.img}
                                        contador={parceiro.alunos.length + parceiro.professor.length}
                                    />
                                ))
                            ) : (
                                <div className="w-full h-52 flex items-center justify-center">
                                    <p>Não há cursos cadastradas no momento</p>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 mb-10">
                        <div>
                            <CardParticipante
                                item={parceiro?.professor || []}
                                title="Professores"
                            />
                        </div>
                        <div>
                            <CardParticipante
                                item={parceiro?.alunos || []}
                                title="Alunos"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}