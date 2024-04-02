import avatar from "client/src/assets/images/Glody.png";
import Button from "./Button";
import { useState } from "react";
import axios from "axios";

function ModalProfil() {
  const [userName, setUserName] = useState("");
  const [titre, setTitre] = useState("");
  const [biography, setBiography] = useState("");
  const [country, setCountry] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("myToken"));
    

      const response = await axios.put(
        "http://localhost:8000/profil",
        {
          profileImage,
          coverImage,
          biography,
          country,
         
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token.token,
          },
        }
      );

      console.log(response.data); // Affiche la réponse de l'API

      // Ajoutez ici la logique pour mettre à jour l'état du composant ou rediriger l'utilisateur si nécessaire
    } catch (error) {
      console.error(error);
      // Gérez ici les erreurs de requête
    }
  };

  return (
    <div className="bg-gray-100 w-[20rem] rounded-[1rem] py-8 flex flex-col items-center shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex pb-6">
          <img
            className="w-20 h-20 border rounded-full border-2 border-green-500"
            src={avatar}
            alt=""
          />

          <div className="pt-12 cursor-pointer ">
            <svg
              width="29"
              height="29"
              // viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0833 4.83341H8.69992C7.34659 4.83341 6.66992 4.83341 6.15275 5.09683C5.69805 5.32852 5.32836 5.69821 5.09667 6.15291C4.83325 6.67008 4.83325 7.34675 4.83325 8.70008V20.3001C4.83325 21.6534 4.83325 22.3301 5.09667 22.8472C5.32836 23.302 5.69805 23.6716 6.15275 23.9033C6.66871 24.1667 7.34538 24.1667 8.69629 24.1667H20.3035C21.6545 24.1667 22.3299 24.1667 22.8459 23.9033C23.3014 23.6713 23.6712 23.3016 23.9032 22.8472C24.1666 22.3301 24.1666 21.6546 24.1666 20.3037V16.9167M19.3333 6.04175L12.0833 13.2917V16.9167H15.7083L22.9583 9.66675M19.3333 6.04175L22.9583 2.41675L26.5833 6.04175L22.9583 9.66675M19.3333 6.04175L22.9583 9.66675"
                stroke="#171717"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="px-8">

          <label className="text-base " htmlFor="titre">
            Titre :
          </label>
          <input
            className="h-6 w-full bg-gray-100 px-2 border-b border-green-500"
            type="text"
            name="titre"
          />

          <label className="text-base " htmlFor="bio">
            Bio :
          </label>
          <input
            className="h-6 w-full bg-gray-100 px-2 border-b border-green-500"
            type="text"
            name="bio"
            value={biography} 
            onChange={(e)=>setBiography(e.target.value)}
          />

          <label className="text-base " htmlFor="country">
            Country :
          </label>
          <input
            className="h-6 w-full bg-gray-100 px-2 border-b border-green-500"
            type="text"
            name="country"
            value={country}
            onChange={(e)=>setCountry(e.target.value)} 
          />

          <div className="flex justify-between py-6 cursor-pointer">
            <p>Photo de couverture </p>

            <img src="./src/assets/icons/CovIcon.svg" alt="" />
          </div>
        </div>
        <Button
          name="Changer"
          class="bg-green-500 text-white text-sm font-xl p-2 px-3 hover:bg-green-700 ease duration-500 "
        />

        <p className="pt-4 text-xs cursor-pointer hover:underline">
          Mettre à jour d'autres informations
        </p>
      </form>
    </div>
  );
}

export default ModalProfil;
