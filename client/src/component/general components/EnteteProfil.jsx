import Button from "./Button";
import ModalArt from "./ModalArt";
import ModalProfil from "./ModalProfil";
import React, {useState} from "react";
import ReactModal from "react-modal";
import ModalVisit from "./ModalVisit";

function EnteteProfil() {

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  
  };

  return ( 

<div className="flex justify-between items-center border-b ">
      <p className="">
        <span className="border-r p-7 ">MA GALLERIE</span>{" "}
        <span className=" p-7 border-r"> RECENTS</span>{" "}
        <span className="p-4">MES FAVORIES</span>
      </p>

      <div className="flex items-center">
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.3 19C1.6675 19 1.12623 18.7676 0.6762 18.3029C0.226167 17.8382 0.000766667 17.2789 0 16.625V2.375C0 1.72187 0.2254 1.16296 0.6762 0.69825C1.127 0.233541 1.66827 0.000791667 2.3 0H20.7C21.3325 0 21.8741 0.23275 22.3249 0.69825C22.7757 1.16375 23.0008 1.72267 23 2.375V16.625C23 17.2781 22.775 17.8374 22.3249 18.3029C21.8749 18.7684 21.3333 19.0008 20.7 19H2.3ZM11.5 10.6875L20.7 4.75V2.375L11.5 8.3125L2.3 2.375V4.75L11.5 10.6875Z"
            fill="#12C081"
          />
        </svg>
        <div className="m-4">
          <Button
            handleClick={toggleModal}
            name="Publier"
            class="bg-green-500 text-white text-sm font-xl p-2.5 px-4 rounded-3xl mr-8 ml-10 hover:bg-green-700 ease duration-500"
          />
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <ModalArt />
      </ReactModal>
    </div>
    
   );
}

export default EnteteProfil;





export function EnteteProfilCur() {

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  
  };

  return ( 

<div className="flex justify-between items-center border-b ">
      <p className="">
        <span className="border-r p-7 ">MES EXPOSITIONS</span>{" "}
        <span className=" p-7 border-r"> RECENTS</span>{" "}
        <span className="p-4">MES FAVORIES</span>
      </p>

      <div className="flex items-center">
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.3 19C1.6675 19 1.12623 18.7676 0.6762 18.3029C0.226167 17.8382 0.000766667 17.2789 0 16.625V2.375C0 1.72187 0.2254 1.16296 0.6762 0.69825C1.127 0.233541 1.66827 0.000791667 2.3 0H20.7C21.3325 0 21.8741 0.23275 22.3249 0.69825C22.7757 1.16375 23.0008 1.72267 23 2.375V16.625C23 17.2781 22.775 17.8374 22.3249 18.3029C21.8749 18.7684 21.3333 19.0008 20.7 19H2.3ZM11.5 10.6875L20.7 4.75V2.375L11.5 8.3125L2.3 2.375V4.75L11.5 10.6875Z"
            fill="#12C081"
          />
        </svg>
        <div className="m-4">
          <Button
            handleClick={toggleModal}
            name="Demande d'exposition"
            class="bg-green-500 text-white text-sm font-xl p-2.5 px-4 rounded-3xl mr-8 ml-10 hover:bg-green-700 ease duration-500"
          />
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <ModalVisit />
      </ReactModal>
    </div>
    
   );
}





