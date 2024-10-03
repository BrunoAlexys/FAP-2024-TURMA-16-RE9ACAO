import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { App } from "./app";
import { CadastroEmpresa } from "./pages/cadastro-empresa/CadastroEmpresa";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <CadastroEmpresa />
        </BrowserRouter>
    </StrictMode>
);
