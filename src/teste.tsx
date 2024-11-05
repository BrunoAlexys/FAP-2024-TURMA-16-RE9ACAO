import { useState } from "react";
import { PopUpImage } from "./components/popup-image/PopUpImage"; 

export const Teste = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <div className="bg-red-600 flex items-center justify-center h-screen w-full">
      <button
        onClick={openPopup}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Abrir Popup
      </button>

      {isPopupVisible && <PopUpImage closePopup={closePopup} />}
    </div>
  );
};
