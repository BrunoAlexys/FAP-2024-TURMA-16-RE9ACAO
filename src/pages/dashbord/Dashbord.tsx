import axios from "axios";
import { useEffect, useState } from "react";

export const Dashboard = () => {

    const [projetos, setProjetos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/projects")
        .then((response)=>{
            setProjetos(response.data)
        })
        .catch(error=>console.error(error))
    })

    return (
        <section id="dashboard" className="px-2 lg:px-20 h-full overflow-auto">
            <div id="projetos" className="border-b-2 py-2 lg:py-4">
                <h2 className="font-medium py-2 lg:text-3xl">
                    Projetos
                </h2>
                <div className="flex w-full gap-2 flex-wrap justify-center items-center">
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorMenuPrimary">
                            <p className="text-white p-3 font-medium text-lg">
                                Totais
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            {projetos.length}
                        </p>
                    </div>
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardPrimary">
                            <p className="text-white p-3 font-medium text-lg">
                                Concluídos
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardSecondary">
                            <p className="text-white p-3 font-medium text-lg">
                                Andamento
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardTerciary">
                            <p className="text-white p-3 font-medium text-lg">
                                Iniciados
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                </div>
            </div>
            <div id="projetos">
                <h2 className="font-medium py-2 lg:text-3xl">
                    Parceiros
                </h2>
                <div className="flex w-full gap-2 flex-wrap justify-center items-center">
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardPrimary">
                            <p className="text-white p-3 font-medium text-lg">
                                Universidades
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardSecondary">
                            <p className="text-white p-3 font-medium text-lg">
                                Professores
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                    <div className="flex flex-col w-[48.8%] lg:w-1/5 rounded-xl overflow-hidden justify-center shadow-cardShadow">
                        <div className="flex justify-center items-center bg-colorCardTerciary">
                            <p className="text-white p-3 font-medium text-lg">
                                Alunos
                            </p>
                        </div>
                        <p className="w-full text-center p-4 text-xl font-medium">
                            60
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
