import { Link } from "react-router-dom";
import MediathequeContent from "client/src/component/general components/MediathequeContent.jsx";
import Nav from "client/src/component/Pages/NavBar.jsx";
import EnteteSections from "client/src/component/general components/EnteteMediatheque.jsx";
import afrique from "client/src/assets/images/Africa.jpeg";
import litterature from "client/src/assets/images/Litterature.jpeg";
import agricole from "client/src/assets/images/Agricoles.jpg";
import technique from "client/src/assets/images/Techniques.jpg";
import medecine from "client/src/assets/images/Medecine.jpg";
import contes from "client/src/assets/images/contes.jpeg";
import contemporain from "client/src/assets/images/Art_Cont.jpeg";
import videos from "client/src/assets/images/Videos.jpg";
import Events from "client/src/component/general components/Events.jsx";

function MediathequeRessource() {
  return (
    <div>
      <div className="bg-gray-900">
      </div>
      <div className="py-6 border-b">
        <EnteteSections />
      </div>
      <div className="flex">
        <div className="grid-rows-3 w-4/5 px-[8rem] py-[4rem] border-r ">
          <div className="flex justify-between">
            <MediathequeContent title="L'afrique et ses pays" src={afrique} />
            <MediathequeContent
              title="Littérature et Mythologie"
              src={litterature}
            />
            <MediathequeContent title="Pratique Agricole" src={agricole} />
          </div>
          <div className="flex justify-between pt-14">
            <MediathequeContent title="Medecine Africaine" src={medecine} />

            <MediathequeContent title="Contes et Légendes" src={contes} />

            <MediathequeContent title="Lart Contemporain" src={contemporain} />
          </div>
          <div className="flex justify-between pt-14">
            <MediathequeContent title="Medecine Africaine" src={medecine} />

            <MediathequeContent title="Contes et Légendes" src={contes} />

            <MediathequeContent title="Lart Contemporain" src={contemporain} />
          </div>
        </div>
        <div className="px-[12rem] py-[8rem] flex flex-col justify-between">
          <Events class="max-w-lg p-10 mb-10 border text-black" />
          <Events class="max-w-lg p-10 mb-10 border text-black" />
        </div>
      </div>
    </div>
  );
}

export default MediathequeRessource;
