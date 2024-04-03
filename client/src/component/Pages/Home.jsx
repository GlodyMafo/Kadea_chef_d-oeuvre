import React from "react";
import BodySection1, {
  BodySection2,
  BodySection3,
} from "../general components/BodyDesignHome";
import Events from "../general components/Events";
import Nav from "./NavBar";

function Home() {
  return (
    <div className="bg-black pb-[70rem]">
      {/* HEADER */}
      <div
        className="bg-center bg-cover h-screen"
        style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}
      >
        <div className="flex flex-wrap md:flex md:justify-between md:pt-[14rem]  md:w-full md:px-[8rem] px-10 items-center content-center pt-20">
          <div className="md:w-[60%]">
            <h1 className="text-6xl flex md:text-9xl font-bold  text-gray-100 pb-10 pt-12 md:pt-20">
              Afrikulture <span className="text-green-500">.</span>
            </h1>
            <p className="md:w-4/5 text-xl md:text-3xl text-white pb-2 md:pb-10">
              Explorez la richesse de la culture africaine. <br /> Des traditions
              anciennes à la créativité contemporaine, découvrez un continent en
              perpétuelle évolution. <br />Découvrez ses langues, ses arts, sa
              musique, ses danses, ses cuisines et plus encore. <br />Un voyage au
              cœur d'une diversité culturelle vibrante.
            </p>
            <a href="" className="md:text-3xl text:xl text-green-500">
              Lire plus.
            </a>
          </div>
          <div className="">
            <p className="text-center text-2xl md:text-3xl text-white pb-10 md:pt-20">
              Nos Evenements à venir
            </p>
            <Events class="max-w-lg p-10 mb-10 bg-black text-gray-100" />
          </div>
        </div>
      </div>

      {/* BODY */}
      <div
        className=" bg-center bg-cover h-screen"
        style={{ backgroundImage: "url('src/assets/images/bg2.jpg')" }}
      >
        <BodySection1 />
      </div>
      <div className="bg-white h-screen ">
        <BodySection2 />
        <BodySection3 />
      </div>
    </div>
  );
}

export default Home;
