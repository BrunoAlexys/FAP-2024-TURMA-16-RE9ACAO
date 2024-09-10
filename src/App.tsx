import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MenuMobile } from "./components/menuMobile/menuMobile";
import { Projetos } from "./components/pages/projetos";
import { Dashboard } from "./components/pages/dashboard";
import { Perfil } from "./components/pages/perfil";
import { Parceiros } from "./components/pages/parceiros";
import { Configuracoes } from "./components/pages/configuracoes";

const router = createBrowserRouter([
  {path: '/', element: <Projetos />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/perfil', element: <Perfil />},
  {path: '/parceiros', element: <Parceiros />},
  {path: 'configuracoes', element: <Configuracoes />}
])

export const App = () => {
  return (
    <section className="w-full h-svh flex" id="principal">
      <RouterProvider router={router} />
      <MenuMobile></MenuMobile>
    </section>
  );
};
