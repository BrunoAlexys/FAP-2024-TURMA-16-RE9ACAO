import clsx from "clsx";
import SetaMenu from './assets/seta-menu.png';

type ButtonMenuProps = {
    menu?: boolean;
    toggleMenu?: () => void;
};

export const ButtonMenu = ({ menu, toggleMenu }: ButtonMenuProps) => {
    return (
        <>
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
        </>
    );
};