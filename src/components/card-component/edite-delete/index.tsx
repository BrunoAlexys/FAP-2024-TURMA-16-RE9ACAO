import { useState } from 'react';
import Editar from './assets/editar.png'
import Excluir from './assets/lixo.png'
import { PopDel } from '../../pop-del/PopDel';
import { FormPopUp } from '../../form-pop-up/FormPopUp';

export const EditeDelete = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const onCloseEdite = () => {
        setIsOpenEdit(false);
    }

    const onCloseDelete = () => {
        setIsOpenDelete(false);
    }

    return (
        <>
            <div className="flex flex-col gap-2 w-32 rounded-md items-center justify-start p-2 absolute right-2 top-14 bg-white shadow-lg border border-gray-300">
                <button className="flex items-center gap-2 p-1 w-full" onClick={() => setIsOpenEdit(true)}>
                    <img src={Editar} alt="Icone de editar" className="w-5 h-5" />
                    <p className="text-black">Editar</p>
                </button>
                <div className='border-t border-gray-300 w-full'></div>
                <button className="flex items-center gap-2 p-1 w-full" onClick={() => setIsOpenDelete(true)}>
                    <img src={Excluir} alt="Icone de excluir" className="w-5 h-5" />
                    <p className="text-black">Excluir</p>
                </button>
            </div>

            {isOpenDelete && <PopDel onClose={onCloseDelete} />}
            {isOpenEdit && <FormPopUp onClose={onCloseEdite} type="tasks" title="Editar Tarefa" descriptionLabel="Descrição" namePlaceholder="Título" descriptionPlaceholder="Descrição" />}
        </>
    );
}