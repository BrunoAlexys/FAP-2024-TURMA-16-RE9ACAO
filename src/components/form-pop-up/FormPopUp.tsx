import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormCreateProject } from '../../types/FormCreateProject';
import { CreateProjectScheme } from '../../utils/CreateProjectScheme';
import axios from 'axios';

type FormPopUpProps = {
    onClose: () => void;
    type: 'edit' | 'projects' | 'tasks' | 'curso'; // Novo: tipo de formulário
    title: string; // Novo: título do formulário
    descriptionLabel: string; // Novo: rótulo da descrição
    namePlaceholder: string; // Novo: placeholder para o nome
    descriptionPlaceholder: string; // Novo: placeholder para a descrição
};

export const FormPopUp = ({
    onClose,
    type,
    title,
    descriptionLabel,
    namePlaceholder,
    descriptionPlaceholder,
}: FormPopUpProps) => {
    const handleSave = async (data: FormCreateProject) => {
        try {
            await axios.post(`http://localhost:3001/${type}`, data);
            reset();
            onClose();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                console.error(error);
                throw new Error(String(error));
            }
        }
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormCreateProject>({
        resolver: zodResolver(CreateProjectScheme),
        defaultValues: {
            tipo: 0, // Definir o valor padrão de 'tipo' como 0
        }
    });

    return (
        <form onSubmit={handleSubmit(handleSave)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[600px] sm:w-[400px] sm:h-[340px] bg-popup rounded-lg shadow-lg p-6 flex flex-col m-3">
                <div>
                    <h1 className="text-lg font-semibold mb-4">{title}</h1>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={namePlaceholder}
                        {...register('name')}
                    />
                    {errors.name && <span className="text-xs text-red-500 ml-4">{errors.name.message as string}</span>}
                </div>

                <div>
                    <h1 className="text-lg font-semibold mb-4">{descriptionLabel}</h1>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg h-28 sm:h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={descriptionPlaceholder}
                        {...register('description')}
                    ></textarea>
                    {errors.description && <span className="text-xs text-red-500 ml-4">{errors.description.message as string}</span>}
                </div>

                {/* Campo 'tipo' oculto, com valor padrão */}
                <input
                    type="hidden"
                    value={0}
                    {...register('tipo')}
                />

                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-600 font-bold px-4 py-2 mr-4"
                    >Cancelar</button>
                    <button
                        type="submit"
                        className="bg-colorMenuPrimary text-white px-6 py-2 rounded-md font-bold"
                    >Adicionar</button>
                </div>
            </div>
        </form>
    );
};
