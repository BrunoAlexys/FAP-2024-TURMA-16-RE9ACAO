import Dashbord from './assets/dashbord.png';
import Projetos from './assets/projetos.png';
import Parceiros from './assets/parceiros.png';
import Configuracao from './assets/configuracao.png';
import Sair from './assets/sair.png';
import SetaMenu from './assets/seta-menu.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

type MenuItems = {
    name?: string,
    icon: string,
    path: string,
}

export const Menu = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const menuItens: MenuItems[] = [
        { name: 'Dashbord', icon: Dashbord, path: '/dashbord' },
        { name: 'Projetos', icon: Projetos, path: '/projetos' },
        { name: 'Parceiros', icon: Parceiros, path: '/parceiros' },
        { name: 'Configuração', icon: Configuracao, path: '/configuracao' },
    ];

    const [menu, setMenu] = useState(true);

    const toggleMenu = () => setMenu(!menu);

    return (
        <>
            <div
                className={clsx(
                    'transition-all duration-500 ease-in-out h-screen bg-gradient-to-b from-colorMenuPrimary to-colorMenuSecondary flex flex-col',
                    menu ? 'w-72' : 'w-28'
                )}
            >
                <div className="flex flex-col items-center gap-16 flex-1 mt-10">
                    <div
                        className={clsx(
                            'bg-white rounded-full transition-all duration-500',
                            menu ? 'w-[100px] h-[100px] opacity-100' : 'w-[50px] h-[50px] opacity-0'
                        )}
                    >
                        <img src={''} alt="" />
                    </div>
                    <div
                        className={clsx(
                            'border-b-2 border-white transition-all duration-500',
                            menu ? 'w-52 opacity-100' : 'w-20 opacity-0'
                        )}
                    />
                </div>
                <div
                    className={clsx(
                        'flex flex-col gap-12 items-start flex-2 mt-16 text-white font-bold transition-all duration-500',
                        menu ? 'ml-2' : 'ml-0'
                    )}
                >
                    {menuItens.map((item) => (
                        <Link
                            to={item.path}
                            key={item.name}
                            onClick={() => setSelected(item.path)}
                            className={clsx(
                                'flex items-center w-full px-8 gap-6 cursor-pointer',
                                selected === item.path ? 'border-l-4 border-orange-500' : ''
                            )}
                        >
                            <img
                                className="flex-shrink-0"
                                src={item.icon}
                                alt={`Ícone de ${item.name}`}
                                width={25}
                                height={25}
                            />
                            <p
                                className={clsx(
                                    'leading-none transition-opacity duration-500',
                                    menu ? 'opacity-100' : 'opacity-0'
                                )}
                            >
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-start items-end mb-10 px-9 gap-4 flex-1 text-white font-bold">
                    <div>
                        <button className="flex items-center gap-6">
                            <img
                                className="flex-shrink-0"
                                src={Sair}
                                alt="Ícone de sair"
                                width={25}
                                height={25}
                            />
                            <p
                                className={clsx(
                                    'leading-none transition-opacity duration-500',
                                    menu ? 'opacity-100' : 'opacity-0'
                                )}
                            >
                                Sair
                            </p>
                        </button>
                    </div>
                </div>
                <button
                    className={clsx(
                        'w-14 h-14 rounded-tr-xl rounded-br-xl bg-gradient-to-l from-colorMenuPrimary to-colorMenuSecondary flex items-center justify-center absolute top-10 transition-all duration-500',
                        menu ? 'left-72' : 'left-28'
                    )}
                    onClick={toggleMenu}
                >
                    <img
                        src={SetaMenu}
                        alt="Ícone da seta do menu"
                        className={clsx(
                            'transform transition-transform duration-500',
                            menu ? '' : 'rotate-180'
                        )}
                    />
                </button>
            </div>
        </>
    );
};

