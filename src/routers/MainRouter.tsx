import { useRoutes } from "react-router-dom"
import { Dashboard } from "../pages/dashbord/Dashbord";
import { Projeto } from "../pages/projeto/Projeto";
import { ParceiroComponent } from "../pages/parceiro/Parceiro";
import { Configuracao } from "../pages/configuracao/Configuracao";
import { Perfil } from "../pages/perfil/Perfil";
import { NotificacoesMobile } from "../pages/notificacoesMobile/NotificacoesMobile";

export const MainRouter = () => {
    const routes = useRoutes([
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/projetos", element: <Projeto /> },
        { path: "/parceiros", element: <ParceiroComponent /> },
        { path: "/configuracao", element: <Configuracao /> },
        { path: "/perfil", element: <Perfil /> },
        { path: "/notificacoes", element: <NotificacoesMobile /> },
    ]);

    return routes;
};