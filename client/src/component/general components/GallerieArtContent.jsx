import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { data } from "/src/data.js";
import Button from "./Button";
import VirtualEvents from "./VirtualEvents";

function GalleryArtContent() {
  const [hideElement, setHideElement] = useState(12);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    loadMore();
  }, [hideElement]);

  const loadMore = () => {
    setSlice(data.cardData.slice(0, hideElement));
  };

  const handleClick = () => {
    setHideElement(hideElement + 8);
  };

  console.log(hideElement);

  return (
    <section className="py-14 px-14 mx-auto">
      <div className="flex flex-wrap justify-between">
        {slice.map((item, index) => {
          return (
            <div
              className="mx-0 mb-6 w-full md:w-1/2 lg:w-1/4 px-8"
              key={index}
            >
               <div className="h-[16rem] w-[25rem]">
              <figure>
                <img className="h-[16rem] w-[25rem]"  src={item.img} alt="Mountains" />
                <figcaption>
                 
                    <Link to="/artiste">
                      <h1 >
                        <span className="font-Coiny text-gray-100 font-bold text-2xl px-8 pt-8 hover:text-green-500">{item.author}</span>
                         <br /> <span className="font-medieum text-xl text-gray-100 font-medium px-8 pt-8 hover:text-green-500 ">Visiter le profil</span>
                      </h1>
                    </Link>
                    <p className="font-Coiny text-gray-100  px-8 text-2xl font-semibold"> Titre : .
                      {item.titre}
                    </p>
                    <p className="font-Coiny text-gray-100  px-8 pb-6">
                      {item.desc}{" "}
                    </p>
                 
                </figcaption>
              </figure>
            </div>
            </div>
            
          );
        })}
        <Button
          name="AFFICHER PLUS"
          class="bg-green-500 w-full text-white text-sm font-xl p-2.5 px-4 hover:bg-green-800 ease duration-500 "
          handleClick={handleClick}
        />
      </div>
    </section>
  );
}

export default GalleryArtContent;

export function GalleryExpoContent() {
  const [hideElement, setHideElement] = useState(9);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    loadMore();
  }, [hideElement]);

  const loadMore = () => {
    setSlice(data.eventsData.slice(0, hideElement));
  };

  const handleClick = () => {
    setHideElement(hideElement + 8);
  };

  return (
    <section className="py-14 px-14 mx-auto">
      <div className="flex flex-wrap items.center content.center">
        {slice.map((item, index) => {
          return (
            <div key={index}>
              <div className="m-14 overflow-hidden shadow-md">
                <Link to="/curateur">
                  <VirtualEvents
                    src={item.Cover}
                    title={item.title}
                    author={item.author}
                    date={item.date}
                    like={item.like}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        name="AFFICHER PLUS"
        class="bg-green-500 w-full text-white text-sm font-xl p-2.5 px-4 hover:bg-green-800 ease duration-500 "
        handleClick={handleClick}
      />
    </section>
  );
}
