import { useState } from "react";
import Button from "./Button";
import { data } from "client/src/data.js";

function ModalArt({ onAjouter }) {
  //STATES POUR L'INPUT IMAGE

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  //STATES POUR LA PUBLICATION
  const art = data.cardData;

  const [submiting, SetSubmiting]=useState(art)

  const [titre, setTitre] = useState("");
  const [desc, setDesc] = useState("");
  const [oeuvre, setOeuvre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!titre || !desc || !oeuvre) {
    //   alert("Veuillez Remplir tous les champs");
    //   return;
    // }

    const nouvelObjet = {
      title: titre,
      desc: desc,
      img: image,
    };

   

    SetSubmiting([...submiting, nouvelObjet])

    // onAjouter(nouvelObjet);

    console.tab(submiting);

    setTitre("");
    setDesc("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-[1rem] py-8 px-[10rem] shadow-md w-[50rem]">
      <div className=" flex flex-col items-center ">
        {/* DEBUT INPUT IMAGE */}

        <div
          onClick={() => document.querySelector(".Field").click()}
          className="border w-[32.5rem] h-[20rem]   border-dashed border-4 flex justify-center items-center "
        >
          <input
            value={oeuvre}
            type="file"
            accept="image/*"
            className="Field"
            hidden
            onChange={({ target: { files } }, e) => {
              files[0] && setFileName([files[0].name]);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
                setOeuvre(e.target.value);
              }
            }}
          />
          {image ? (
            <img src={image} className="w-[32.5rem] h-[20rem] " />
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 20C40 19.4696 39.7893 18.9609 39.4142 18.5858C39.0391 18.2107 38.5304 18 38 18C37.4696 18 36.9609 18.2107 36.5858 18.5858C36.2107 18.9609 36 19.4696 36 20H40ZM20 4C20.5304 4 21.0391 3.78929 21.4142 3.41421C21.7893 3.03914 22 2.53043 22 2C22 1.46957 21.7893 0.960859 21.4142 0.585786C21.0391 0.210714 20.5304 0 20 0V4ZM35 36H5V40H35V36ZM4 35V5H0V35H4ZM36 20V35H40V20H36ZM5 4H20V0H5V4ZM5 36C4.73478 36 4.48043 35.8946 4.29289 35.7071C4.10536 35.5196 4 35.2652 4 35H0C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40V36ZM35 40C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35H36C36 35.2652 35.8946 35.5196 35.7071 35.7071C35.5196 35.8946 35.2652 36 35 36V40ZM4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4V0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5H4Z"
                fill="#4ECB71"
              />
              <path
                d="M2 31L12.693 21.198C13.0534 20.8677 13.5223 20.6808 14.0112 20.6727C14.5 20.6646 14.9748 20.8358 15.346 21.154L28 32M24 27L28.773 22.227C29.1134 21.8863 29.5654 21.68 30.0458 21.6458C30.5262 21.6116 31.0028 21.752 31.388 22.041L38 27M26 8H38M32 2V14"
                stroke="#4ECB71"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>

        {/* FIN INPUT IMAGE ET DEBUT AUTRES INPUTS */}

        <div className="pt-6">
          <input
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="h-10 w-[32.5rem] pl-4 bg-gray-200 px-2 rounded-xl "
            type="text"
            placeholder="Titre de l'oeuvre"
          />
        </div>
        <div className="pt-6">
          <input
            className="h-10 pl-4  bg-gray-200 px-2 rounded-xl w-[32.5rem] "
            type="text"
            placeholder="Taille (ex : 250 x 300 cm)"
          />
        </div>
        <div className="pt-6">
          <input
            className="h-10 pl-4  bg-gray-200 px-2 rounded-xl w-[32.5rem] "
            type="text"
            placeholder="Date de création"
          />
        </div>
        <div className="pt-6">
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="h-[8rem] pl-4 bg-gray-200 px-2 rounded-xl w-[32.5rem]"
            type="text"
            placeholder="Légende"
          />
        </div>
      </div>
      <Button
        name="Publier"
        class="bg-green-500 text-white text-sm font-xl py-2 px-3 hover:bg-green-700 ease duration-500 mt-6 rounded-xl "
      />
    
    </form>
  );
}

export default ModalArt;
