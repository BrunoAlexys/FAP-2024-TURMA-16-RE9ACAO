import { useRoutes } from "react-router-dom"
import { Configuracoes } from "./pages/configuracoes"
import { Dashboard } from "./pages/dashboard"
import { Parceiros } from "./pages/parceiros"
import { Perfil } from "./pages/perfil"
import { Projetos } from "./pages/projetos"


export const MainRouters = () => {
    
    const routes = useRoutes([
      {path: '/', element: <Projetos />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/perfil', element: <Perfil />},
      {path: '/parceiros', element: <Parceiros />},
      {path: 'configuracoes', element: <Configuracoes />}
    ])

    return routes
}
