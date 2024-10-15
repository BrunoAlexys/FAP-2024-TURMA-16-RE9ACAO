import { twMerge } from "tailwind-merge";
import { InputType } from "../../enum/input-type";
import InputMask from "react-input-mask";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
interface InputProps<T extends FieldValues> {
    type: InputType
    placeholder?: string;
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>
    error: FieldErrors<T>
}

export const Input = <T extends FieldValues>({ type, placeholder, label, register, error, name }: InputProps<T>) => {

    const getMask = (type: string) => {
        switch (type) {
            case InputType.CNPJ:
                return "99.999.999/9999-99";
            case InputType.CPF:
                return "999.999.999-99";
            case InputType.CEP:
                return "99999-999";
            case InputType.Phone:
                return "(99) 99999-9999";
            default:
                return null;
        }
    };

    const mask = getMask(type);

    const ufOptions = [
        "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA",
        "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
        "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];

    return (
        <div className="w-full flex flex-col gap-2">
            <label className={'px-2 text-lg font-bold'}>
                {label}
            </label>
            {type === "UF" ? (
                <select
                    className={twMerge(
                        'border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2 focus:border-colorMenuPrimary appearance-none relative',
                        'custom-select', error[name] ? 'border-red-500' : ''
                    )}
                    {...register(name)}
                >
                    <option value="">Selecione o Estado</option>
                    {ufOptions.map(uf => (
                        <option key={uf} value={uf}>
                            {uf}
                        </option>
                    ))}
                </select>
            ) : mask ? (
                <InputMask
                    mask={mask}
                    placeholder={placeholder}
                    type={type}
                    className={twMerge(
                        'border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2',
                        error[name] ? 'border-red-500' : 'focus:border-colorMenuPrimary'
                    )}
                    {...register(name)}
                />
            ) :
                (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={twMerge(
                            'border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2',
                            error[name] ? 'border-red-500' : 'focus:border-colorMenuPrimary'
                        )}
                        {...register(name)}
                    />
                )}
            {error && <span className="text-xs text-red-500 ml-4">{(error[name]?.message as string) || ''}</span>}
        </div>
    );
};
