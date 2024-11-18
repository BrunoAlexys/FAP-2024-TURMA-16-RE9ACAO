import { useParams } from "react-router-dom";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { CardParticipante } from "../../components/card-participante/CardParticipante";
import { FormPopUp } from "../../components/form-pop-up/FormPopUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { Parceiro } from "../../types/parceiro";
import { Curso } from "./curso";
import bannerDefault from "./curso/assets/Banner.png"
import editaIcon from "./curso/Assets/editar.png";
import { PopUpImage } from "../../components/popup-image/PopUpImage";

export const InfoParceiro = () => {
    const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
    const [bannerImage, setBannerImage] = useState<string>(bannerDefault);
    const { id } = useParams<{ id: string }>();

    const [parceiro, setParceiro] = useState<Parceiro | null>(null);
    const [isOpenNewTask, setIsOpenNewTask] = useState(false);

    const onCloseNewTask = () => {
        setIsOpenNewTask(false);
    }
    const handleImageUpload = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setBannerImage(imageUrl);
    };

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
        <div className="w-full h-full max-h-[calc(100vh-92px)] overflow-auto lg:max-h-screen">
            <div className="flex flex-col">
            <div className="relative w-full h-48">
                    <img
                        src={bannerImage}
                        alt="Banner do Perfil"
                        className="w-full h-full object-cover"
                    />
                    <div className="w-full h-full flex justify-end items-start absolute top-0 right-0">
                        <div className="mx-6 my-5">
                            <button className="cursor-pointer text-xl bg-white p-3 shadow-lg shadow-black-500/50 rounded-full" onClick={() => setIsOpenImagePopup(true)}>
                                <img src={editaIcon} alt="editar" />
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
                <div className="lg:p-6 px-4 sm:pt-3 ">
                    <h1 className="text-xl lg:text-3xl font-medium">{parceiro?.name}</h1>
                    <p className="text-md lg:text-lg font-normal mt-2">{parceiro?.description}</p>
                    <div className="border-2 border-b-gray-200 mt-4"></div>
                </div>
            </div>
            <div className="flex flex-col gap-6 px-4 sm:pt-2">
                <div className="flex justify-between flex-col lg:flex-row lg:mx-16 gap-4 mb-4 lg:gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-bold">Cursos cadastrados</h3>
                            <BotaoPadrao nome="Curso" icone="add" onClick={() => setIsOpenNewTask(true)} />
                            {/* Chamar novo pop-up */}
                            {isOpenNewTask && <FormPopUp onClose={onCloseNewTask} type="curso" title="Novo Curso" descriptionLabel="Descrição" namePlaceholder="Título" descriptionPlaceholder="Descrição" />}
                        </div>
                        <div className="flex flex-col gap-4 md:items-center">
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
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mb-10 md:mt-4  items-center justify-center">
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