import { twMerge } from "tailwind-merge";
import { InputType } from "../../enum/input-type";
import InputMask from "react-input-mask";
import { ChangeEvent, InputHTMLAttributes, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
    type: InputType,
    placeholder?: string
    label: string,
    error?: string,
    register?: UseFormRegisterReturn,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type, placeholder, label, error, register, onChange }: InputProps) => {
    const inputRef = useRef(null);

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
                        'custom-select'
                    )}
                    {...register}
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
                    ref={inputRef}
                    mask={mask}
                    placeholder={placeholder}
                    className={twMerge(
                        'border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2 focus:border-colorMenuPrimary',
                    )}
                    {...register}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    ref={inputRef}
                    placeholder={placeholder}
                    className={twMerge(
                        'border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2 focus:border-colorMenuPrimary',
                    )}
                    {...register}
                    onChange={onChange}
                />
            )}
            {error && (
                <p className="text-red-500 text-xs ml-4">{error}</p>
            )}
        </div>
    );
};
