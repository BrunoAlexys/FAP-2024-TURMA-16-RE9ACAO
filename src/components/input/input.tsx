import { twMerge } from "tailwind-merge";
import { InputType } from "../../enum/input-type";

type InputProps = {
    type: InputType,
    placeholder?: string
    label: string
}

export const Input = ({ type, placeholder, label }: InputProps) => {
    return (
        <div className="flex flex-col">
            <label className={'px-2 text-lg font-bold'}>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={twMerge(
                    'border border-blue-500 rounded-full px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500'
                )}
            />
        </div>
    );
};