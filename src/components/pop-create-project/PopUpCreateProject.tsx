import { useState } from 'react';
type CreateProjectPopupProps = {
    onClose: () => void;
    onSave: (projectData: { title: string; description: string }) => void;
};

export const CreateProjectPopUp = ({ onClose, onSave }: CreateProjectPopupProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        onSave({ title, description });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[600px] bg-popup rounded-lg shadow-lg p-6 flex flex-col">
                <h1 className="text-lg font-semibold mb-4">Título do Projeto</h1>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Crie um título para o projeto"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <h1 className="text-lg font-semibold mb-4">Descrição</h1>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Adicione uma descrição ao projeto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="flex justify-end mt-6">
                    <button 
                    onClick={onClose} 
                    className="text-gray-600 font-bold px-4 py-2 mr-4"
                    >Cancelar</button>
                    <button
                        onClick={handleSave}
                        className="bg-colorMenuPrimary text-white px-6 py-2 rounded-md font-bold"
                    >Adicionar</button>
                </div>
            </div>
        </div>
    );
};
