import Icon from './assets/comercial.png';

type CursoProps = {
    name: string,
    img: string
    contador: number
}

export const Curso = ({ name, img, contador }: CursoProps) => {
    return (
        <div className="flex w-full h-28 rounded-lg relative bg-[#D9D9D9] items-center justify-between px-6 border border-black">
            <div className="flex items-center space-x-4 w-full">
                <div className="w-14 h-14 rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <img src={img} alt={name} className="object-cover w-full h-full" />
                </div>
                <h4 className="text-base font-semibold truncate whitespace-nowrap w-full max-w-[420px]">
                    {name}
                </h4>
            </div>

            {/* Seção do contador */}
            <div className="h-full absolute right-2 -bottom-14 flex items-center justify-center mb-6 space-x-1 text-base font-semibold">
                <p>{contador}</p>
                <img src={Icon} alt="Ícone do contador" className="w-5" />
            </div>
        </div>
    );
}