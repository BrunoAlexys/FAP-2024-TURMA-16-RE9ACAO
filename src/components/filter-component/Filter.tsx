
interface FilterProps {
    onFilter: (filter: string) => void
}

export const Filter = (props: FilterProps) => {
    return (
        <select onChange={(e) => { props.onFilter(e.target.value) }} className="bg-colorMenuPrimary rounded-xl w-36 text-white px-2 lg:px-4 lg:w-40 lg:h-10 outline-none py-2 cursor-pointer custom-select appearance-none" name="filter">
            <option value={0}>Todos</option>
            <option value={1}>Concluídos</option>
            <option value={2}>Andamento</option>
            <option value={3}>Início</option>
        </select>
    );
};
