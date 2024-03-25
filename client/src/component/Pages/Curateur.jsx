import React from "react";
import Events from "../general components/Events";
import GalleryArtContent, {
  GalleryExpoContent,
} from "../general components/GallerieArtContent";

import ProfilModel from "../general components/ProfilModel";
import MyFavorites, {
  MyFavoritesExpo,
} from "../general components/FavoritesOnProfils";
import EnteteProfil, {
  EnteteProfilCur,
} from "../general components/EnteteProfil";
// import Nav from "./NavBar";

function Curateur() {
  return (
    <div>
      {/* <div className="bg-gray-900 cover"><Nav /></div> */}

      <ProfilModel />

      <EnteteProfilCur />

      <div className="flex">
        <div className=" border-r">
          <h2 className="px-[5.5rem] pt-[4rem] text-xl">Mettre en avant</h2>

          <MyFavoritesExpo />

          <h2 className="px-[5.5rem] pt-[6rem] text-xl">Toutes mes oeuvres</h2>
          <GalleryExpoContent />
        </div>

      </div>

      <div className="w-2/5 px-[6rem] py-[6rem] flex">
          <Events class="max-w-lg p-10 mb-10 bg-transaparent border mr-10" />
          <Events class="max-w-lg p-10 mb-10 bg-transaparent border" />
        </div>

    </div>
  );
}

export default Curateur;
