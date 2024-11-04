import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/card-component/Card";
import Imagem from "./assets/perfil.png";
import { Search } from "../../components/search-component/Search";
import { useNavigate } from "react-router-dom";
import { Parceiro } from "../../types/parceiro";

export const ParceiroComponent = () => {

    const [parceiro, setParceiro] = useState<Parceiro[]>([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (value: string) => {
        setSearch(value);
    };

    useEffect(() => {
        axios.get("http://localhost:3001/parceiros")
            .then((response) => {
                setParceiro(response.data);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, []);

    const filterCards = parceiro.filter(parceiro => parceiro?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <section id="parceiros" className="flex flex-col items-center gap-6 px-4 py-2 mt-5 max-h-[calc(100vh-92px)] lg:max-h-screen overflow-auto">
            <div className="w-full lg:w-[84%] flex justify-between items-center gap-2" id="filters">
                <div className="flex justify-between items-center w-full lg:w-1/2 gap-2">
                    <Search onSearchChange={handleSearchChange} />
                </div>
            </div>

            <div className="flex flex-col w-full gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                {filterCards.length > 0 ? (
                    filterCards.map((parceiro) => (
                        <Card key={parceiro.id} img={Imagem} projectName={parceiro.name} tipo={parceiro.tipo} onClick={() => navigate(`/parceiro/${parceiro.id}`)}>
                            {parceiro.description}
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-72">Nenhum parceiro cadastrado</p>
                )}
            </div>
        </section>
    );
};