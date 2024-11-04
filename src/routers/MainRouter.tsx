import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/dashbord/Dashbord";
import { Projeto } from "../pages/projeto/Projeto";
import { ParceiroComponent } from "../pages/parceiro/Parceiro";
import { Configuracao } from "../pages/configuracao/Configuracao";
import { Perfil } from "../pages/perfil/Perfil";
import { NotificacoesMobile } from "../pages/notificacoesMobile/NotificacoesMobile";
import { Login } from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import { CadastrosAluno } from "../pages/cadastros-aluno/CadastrosAluno";
import { Editar } from "../pages/Editar/Editar";
import { InfoProjeto } from "../pages/info-projeto/InfoProjeto";
import { CadastrosEmpresa } from "../pages/cadastro-empresa/CadastrosEmpresa";
import { CadastrosInstituicao } from "../pages/cadastro-instituicao/CadastrosInstituicao";
import { CadastrosProfessor } from "../pages/cadastro-professor/CadastrosProfessor";
import { InfoParceiro } from "../pages/info-parceiro";

export const MainRouter = () => {
    const routes = useRoutes([
        { path: "/dashboard", element: <PrivateRoute element={<Dashboard />} /> },
        { path: "/projetos", element: <PrivateRoute element={<Projeto />} /> },
        { path: "/projeto/:id", element: <PrivateRoute element={<InfoProjeto />} /> },
        { path: "/parceiros", element: <PrivateRoute element={<ParceiroComponent />} /> },
        { path: "/parceiro/:id", element: <PrivateRoute element={<InfoParceiro />} /> },
        { path: "/configuracao", element: <PrivateRoute element={<Configuracao />} /> },
        { path: "/editar", element: <PrivateRoute element={<Editar />} /> },
        { path: "/perfil", element: <PrivateRoute element={<Perfil />} /> },
        { path: "/notificacoes", element: <PrivateRoute element={<NotificacoesMobile />} /> },
        { path: "/cadastro-empresa", element: <CadastrosEmpresa /> },  // Rota pública
        { path: "/cadastro-instituicao", element: <CadastrosInstituicao /> }, // Rota pública
        { path: "/cadastro-aluno", element: <CadastrosAluno /> }, // Rota pública
        { path: "/cadastro-professor", element: <CadastrosProfessor /> }, //Rota pública
        { path: "/", element: <Login /> }, // Rota pública
    ]);

    return routes;
};