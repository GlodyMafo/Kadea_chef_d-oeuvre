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
              <div className="card p-0 overflow-hidden shadow-md">
                <img src={item.img} className="w-full max-h-[300px]  " />
                <div className="card-body p-4">
                  <Link to="/artiste">
                    <h5 className="card-title text-xl font-semibold hover:text-green-500">
                      {item.author}
                    </h5>
                  </Link>
                  <p className="card-text font-medium">{item.titre}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Button
          name="AFFICHER PLUS"
          class="bg-gray-600 w-full text-white text-sm font-xl p-2.5 px-4 hover:bg-gray-800 ease duration-500 "
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
        class="bg-gray-600 w-full text-white text-sm font-xl p-2.5 px-4 hover:bg-gray-800 ease duration-500 "
        handleClick={handleClick}
      />
    </section>
  );
}
