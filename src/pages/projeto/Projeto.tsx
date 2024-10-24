import { useEffect, useState } from "react";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { Card } from "../../components/card-component/Card";
import { Filter } from "../../components/filter-component/Filter";
import { Search } from "../../components/search-component/Search";
import imagem from './assets/perfil.png'
import axios from "axios";
import { CardData } from "../../types/CardData";
import { CreateProjectPopUp } from "../../components/pop-create-project/PopUpCreateProject";

export const Projeto = () => {

    const [cards, setCards] = useState<CardData[]>([]);
    const [search, setSearch] = useState("");
    const [filterTipo, setFilterTipo] = useState(0);
    const [create, setCreate] = useState(false);

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
                setCards(response.data)
            })
            .catch((error) => {
                throw new Error(error);
            })
    }, [])

    let filteredCards = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
    if (filterTipo != 0) {
        filteredCards = filteredCards.filter(card => card.tipo.toString().includes(filterTipo.toString()))
    }

    const handleCreate = () => {
        setCreate(true)
    }

    return (
        <section id="projetos" className="px-4 py-2 mt-5 flex flex-col items-center gap-6 max-h-[calc(100vh-92px)] lg:max-h-screen lg:overflow-auto">
            <div className="w-full lg:w-[84%] flex justify-between items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search onSearchChange={handleSearchChange} />
                </div>
                <div className="flex gap-2">
                    <Filter onFilter={handleFilter} />
                    <BotaoPadrao nome="Criar" icone="add" onClick={handleCreate} />
                </div>
            </div>
            <div id="projetosContainer" className="flex flex-col w-full gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                        <Card key={card.id} img={imagem} projectName={card.name} tipo={card.tipo}>
                            {card.description}
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-72">Nenhum projeto cadastrado</p>
                )}
            </div>
            {create && <CreateProjectPopUp onClose={() => setCreate(false)} type="projects" />}
        </section>
    );
};