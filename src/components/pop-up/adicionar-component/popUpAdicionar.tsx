import { useState } from "react";
import { UserItem } from "./select/userItem";

type AdicionarPopupProps = {
  onClose: () => void;
  nome: String;
};

export const AdicionarPopup = ({nome, onClose }: AdicionarPopupProps) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]); // Estado dos usuários selecionados

  const handleUserSelect = (name: string, selected: boolean) => {
    setSelectedUsers((prevSelected) =>
      selected
        ? [...prevSelected, name] // Adiciona o nome se selecionado
        : prevSelected.filter((user) => user !== name) // Remove se desmarcado
    );
  };

  const users = ["João", "Maria", "Pedro", "Ana", "Carlos", "Beatriz"]; // Lista de nomes

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-xl transform transition-transform duration-300 scale-100 opacity-100">
        <div className="flex items-center justify-center p-5 bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary rounded-t-lg">
          <h1 className="text-white font-bold">Adicionar {nome}</h1>
        </div>

        <div>
          {users.map((user) => (
            <UserItem
              key={user}
              name={user}
              onSelect={(selected) => handleUserSelect(user, selected)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-14">
          <button
            onClick={() => console.log("Selecionados:", selectedUsers, onClose())}
            className="text-white font-bold bg-colorMenuPrimary rounded-lg w-44 h-9 my-2"
          >
            Adicionar
          </button>
        </div>
        <p
          onClick={onClose}
          className="text-colorMenuPrimary font-bold flex items-center justify-center mb-6 hover:cursor-pointer"
        >
          Cancelar
        </p>
      </div>
    </div>
  );
};
