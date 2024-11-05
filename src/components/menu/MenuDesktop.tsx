import Dashbord from './assets/dashboard.png';
import Projetos from './assets/projetos.png';
import Parceiros from './assets/parceiros.png';
import Configuracao from './assets/configuracao.png';
import Sair from './assets/sair.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ButtonMenu } from '../button-menu/ButtonMenu';
import { useAuth } from '../../contexts/AuthProvider';

type MenuItems = {
    name?: string,
    icon: string,
    path: string,
}

export const MenuDesktop = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const menuItens: MenuItems[] = [
        { name: 'Dashbord', icon: Dashbord, path: '/dashboard' },
        { name: 'Projetos', icon: Projetos, path: '/projetos' },
        { name: 'Parceiros', icon: Parceiros, path: '/parceiros' },
        { name: 'Configuração', icon: Configuracao, path: '/configuracao' },
    ];

    const [menu, setMenu] = useState(true);

    const toggleMenu = () => setMenu(!menu);

    useEffect(() => {
        if (location.pathname === '/editar') {
            setSelected('/configuracao');
        } else if (/^\/projeto\/\d+$/.test(location.pathname)) {
            setSelected('/projetos');
        } else if (/^\/parceiro\/\d+$/.test(location.pathname)) {
            setSelected('/parceiros');
        } else {
            setSelected(location.pathname);  // Atualiza o item selecionado de acordo com a rota atual
        }
    }, [location.pathname]);

    return (
        <div className='hidden lg:block'>
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
                                    menu ? 'opacity-100' : 'hidden'
                                )}
                            >
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-start items-end mb-10 px-8 gap-4 flex-1 text-white font-bold">
                    <div>
                        <button className="flex items-center gap-6"
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                        >
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
                <ButtonMenu menu={menu} toggleMenu={toggleMenu} />
            </div>
        </div>
    );
};
