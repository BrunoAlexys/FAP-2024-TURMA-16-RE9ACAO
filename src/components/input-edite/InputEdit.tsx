
type InputEditProps = {
    label: string;
    type: string;
    value?: string;
}

export const InputEdit = ({ label, type, value }: InputEditProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold ml-2">{label}</label>
            <input
                type={type}
                className="w-full p-2 bg-gray-100/70 border-2 border-gray-300 focus:outline-none rounded-md"
                value={value}
            />
        </div>
    );
}