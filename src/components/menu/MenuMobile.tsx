import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const MenuMobile = () => {

    const location = useLocation()

    function setarSelecionado(location: string){
        switch(location){
            case "/dashboard":
                return 0
            case "/projetos":
                return 1
            case "/parceiros":
                return 2
            case "/notificacoes":
                return 3
            case "/perfil":
                return 4
            default:
                return 0
        }
    }
    const [active, setActive] = useState(setarSelecionado(location.pathname));
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
        <div className="w-full bg-gradient-to-r items-end relative bottom-0 from-colorMenuPrimary to-colorMenuSecondary px-6 mt-1.5 rounded-t-xl lg:hidden">
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
