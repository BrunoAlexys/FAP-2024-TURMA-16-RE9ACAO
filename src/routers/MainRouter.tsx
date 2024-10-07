import { useRoutes } from "react-router-dom"
import { Dashboard } from "../pages/dashbord/Dashbord";
import { Projeto } from "../pages/projeto/Projeto";
import { ParceiroComponent } from "../pages/parceiro/Parceiro";
import { Configuracao } from "../pages/configuracao/Configuracao";
import { Perfil } from "../pages/perfil/Perfil";
import { NotificacoesMobile } from "../pages/notificacoesMobile/NotificacoesMobile";
import { CadastroEmpresa } from "../pages/cadastro-empresa/CadastroEmpresa";
import { CadastroInstituicao } from "../pages/cadastro-instituicao/CadastroInstituicao";
import { Login } from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import { CadastroAluno } from "../pages/cadastro-aluno/CadastroAluno";
import { CadastroProfessor } from "../pages/cadastro-professor/CadastroProfessor";


export const MainRouter = () => {
    const routes = useRoutes([
        { path: "/dashboard", element: <PrivateRoute element={<Dashboard />} /> },
        { path: "/projetos", element: <PrivateRoute element={<Projeto />} /> },
        { path: "/parceiros", element: <PrivateRoute element={<ParceiroComponent />} /> },
        { path: "/configuracao", element: <PrivateRoute element={<Configuracao />} /> },
        { path: "/perfil", element: <PrivateRoute element={<Perfil />} /> },
        { path: "/notificacoes", element: <PrivateRoute element={<NotificacoesMobile />} /> },
        { path: "/cadastro-empresa", element: <CadastroEmpresa /> },  // Rota pública
        { path: "/cadastro-instituicao", element: <CadastroInstituicao /> }, // Rota pública
        { path: "/cadastro-aluno", element: <CadastroAluno /> }, // Rota pública
        { path: "/cadastro-professor", element: <CadastroProfessor /> }, //Rota pública
        { path: "/", element: <Login /> }, // Rota pública
    ]);

    return routes;
};