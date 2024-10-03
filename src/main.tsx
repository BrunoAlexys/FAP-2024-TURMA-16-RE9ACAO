import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CadastroEmpresa } from "./pages/cadastro-empresa/CadastroEmpresa";
import { App } from "./app";
import { Login } from "./pages/login/Login";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <CadastroEmpresa />
            {/* <App /> */}
        </BrowserRouter>
    </StrictMode>
);
