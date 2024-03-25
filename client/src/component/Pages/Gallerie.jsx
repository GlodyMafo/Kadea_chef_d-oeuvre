import React, { useState } from "react";
import GalleryArtContent, {
  GalleryExpoContent,
} from "../general components/GallerieArtContent";
import GalleryArtBtn, {
  GalleryVirtualBtn,
} from "../general components/GallerySelect";
import Nav from "./NavBar";

function Gallery() {
  const [showArt, setshowArt] = useState(true);
  const [showVirtual, setshowVirtual] = useState(false);

  const handlegalleryArt = () => {
    setshowArt(true);
    setshowVirtual(false);
    console.log("Bonjour");
  };

  const handleVirtualArt = () => {
    setshowArt(false);
    setshowVirtual(true);
    console.log("Bonsoir");
  };

  return (
    <div>
      <div className="bg-gray-900 cover">
      
      </div>
      <div className="px-16">
        <div className="px-4 w-[45rem]">
          <h2 className="py-8 text-2xl">SELECTION</h2>
          <div className="flex justify-between pb-14">
            <GalleryArtBtn event={handlegalleryArt} showArt={showArt} />
            <GalleryVirtualBtn event={handleVirtualArt} showVirtual={showVirtual} />
          </div>
        </div>
        <hr />
      </div>

      {showArt && <GalleryArtContent />}
      {showVirtual && <GalleryExpoContent />}
    </div>
  );
}

export default Gallery;
