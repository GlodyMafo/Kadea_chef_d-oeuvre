import { Link } from "react-router-dom";
import MediathequeContent from "client/src/component/general components/MediathequeContent";
import Nav from "./NavBar";
import EnteteSections from "client//src/component/general components/EnteteMediatheque.jsx"
import afrique from "client/src/assets/images/Africa.jpeg";
import litterature from "client/src/assets/images/Litterature.jpeg";
import agricole from "client/src/assets/images/Agricoles.jpg";
import technique from "client/src/assets/images/Techniques.jpg";
import medecine from "client/src/assets/images/Medecine.jpg";
import contes from "client/src/assets/images/contes.jpeg";
import contemporain from "client/src/assets/images/Art_Cont.jpeg";
import videos from "client/src/assets/images/Videos.jpg";

function Mediatheque() {
  return (
    <div>
      <div className="bg-gray-900">
   
      </div>
      <div className="py-6 border-b">
        <EnteteSections />
      </div>
      <div className="grid-rows-2 px-[22rem] py-[4rem] ">
        <div className="flex justify-between">
        <Link to="/content">
        <MediathequeContent title="L'afrique et ses pays" src={afrique} />
        </Link>
        <Link to="/content">
        <MediathequeContent
            title="Littérature et Mythologie"
            src={litterature}
          />
        </Link>
        <Link to="/content">
        <MediathequeContent title="Pratique Agricole" src={agricole} />
        </Link>
        <Link to="/content">
        <MediathequeContent title="Techniques Artisanales" src={technique} />
        </Link>
          
        </div>
        <div className="flex justify-between pt-14">
        <Link to="/content">
        <MediathequeContent title="Medecine Africaine" src={medecine} />
          </Link>
          <Link to="/content">
          <MediathequeContent title="Contes et Légendes" src={contes} />
        </Link>
        <Link to="/content">
        <MediathequeContent title="Lart Contemporain" src={contemporain} />
        </Link>
        <Link to="/content">
        <MediathequeContent title="Autres Videos et Photos" src={videos} />
        </Link> 
        </div>
      </div>
    </div>
  );
}

export default Mediatheque;
