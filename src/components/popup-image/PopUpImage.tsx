import { SetStateAction, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloudimage from "../popup-image/assets/cloud-upload-alt 2.png";

export const PopUpImage = ({ closePopup }: { closePopup: () => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles: SetStateAction<File | null>[]) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const submitImage = () => {
    console.log("Imagem enviada:", selectedFile?.name);
    closePopup(); // Fecha o popup após enviar a imagem
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white w-[550px] rounded-xl p-6 flex flex-col items-center justify-center transform transition-transform duration-300 scale-100 opacity-100">
        <h1 className="font-bold text-2xl mb-4">Selecione sua foto de perfil</h1>

        <div
          {...getRootProps()}
          className="w-[438px] h-[300px] rounded-md outline-dashed outline-blue-500 outline-3 flex flex-col items-center justify-center text-blue-500 rounded-md cursor-pointer hover:bg-blue-50"
        >
          <input {...getInputProps()} />
          {!selectedFile ? (
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text mb-2 flex items-center justify-center">
                <img src={cloudimage} alt="Arraste e solte o arquivo" />
              </div>
              <p className="bg-colorAlertImg rounded-md text-lg font-bold text-white mx-2 p-2">
                Clique ou arraste uma imagem para selecionar sua foto de perfil
              </p>
            </div>
          ) : (
            <p className="text-base text-blue-600">{selectedFile.name}</p>
          )}
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={closePopup} className="text-colorMenuPrimary font-bold">
            Cancelar
          </button>
          <button
            onClick={submitImage}
            className="bg-colorMenuPrimary text-white px-5 py-2 rounded-md font-bold"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
