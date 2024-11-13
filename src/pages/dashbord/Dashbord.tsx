import axios from "axios";
import { useEffect, useState } from "react";
import { Project } from "../../types/Projects";
import { CardDashboard } from "../../components/cardDashboard";

export const Dashboard = () => {

    const [projetos, setProjetos] = useState([]);
    const [concluidos, setConcluidos] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [inicio, setInicio] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/projects")
            .then((response) => {
                setProjetos(response.data)
                const concluidos = response.data.filter((projetos: Project) => projetos.tipo === 2)
                setConcluidos(concluidos)
                const andamento = response.data.filter((projetos: Project) => projetos.tipo === 1)
                setAndamento(andamento)
                const inicio = response.data.filter((projetos: Project) => projetos.tipo === 3)
                setInicio(inicio)
            })
            .catch(error => console.error(error))
    })

    const [professores, setProfessores] = useState([])
    const [universidades, setUniversidades] = useState([])
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        const professor = axios.get("http://localhost:3001/professor")
        const universidades = axios.get("http://localhost:3001/instituicao")
        const alunos = axios.get("http://localhost:3001/aluno")
        professor.then((response) => { setProfessores(response.data) }).catch(error => console.error(error))
        universidades.then((response) => { setUniversidades(response.data) }).catch(error => console.error(error))
        alunos.then((response) => { setAlunos(response.data) }).catch(error => console.error(error))
    })

    return (
        <section id="dashboard" className="px-2 lg:px-20 h-full overflow-auto">
            <div id="projetos" className="flex flex-col border-b-2 py-2 lg:py-4">
                <h2 className="font-extrabold py-2 my-5 lg:text-3xl">
                    Projetos
                </h2>
                <div className="flex flex-row w-full gap-4 flex-wrap justify-center xl:justify-start items-center p-6">
                    <CardDashboard title="Totais" value={projetos.length} color="bg-colorMenuSecondary" />
                    <CardDashboard title="Concluídos" value={concluidos.length} color="bg-colorCardTerciary" />
                    <CardDashboard title="Andamento" value={andamento.length} color="bg-colorCardSecondary" />
                    <CardDashboard title="Iniciados" value={inicio.length} color="bg-colorCardPrimary" />
                </div>
            </div>
            <div id="parceiros" className="mb-20">
                <h2 className="font-extrabold py-2 my-5 lg:text-3xl">
                    Parceiros
                </h2>
                <div className="flex w-full gap-4 flex-wrap justify-center xl:justify-start items-center p-6">
                    <CardDashboard title="Universidades" value={universidades.length} color="bg-colorMenuSecondary" />
                    <CardDashboard title="Professores" value={professores.length} color="bg-colorCardTerciary" />
                    <CardDashboard title="Alunos" value={alunos.length} color="bg-colorCardPrimary" />
                </div>
            </div>
        </section>
    );
};
