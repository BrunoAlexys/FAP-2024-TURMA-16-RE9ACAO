import { useRoutes } from "react-router-dom"
import { Dashboard } from "../pages/dashbord/Dashbord";
import { Projeto } from "../pages/projeto/Projeto";
import { Parceiro } from "../pages/parceiro/Parceiro";
import { Configuracao } from "../pages/configuracao/Configuracao";

export const MainRouter = () => {
    const routes = useRoutes([
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/projetos", element: <Projeto /> },
        { path: "/parceiros", element: <Parceiro /> },
        { path: "/configuracao", element: <Configuracao /> },
    ]);

    return routes;
};