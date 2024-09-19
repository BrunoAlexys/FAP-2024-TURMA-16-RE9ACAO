import { MenuDesktop } from "./components/menu/MenuDesktop";
import { MainRouter } from "./routers/MainRouter";
import { MenuMobile } from "./components/menu/MenuMobile";
import { Notification } from "./components/notification/Notification";
import clsx from "clsx";

export const App = () => {
    return (
        <div className={clsx("lg:flex")}>
            <MenuDesktop />
            <section
                id="mainContent"
                className="w-full h-[calc(100vh-72px)] overflow-auto px-4 py-4 lg:px-16 lg:h-screen"
            >
                <MainRouter />
            </section>
            <MenuMobile />
            <Notification />
        </div>
    );
};
