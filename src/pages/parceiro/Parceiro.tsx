import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/card-component/Card";
import Imagem from "./assets/perfil.png";
import { Search } from "../../components/search-component/Search";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { CreateProjectPopUp } from "../../components/pop-create-project/PopUpCreateProject";
import { CardData } from "../../types/CardData";

export const ParceiroComponent = () => {

    const [cards, setCards] = useState<CardData[]>([]);
    const [search, setSearch] = useState('');
    const [create, setCreate] = useState(false);

    const handleSearchChange = (value: string) => {
        setSearch(value);
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

    const filterCards = cards.filter(card => card?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const handleCreate = () => {
        setCreate(true)
    }

    return (
        <section id="parceiros" className="flex flex-col items-center gap-6">
            <div className="w-full lg:w-[84%] flex justify-between items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search onSearchChange={handleSearchChange} />
                </div>
                <BotaoPadrao nome="Criar" icone="add" onClick={handleCreate} />
            </div>

            <div className="flex flex-col w-full gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {filterCards.length > 0 ? (
                    filterCards.map((card) => (
                        <Card key={card.id} img={Imagem} projectName={card.name} tipo={card.tipo}>
                            {card.description}
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-72">Nenhum parceiro cadastrado</p>
                )}
            </div>

            {create && <CreateProjectPopUp onClose={() => setCreate(false)} type="parceiros" />}
        </section>
    );
};