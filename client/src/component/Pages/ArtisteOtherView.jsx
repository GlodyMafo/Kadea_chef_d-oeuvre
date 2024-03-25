
import React from "react";
import Events from "../general components/Events";
import GalleryArtContent from "../general components/GallerieArtContent";
import MyFavorites, { FavoritesUV } from "../general components/FavoritesOnProfils";
import { UserView } from "../general components/ProfilModel";
// import Nav from "./NavBar";

function ArtisteOtherView() {
  
  return (
    <div>
      <div className="bg-gray-900 cover">
        {/* <Nav /> */}
      </div>
     
      <UserView/>


      <div className="flex">
        <div className="w-3/5 border-r">

        <h2 className="px-[5.5rem] pt-[4rem] text-xl">Best of</h2>

        <FavoritesUV/>

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

export default ArtisteOtherView;
