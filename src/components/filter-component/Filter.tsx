export const Filter = () => {
    return (
        <select className="bg-colorMenuPrimary rounded-xl text-white px-4 outline-none h-10 cursor-pointer" name="filter">
            <option value="0">Filtrar</option>
            <option value="1">Concluídos</option>
            <option value="2">Andamento</option>
            <option value="3">Início</option>
        </select>
    );
};
