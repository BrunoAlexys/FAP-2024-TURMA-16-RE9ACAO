import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/card-component/Card";
import { Parceiro } from "../../types/Parceiros";
import Imagem from "./assets/perfil.png";
import { Search } from "../../components/search-component/Search";
import { Filter } from "../../components/filter-component/Filter";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";

export const ParceiroComponent = () => {

    const [cards, setCards] = useState<Parceiro[]>([]);
    const [search, setSearch] = useState('');
    const [filterTipo, setFilterTipo] = useState(0);

    const handleSearchChange = (value: string) => {
        setSearch(value);
    };

    const handleFilter = (filter: string) => {
        const filterNumber = Number(filter);
        setFilterTipo(filterNumber);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/parceiros")
            .then((response) => {
                setCards(response.data);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, []);

    let filterCards = cards.filter(card => card.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    if (filterTipo != 0) {
        filterCards = filterCards.filter(card => card.tipo.toString().includes(filterTipo.toString()));
    }

    return (
        <section id="parceiros" className="flex flex-col items-center gap-6">
            <div className="w-full lg:w-[84%] flex justify-between items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search onSearchChange={handleSearchChange} />
                </div>
                <BotaoPadrao nome="Criar" icone="add"></BotaoPadrao>
            </div>

            <div className="flex flex-col w-full gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {filterCards.map((card) => (
                    <Card key={card.id} img={Imagem} projectName={card.name} tipo={card.tipo}>
                        {card.description}
                    </Card>
                ))}
            </div>
        </section>
    );
};