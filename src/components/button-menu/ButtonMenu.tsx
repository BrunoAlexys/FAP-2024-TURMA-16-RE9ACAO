import { twMerge } from 'tailwind-merge';
import SetaMenu from './assets/seta-menu.png';
import SetaNotificacao from './assets/arrowsRed.png'

type ButtonMenuProps = {
    menu?: boolean;
    toggleMenu?: () => void;
    target?: 'button' | 'image' | 'both'; // Define o alvo das alterações
    buttonStyle?: string;
    imageStyle?: string;
    temNotificacao?: boolean;
    tipo?: string;
};

function setarTipoBotão(tipo: string, temNotificacao: boolean) {
    if (tipo == "notificacao") {
        if (temNotificacao) {
            return SetaNotificacao
        } else {
            return SetaMenu
        }
    } else {
        return SetaMenu
    }
}

export const ButtonMenu = ({ menu, toggleMenu, target = 'both', buttonStyle, imageStyle, tipo, temNotificacao }: ButtonMenuProps) => {
    return (
        <>
            <button
                id="menuBtn"
                className={twMerge(
                    'w-14 h-14 rounded-tr-xl rounded-br-xl bg-gradient-to-l z-30 from-colorMenuPrimary to-colorMenuSecondary flex items-center justify-center absolute top-10 transition-all duration-500',
                    menu ? 'left-72' : 'left-28',
                    target === 'button' || target === 'both' ? buttonStyle : ''
                )}
                onClick={toggleMenu}
            >
                <img
                    src={setarTipoBotão(tipo || "menu", temNotificacao || false)}
                    alt="Ícone da seta do menu"
                    className={twMerge(
                        'transform transition-transform duration-500',
                        menu ? '' : 'rotate-180',
                        target === 'image' || target === 'both' ? imageStyle : ''
                    )}
                />
            </button>
        </>
    );
};