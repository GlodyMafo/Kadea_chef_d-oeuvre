import art1 from "client/src/assets/images/peint1.jpg";
import art2 from "client/src/assets/images/peint2.jpg";

// Composant pour la gallerie de la page d'accueil

function GalleryHomePg() {
  return (
    <div className="flex justify-around">
      <div className="flex pr-10">
        <div className=" md:w-[25rem] pr-10">
          <img src={art1} alt="" />
        </div>

        <div className=" md:w-[21.4rem]">
          <img className="pb-10" src={art2} alt="" />
          <img src={art2} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className=" md:w-[25rem] pr-10">
          <img src={art1} alt="" />
        </div>

        <div className=" md:w-[21.4rem]">
          <img className="pb-10" src={art2} alt="" />
          <img src={art2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GalleryHomePg;
