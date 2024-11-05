import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { AdicionarPopup } from "./components/pop-up/adicionar-component/popUpAdicionar";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
            <App/>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
