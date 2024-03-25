import { useState } from "react";
import Button from "./Button";
import { data } from "client/src/data.js";

function ModalVisit() {

  return (
    <div className="bg-gray-100 rounded-[1rem] py-8 px-[4rem] shadow-md w-[40rem]">
      <h1 className="text-3xl font-semibold py-6">Créer une exposition</h1>
      <p className="text-lg py-4">
        la création d’une exposition se fait sur base d’une demande à l’endroit
        de l’administrateur. Veuillez lire ce document pour prendre connaissance
        des exigences nécessaires à la création d’une exposition avant d’envyer
        votre demande.
      </p>

      <form
        // onSubmit={handleSubmit}
      >
        <div className=" flex flex-col items-center ">
          {/* DEBUT INPUT IMAGE */}

          

          {/* FIN INPUT IMAGE ET DEBUT AUTRES INPUTS */}
          <div className="pt-6">
            <input
              className="h-10 pl-4  bg-gray-200 px-2 rounded-xl w-[32.5rem] "
              type="text"
              placeholder="Adresse Email"
            />
          </div>
          
          <div className="pt-8">
            <input
              className="h-10 pl-4  bg-gray-200 px-2 rounded-xl w-[32.5rem] "
              type="text"
              placeholder="Objet"
            />
          </div>
          <div className="pt-8">
            <input
              
              
              className="h-[10rem] pl-4 bg-gray-200 px-2 rounded-xl w-[32.5rem]"
              type="text"
              placeholder="Saisissez votre demande ici"
            />
          </div>
        </div>
        <Button
          name="Envoyer"
          class="bg-green-500 text-white text-sm font-xl py-2 px-3 hover:bg-green-700 ease duration-500 mt-8 rounded-xl "
        />
      </form>
    </div>
  );
}

export default ModalVisit;
