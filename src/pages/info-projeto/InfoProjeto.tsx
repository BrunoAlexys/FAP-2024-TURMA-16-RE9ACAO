import { useEffect, useState } from "react";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { CardComentario } from "../../components/card-comentario/CardComentario";
import { CardParticipante } from "../../components/card-participante/CardParticipante";
import { Filter } from "../../components/filter-component/Filter";
import { Project } from "../../types/Projects";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FormPopUp } from "../../components/form-pop-up/FormPopUp";
import { PopUpImage } from "../../components/popup-image/PopUpImage";
import bannerDefault from "./Assets/Banner.png";
import editaIcon from "./Assets/editar.png";

export const InfoProjeto = () => {
    const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
    const [bannerImage, setBannerImage] = useState<string>(bannerDefault);
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [isOpenNewTask, setIsOpenNewTask] = useState(false);

    const onCloseNewTask = () => setIsOpenNewTask(false);

    const handleImageUpload = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setBannerImage(imageUrl);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/projects/${id}`)
            .then((response) => {
                setProject(response.data);
                setBannerImage(response.data.bannerImage || bannerDefault);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <section id="infoProjeto" className="w-full h-full max-h-[calc(100vh-92px)] px-4 py-2 lg:px-16 lg:max-h-screen overflow-auto">
            <div className="flex flex-col">
                <div className="relative w-full h-48">
                    <img
                        src={bannerImage}
                        alt="Banner do Projeto"
                        className="w-full h-full object-cover"
                    />
                    <div className="w-full h-full flex justify-end items-start absolute top-0 right-0">
                        <div className="mx-6 my-5">
                            <button className="cursor-pointer text-xl bg-white p-3 shadow-lg shadow-black-500/50 rounded-full" onClick={() => setIsOpenImagePopup(true)}>
                                <img src={editaIcon} alt="" />
                            </button>
                            {isOpenImagePopup && (
                                <PopUpImage
                                    closePopup={() => setIsOpenImagePopup(false)}
                                    handleImageUpload={handleImageUpload}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="lg:p-6 mt-4 lg:mt-0">
                    <h1 className="text-xl lg:text-3xl font-bold">{project?.name}</h1>
                    <p className="text-md lg:text-lg font-medium mt-2">{project?.description}</p>
                    <div className="border border-gray-200 mt-4"></div>
                </div>
            </div>
            <div className="flex mt-4 lg:mt-0 flex-col gap-6">
                <div className="flex flex-col items-center lg:flex-row justify-between lg:mx-16 gap-4 lg:mb-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <Filter onFilter={() => console.log('debug')} />
                            <BotaoPadrao nome="Nova Tarefa" icone="add" onClick={() => setIsOpenNewTask(true)} />
                            {isOpenNewTask && (
                                <FormPopUp
                                    onClose={onCloseNewTask}
                                    type="tasks"
                                    title="Nova Tarefa"
                                    descriptionLabel="Descrição"
                                    namePlaceholder="Título"
                                    descriptionPlaceholder="Descrição"
                                />
                            )}
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            {project?.tasks && project.tasks.length > 0 ? (
                                project.tasks.map((task) => (
                                    <CardComentario
                                        key={task.id}
                                        titulo={task.titulo}
                                        comentario={task.comentario}
                                    />
                                ))
                            ) : (
                                <div className="w-full h-52 flex items-center justify-center">
                                    <p>Não há tarefas cadastradas no momento</p>
                                </div>
                            )}
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
        </section>
    );
};
