import { useState } from 'react';
import Add from './assets/mais.png';
import { AdicionarPopup } from '../pop-up/adicionar-component/popUpAdicionar';
import PerfilDefault from "./assets/Default-Profile.png";

type Participante = {
    id: string;
    name: string;
    img: string;
}

type CardParticipanteProps = {
    item: Participante[];
    title: string;
}

export const CardParticipante = ({ item, title }: CardParticipanteProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="w-[240px]">
            <div className="w-full h-16 rounded-t-2xl flex items-center justify-center text-white font-semibold bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary">
                <h2>{title}</h2>
            </div>
            <div className='max-h-40 overflow-y-auto'>
                {item.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 w-full p-1 bg-[#D9D9D9] border-b-[1px] border-[#B1AFAF]">
                        <div className="w-12 h-12 ml-1 rounded-full bg-white">
                            <img src={!item.img ? item.img : PerfilDefault} className='rounded-full' />
                        </div>
                        <h5>{item.name}</h5>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center w-full h-16 rounded-b-2xl bg-[#ECE9E9]'>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-colorMenuPrimary" onClick={() => setIsOpen(true)}>
                    <img className='w-5 h-5' src={Add} alt="Icone de adicionar" />
                </button>
            </div>
            {isOpen && <AdicionarPopup onClose={onClose} nome={title} />}
        </div>
    );
}