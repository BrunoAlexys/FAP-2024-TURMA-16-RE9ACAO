import { SetStateAction, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloudimage from "../popup-image/assets/cloud-upload-alt 2.png";

interface PopUpImageProps {
  closePopup: () => void;
  handleImageUpload: (file: File) => void; 
}

export const PopUpImage = ({ closePopup, handleImageUpload }: PopUpImageProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles: SetStateAction<File | null>[]) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const submitImage = () => {
    if (selectedFile) {
      handleImageUpload(selectedFile); 
      closePopup(); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[550px] rounded-xl p-6 flex flex-col items-center justify-center transform transition-transform duration-300 scale-100 opacity-100 mx-4">
        <h1 className="font-bold text-2xl mb-4">Selecione a imagem</h1>

        <div
          {...getRootProps()}
          className="w-full max-w-[438px] h-[300px] outline-dashed outline-blue-500 outline-3 flex flex-col items-center justify-center text-blue-500 rounded-md cursor-pointer hover:bg-blue-50"
        >
          <input {...getInputProps()} />
          {!selectedFile ? (
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text mb-2 flex items-center justify-center">
                <img src={cloudimage} alt="Arraste e solte o arquivo" />
              </div>
              <p className="bg-colorAlertImg rounded-md text-lg font-bold text-white mx-2 p-2">
                Clique ou arraste uma imagem para selecionar sua foto
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
