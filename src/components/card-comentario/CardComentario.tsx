import { useState } from 'react';
import Comentario from './assets/comentarios.png';
import { CommentPopup } from '../pop-up/popUpComment';
import { EditeDelete } from '../card-component/edite-delete';

type CardComentarioProps = {
    titulo: string;
    comentario: string;
}

export const CardComentario = ({ titulo, comentario }: CardComentarioProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const openComment = () => {
        setIsOpen(true);
    }

    const closeComment = () => {
        setIsOpen(false);
    }

    const openEdit = () => {
        setIsOpenEdit(prevState => !prevState);
    }

    return (
        <div className="flex flex-col justify-between bg-[#D9D9D9] w-[640px] h-[250px] p-2 rounded-2xl shadow-md relative">
            <div className='p-3 flex flex-col justify-between mx-2'>
                <div className='flex justify-between mx-2'>
                    <h3 className='font-bold text-xl'>{titulo}</h3>
                    <button className='cursor-pointer text-xl' onClick={openEdit}>...</button>
                    {isOpenEdit && <EditeDelete type='Editar'/>}
                </div>
                <div className='mx-2 mt-3'>
                    <p className='font-medium'>{comentario}</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="rounded-full w-14 h-14 mr-4  bg-colorMenuPrimary flex items-center justify-center" onClick={openComment}>
                    <img className='w-7' src={Comentario} alt="Icone de comentario" />
                </button>
                {isOpen && (
                    <CommentPopup onClose={closeComment} />
                )}
            </div>
        </div>
    );
}