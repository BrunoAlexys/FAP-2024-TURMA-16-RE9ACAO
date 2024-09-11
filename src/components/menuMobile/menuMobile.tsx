import { useState } from "react";
import { Link } from "react-router-dom";

export const MenuMobile = () => {
    const Menus = [
        { name: "Perfil", icon: "perfil.png", dis: "translate-x-0", id: '/perfil'},
        { name: "Dashboard", icon: "dashboard.png", dis: "translate-x-16", id: '/dashboard'},
        { name: "Projetos", icon: "projetos.png", dis: "translate-x-32", id: '/'},
        { name: "Parceiros", icon: "parceiros.png", dis: "translate-x-48", id: '/parceiros'},
        { name: "Configurações", icon: "configuracoes.png", dis: "translate-x-64", id: '/configuracoes'},
    ];

    const [active, setActive] = useState(2);

    return (
        <div className="w-full bg-gradient-to-r items-end relative bottom-0 from-azulPrimario to-azulPrimario2 px-6 rounded-t-xl lg:max-w-20 lg:h-screen lg:bg-gradient-to-b lg:rounded-none">
            <div className="flex justify-center">
                <ul className="flex relative lg:flex-col lg:justify-evenly lg:h-screen">
                    <span
                        className={`bg-laranjaPrimario ${Menus[active].dis} duration-500 border-4 border-white h-16 w-16 absolute -top-5 rounded-full lg:hidden`}
                    >
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-cantoEsquerdo lg:hidden"></span>
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-cantoDireito lg:hidden"></span>
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
                                        src={`src/components/menuMobile/img/${menu.icon}`}
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
