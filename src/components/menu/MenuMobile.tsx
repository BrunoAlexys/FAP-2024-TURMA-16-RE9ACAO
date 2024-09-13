import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuMobile = () => {
    const [active, setActive] = useState(0);
    const Menus = [
        {
            name: "Dashboard",
            icon: "dashboard.png",
            dis: "translate-x-0",
            id: "/dashboard",
        },
        {
            name: "Projetos",
            icon: "projetos.png",
            dis: "translate-x-16",
            id: "/projetos",
        },
        {
            name: "Parceiros",
            icon: "parceiros.png",
            dis: "translate-x-32",
            id: "/parceiros",
        },
        {
            name: "Notificações",
            icon: "notificacao.png",
            dis: "translate-x-48",
            id: "/notificacoes",
        },
        {
            name: "Perfil",
            icon: "perfil.png",
            dis: "translate-x-64",
            id: "/perfil",
        },
    ];
    return (
        <div className="w-full bg-gradient-to-r items-end relative bottom-0 from-colorMenuPrimary to-colorMenuSecondary px-6 rounded-t-xl mt-7 lg:hidden">
            <div className="flex justify-center">
                <ul className="flex relative">
                    <span
                        className={`bg-colorCardTerciary ${Menus[active].dis} duration-500 h-16 w-16 absolute -top-5 rounded-full border-4 border-white`}
                    >
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-cantoEsquerdo"></span>
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-cantoDireito"></span>
                    </span>
                    {Menus.map((menu, i) => (
                        <li key={i} className="w-16 relative">
                            <Link
                                to={menu.id}
                                className="flex flex-col items-center pt-6 pb-6"
                                onClick={() => {
                                    setActive(i);
                                }}
                            >
                                <span
                                    className={`cursor-pointer duration-500 ${
                                        i === active && "-mt-6"
                                    }`}
                                >
                                    <img
                                        className="w-6"
                                        src={`src/components/menu/assets/${menu.icon}`}
                                        alt="djkalsjf"
                                    />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
