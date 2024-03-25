import React from "react";
import BodySection1, {
  BodySection2,
  BodySection3,
} from "../general components/BodyDesignHome";
import Events from "../general components/Events";
import Nav from "./NavBar";

function Home() {
  return (
    <div className="bg-white pb-[70rem]">
      {/* HEADER */}
      <div
        className=" bg-center bg-cover h-screen"
        style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}
      >
        <div className="flex px-20 items-center content-center pt-20">
          <div>
            <h1 className="text-9xl font-bold  text-gray-100 pb-10 pt-20">
              Afrikulture <span className="text-green-500">.</span>
            </h1>
            <p className="w-4/5 text-3xl text-white pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum quaerat, magni dolores inventore assumenda tenetur
              natus? Corporis dolore doloribus amet sequi suscipit similique
              deleniti dignissimos veritatis, quae perspiciatis iure nihil.
            </p>
            <a href="" className="text-3xl text-green-500">
              Lire plus.
            </a>
          </div>
          <div>
            <p className="text-center text-3xl text-white pb-10 pt-20">
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
