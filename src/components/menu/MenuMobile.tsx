import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const MenuMobile = () => {

    const location = useLocation()

    const setarSelecionado = (pathname: string) => {
        if (/^\/projetos(\/\d+)?$/.test(pathname)) {
            return 1; // Índice do menu "Projetos"
        }

        if (/^\/parceiros(\/\d+)?$/.test(pathname)) {
            return 2; // Índice do menu "Parceiros"
        }

        if (/^\/projeto\/\d+$/.test(pathname)) {
            return 1; // Projetos com ID
        }

        if (/^\/parceiro\/\d+$/.test(pathname)) {
            return 2; // Parceiros com ID
        }

        switch (pathname) {
            case "/dashboard":
                return 0;
            case "/notificacoes":
                return 3;
            case "/perfil":
                return 4;
            case "/editar":
                return 4;
            default:
                return 0; // Padrão para rotas desconhecidas
        }
    };


    const [active, setActive] = useState(() => setarSelecionado(location.pathname));

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

    useEffect(() => {
        setActive(setarSelecionado(location.pathname));
    }, [location.pathname]);

    return (
        <div className="w-full bg-gradient-to-r absolute bottom-0 from-colorMenuPrimary to-colorMenuSecondary px-6 mt-1.5 rounded-t-xl lg:hidden">
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
                                className={clsx(`flex flex-col items-center py-6`)}
                                onClick={() => {
                                    setActive(setarSelecionado(menu.id));
                                }}
                            >
                                <span
                                    className={clsx(
                                        "cursor-pointer duration-500 flex justify-center items-center",
                                        i === active && "-mt-6"
                                    )}
                                >
                                    <img
                                        className={clsx(
                                            "transition-all duration-500",
                                            i === 4 && active === 4 ? "w-10 h-10 -mt-2" : "w-6 h-6"
                                        )}
                                        src={`src/components/menu/assets/${menu.icon}`}
                                        alt={menu.name}
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
