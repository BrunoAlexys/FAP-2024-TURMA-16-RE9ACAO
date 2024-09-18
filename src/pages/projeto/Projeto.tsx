import { useEffect, useState } from "react";
import { BotaoPadrao } from "../../components/botao-component/BotaoPadrao";
import { Card } from "../../components/card-component/Card";
import { Filter } from "../../components/filter-component/Filter";
import { Search } from "../../components/search-component/Search";
import imagem from './assets/perfil.png'
import axios from "axios";

export const Projeto = () => {
    
    interface CardData{
        id: number,
        projectName: string,
        tipo: number,
        children?: React.ReactNode
    }

    const [cards, setCards] = useState<CardData[]>([])

    useEffect(()=>{
        axios.get("http://localhost:3001/projects")
        .then((response)=>{
            setCards(response.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    }, [])

    return (
        <section id="dashboard" className="flex flex-col items-center gap-6">
            <div className="w-full lg:w-[84%] flex justify-between items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search />
                    <Filter />
                </div>
                <BotaoPadrao nome="Criar" icone="add"></BotaoPadrao>
            </div>
            <div id="projetosContainer" className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {cards.map((card)=>(
                    <Card key={card.id} img={imagem} projectName={card.projectName} tipo={card.tipo}>
                        {card.children}
                    </Card>
                ))}
            </div>
        </section>
    );
};