
import React from "react";
import Events from "../general components/Events";
import GalleryArtContent from "../general components/GallerieArtContent";

import ProfilModel from "../general components/ProfilModel";
import MyFavorites from "../general components/FavoritesOnProfils";
import EnteteProfil from "../general components/EnteteProfil";
// import Nav from "./NavBar";

function Artiste() {
  

  return (
    <div>
      <div className="bg-gray-900 cover">
        {/* <Nav /> */}
      </div>
     
      <ProfilModel />

      <EnteteProfil />

      <div className="flex">
        <div className="w-3/5 border-r">

        <h2 className="px-[5.5rem] pt-[4rem] text-xl">Mettre en avant</h2>

        <MyFavorites/>

          <h2 className="px-[5.5rem] pt-[4rem] text-xl">Toutes mes oeuvres</h2>
          <GalleryArtContent />
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
