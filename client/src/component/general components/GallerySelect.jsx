

function GalleryArtBtn({event, showArt}) {
  return (
      <div
        onClick={event}
        className={`${showArt && 'after:bg-[#00800054]'} bg-center bg-cover w-[18rem] h-[12rem] rounded-2xl px-4 pt-[3rem] cursor-pointer relative after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:bg-transparent after:rounded-2xl after:w-full after:h-full transition duration-300 ease-in-out transform hover:scale-105 hover:after:bg-[#00800054] `}
        style={{
          backgroundImage: "url('src/assets/images/GallerieOeuvre.jpg')",
        }}
      >
        <h1 className="text-gray-200 font-bold text-2xl">OEUVRES D'ART</h1>
        <p className="text-white text-xl">
          Découvrez de l'art africain en haute définition.
        </p>
      </div>
  );
}

export default GalleryArtBtn;

export function GalleryVirtualBtn({event, showVirtual}) {
  return (
      <div
        onClick={event}
        className={`${showVirtual && 'after:bg-[#00800054]'} bg-center bg-cover w-[18rem] h-[12rem] rounded-2xl px-4 pt-[3rem] cursor-pointer relative after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:bg-transparent after:rounded-2xl after:w-full after:h-full transition duration-300 ease-in-out transform hover:scale-105 hover:after:bg-[#00800054] `}
        style={{ backgroundImage: "url('src/assets/images/GallerieExpo.jpg')" }}
      >
        <h1 className="text-gray-200 font-bold text-2xl">VISITES VIRTUELLES</h1>
        <p className="text-white text-xl">
          Explorez les oeuvres d'art à travers les éxpositions virtuelles 3D.
        </p>
      </div>
  );
}
