import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/menu/Menu";
import { MainRouter } from "./routers/MainRouter";
import { Notification } from "./components/notification/Notification";
import clsx from "clsx";
import { MenuMobile } from "./components/menu/MenuMobile";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <div className={clsx("lg:flex")}>
                <Menu />
                <section id="mainContent" className="w-full h-[calc(100vh-72px)] overflow-auto px-4 py-4 lg:px-16 lg:h-screen">
                    <MainRouter />
                </section>
                <MenuMobile />
                <Notification />
            </div>
        </BrowserRouter>
    </StrictMode>
);
