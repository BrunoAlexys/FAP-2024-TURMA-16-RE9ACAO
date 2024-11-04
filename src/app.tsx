import { MenuDesktop } from "./components/menu/MenuDesktop";
import { MainRouter } from "./routers/MainRouter";
import { MenuMobile } from "./components/menu/MenuMobile";
import { Notification } from "./components/notification/Notification";
import clsx from "clsx";
import { useAuth } from "./contexts/AuthProvider";

export const App = () => {

    const { isAuthenticated } = useAuth();

    return (
        <div className={clsx("lg:flex")}>
            {isAuthenticated && <MenuDesktop />} {/* Renderiza MenuDesktop apenas se autenticado */}
            <section
                id="mainContent"
                className="w-full h-screen"
            >
                <MainRouter />
            </section>
            {isAuthenticated && <MenuMobile />} {/* Renderiza MenuMobile apenas se autenticado */}
            {isAuthenticated && <Notification />} {/* Renderiza Notification apenas se autenticado */}
        </div>
    );
};
