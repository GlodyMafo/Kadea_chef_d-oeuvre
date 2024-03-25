import avatar from "client/src/assets/images/Glody.png";
import cover from "client/src/assets/images/pexels-daian-gan-102127.jpg";
import Button from "./Button";
import React, { useState } from "react";
import ModalProfil from "./ModalProfil";
import ReactModal from "react-modal";

function ProfilModel() {
  const customStyles = {
    content: {
      top: "30%",
      left: "80%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border:'none'
    },
  };

  // const [modal, setModal] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
    console.log("c'est bon");
  };

  return (
    <div className="relative">
      <div className="relative w-full  ">
        <div>
          <img className="h-[17.1rem] w-full" src={cover} alt="" />
        </div>
        <div className="flex items-center p-14  w-full absolute bottom-0 right-0 bg-[#0000003a]">
          <img
            className="w-40 h-40 border rounded-full border-4 border-green-500"
            src={avatar}
            alt=""
          />
          <div className="flex w-full justify-between pl-6">
            <div className="pr-20 w-full">
              <p className="text-4xl pb-2 font-bold text-gray-100 shadow ">
                Glody Mafo
              </p>
              <p className="w-3/5 pb-2 text-gray-100 text-2xl font-semibold shadow">
                Artiste Peintre
              </p>
              <p className="w-3/5 font-medium text-xl text-gray-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-sm text-gray-100">
                République Démocratique du Congo | Lubumbashi
              </p>
            </div>
            <div
              onClick={toggleModal}
              className="bg-green-500 rounded-full h-[3rem] w-[3rem] flex justify-center items-center cursor-pointer hover:bg-green-700 ease duration-500"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0833 4.83341H8.69992C7.34659 4.83341 6.66992 4.83341 6.15275 5.09683C5.69805 5.32852 5.32836 5.69821 5.09667 6.15291C4.83325 6.67008 4.83325 7.34675 4.83325 8.70008V20.3001C4.83325 21.6534 4.83325 22.3301 5.09667 22.8472C5.32836 23.302 5.69805 23.6716 6.15275 23.9033C6.66871 24.1667 7.34538 24.1667 8.69629 24.1667H20.3035C21.6545 24.1667 22.3299 24.1667 22.8459 23.9033C23.3014 23.6713 23.6712 23.3016 23.9032 22.8472C24.1666 22.3301 24.1666 21.6546 24.1666 20.3037V16.9167M19.3333 6.04175L12.0833 13.2917V16.9167H15.7083L22.9583 9.66675M19.3333 6.04175L22.9583 2.41675L26.5833 6.04175L22.9583 9.66675M19.3333 6.04175L22.9583 9.66675"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
     
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <ModalProfil />
      </ReactModal>
    </div>
  );
}

export default ProfilModel;


export function UserView() {
  return (
    <div className="relative">
      <div className="relative w-full  ">
        <div>
          <img className="h-[17.1rem] w-full" src={cover} alt="" />
        </div>
        <div className="flex items-center p-14 border w-full absolute bottom-0 right-0 bg-[#0000003a]">
          <img
            className="w-40 h-40 border rounded-full border-4 border-green-500"
            src={avatar}
            alt=""
          />
          <div className="flex w-full justify-between pl-6">
            <div className="pr-20 w-full">
              <p className="text-4xl pb-2 font-bold text-gray-100 shadow ">
                Glody Mafo
              </p>
              <p className="w-3/5 pb-2 text-gray-100 text-2xl font-semibold shadow">
                Artiste Peintre
              </p>
              <p className="w-3/5 font-medium text-xl text-gray-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="font-sm text-gray-100">
                République Démocratique du Congo | Lubumbashi
              </p>
            </div>
           <Button name="Message"
              class="bg-green-500 rounded-3xl h-10 text-white text-sm font-xl p-2 px-3 hover:bg-green-700 ease duration-500 "/>
          </div>
        </div>
      </div>
      </div>
  );
}
