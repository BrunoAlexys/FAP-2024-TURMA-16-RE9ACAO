import { useEffect, useState } from "react";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { Card } from "../../components/card-component/Card";
import { Filter } from "../../components/filter-component/Filter";
import { Search } from "../../components/search-component/Search";
import imagem from './assets/perfil.png'
import axios from "axios";
import { FormPopUp } from "../../components/form-pop-up/FormPopUp";
import { useNavigate } from "react-router-dom";
import { Project } from "../../types/Projects";

export const Projeto = () => {

    const [project, setProject] = useState<Project[]>([]);
    const [search, setSearch] = useState("");
    const [filterTipo, setFilterTipo] = useState(0);
    const [create, setCreate] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = (value: string) => {
        setSearch(value)
    }
    const handleFilter = (filter: string) => {
        const filterNumber = Number(filter)
        setFilterTipo(filterNumber)
    }

    useEffect(() => {
        axios.get("http://localhost:3001/projects")
            .then((response) => {
                setProject(response.data)
            })
            .catch((error) => {
                throw new Error(error);
            })
    }, [])

    let filteredproject = project.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
    if (filterTipo != 0) {
        filteredproject = filteredproject.filter(card => card.tipo.toString().includes(filterTipo.toString()))
    }

    const handleCreate = () => {
        setCreate(true)
    }

    return (
        <section id="projetos" className="px-4 py-4 flex flex-col items-center gap-6 max-h-[calc(100vh-92px)] overflow-auto lg:max-h-screen">
            <div className="w-full lg:w-[84%] flex justify-between lg:mt-5 items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search onSearchChange={handleSearchChange} />
                </div>
                <div className="flex gap-1 items-center">
                    <Filter onFilter={handleFilter} />
                    <BotaoPadrao nome="Criar" icone="add" onClick={handleCreate} />
                </div>
            </div>
            <div id="projetosContainer" className="flex flex-col w-full gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {filteredproject.length > 0 ? (
                    filteredproject.map((project) => (
                        <Card key={project.id} img={imagem} projectName={project.name} tipo={project.tipo} onClick={() => navigate(`/projeto/${project.id}`)}>
                            {project.description}
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-72">Nenhum projeto cadastrado</p>
                )}
            </div>
            {create && <FormPopUp 
                onClose={() => setCreate(false)}
                type="projects"
                title="Criar Projeto"
                namePlaceholder="Nome do Projeto"
                descriptionLabel="Descrição do Projeto"
                descriptionPlaceholder="Descreva o projeto"
            />}
        </section>
    );
};