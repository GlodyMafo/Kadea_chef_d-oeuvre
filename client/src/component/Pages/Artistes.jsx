import React, { useState, useEffect } from "react";
import Events from "../general components/Events";
import GalleryArtContent from "../general components/GallerieArtContent";
import { data } from "/src/data.js";
import ProfilModel from "../general components/ProfilModel";
import MyFavorites from "../general components/FavoritesOnProfils";
import EnteteProfil from "../general components/EnteteProfil";
import Button from "../general components/Button";
import { Link } from "react-router-dom";
// import Nav from "./NavBar";

function Artiste() {
  const [hideElement, setHideElement] = useState(12);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    loadMore();
  }, [hideElement]);

  const loadMore = () => {
    setSlice(data.cardData.slice(0, hideElement));
  };

  const handleClick = () => {
    setHideElement(hideElement + 8);
  };

  console.log(hideElement);

  return (
    <div>
      <div className="bg-gray-900 cover">{/* <Nav /> */}</div>

      <ProfilModel />

      <EnteteProfil />

      <div className="flex">
        <div className="w-3/5 border-r">
          <h2 className="px-[5.5rem] pt-[4rem] text-xl">Mettre en avant</h2>

          <MyFavorites />

          <h2 className="px-[5.5rem] pt-[4rem] text-xl">Toutes mes oeuvres</h2>
          {/* <GalleryArtContent /> */}

          <div className="flex flex-wrap justify-between p-10">
        {slice.map((item, index) => {
          return (
            <div
              className="mx-0 mb-6 w-full md:w-1/2 lg:w-1/4 px-8"
              key={index}
            >
              <div className="card p-0 overflow-hidden shadow-md">
                <img src={item.img} className="w-full max-h-[300px]  " />
                <div className="card-body p-4">
                  <p className="card-text font-medium">{item.titre}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Button
          name="AFFICHER PLUS"
          class="bg-green-500 w-full text-white text-sm font-xl p-2.5 px-4 hover:bg-green-800 ease duration-500 mb-8 "
          handleClick={handleClick}
        />
      </div>
        </div>

        <div className="w-2/5 px-[6rem] py-[6rem]">
          <Events class="max-w-lg p-10 mb-10 bg-transaparent border" />
          <Events class="max-w-lg p-10 mb-10 bg-transaparent border" />
        </div>
      </div>
    </div>
  );
}

export default Artiste;
