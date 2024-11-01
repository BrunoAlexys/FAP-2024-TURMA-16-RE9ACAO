import { useEffect, useState } from "react";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { CardComentario } from "../../components/card-comentario/CardComentario";
import { CardParticipante } from "../../components/card-participante/CardParticipante";
import { Filter } from "../../components/filter-component/Filter";
import { Project } from "../../types/Projects";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FormPopUp } from "../../components/form-pop-up/FormPopUp";

export const InfoProjeto = () => {

    const { id } = useParams<{ id: string }>();

    const [project, setProject] = useState<Project | null>(null);
    const [isOpenNewTask, setIsOpenNewTask] = useState(false);

    const onCloseNewTask = () => {
        setIsOpenNewTask(false);
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/projects/${id}`)
            .then((response) => {
                setProject(response.data)
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
                    <h1 className="text-3xl font-bold">{project?.name}</h1>
                    <p className="text-lg font-medium mt-2">{project?.description}</p>
                    <div className="border-2 border-b-gray-200 mt-4"></div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between mx-16 gap-4 mb-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <Filter />
                            <BotaoPadrao nome="Nova Tarefa" icone="add" onClick={() => setIsOpenNewTask(true)} />
                            {isOpenNewTask && <FormPopUp onClose={onCloseNewTask} type="tasks" title="Nova Tarefa" descriptionLabel="Descrição" namePlaceholder="Título" descriptionPlaceholder="Descrição" />}
                        </div>
                        <div className="flex flex-col gap-4">
                            {project?.tasks.map((task) => (
                                <CardComentario
                                    key={task.id}
                                    titulo={task.titulo}
                                    comentario={task.comentario}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-10">
                        <div>
                            <CardParticipante
                                item={project?.professor || []}
                                title="Professores"
                            />
                        </div>
                        <div>
                            <CardParticipante
                                item={project?.alunos || []}
                                title="Alunos"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};