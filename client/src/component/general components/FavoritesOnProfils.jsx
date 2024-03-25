import React from "react";
import Fav1 from "client/src/assets/images/pexels-antonio-filigno-10287303.jpg";
import VirtualEvents from "./VirtualEvents";


function MyFavorites() {
  return (
    <div className="flex flex-wrap  h-[14rem]  mt-10 justify-between mx-[5rem] ">
      <img src={Fav1} alt="" className="w-[14rem]" />
      <img src={Fav1} alt="" className="w-[14rem]" />
      <img src={Fav1} alt="" className="w-[14rem]" />
      <div className="border w-[14rem] flex items-center justify-center text-7xl text-gray-500">
        <h1>+</h1>
      </div>
    </div>
  );
}

export default MyFavorites;

export function FavoritesUV() {
  return ( 
  <div className="flex flex-wrap border-xl  h-[14rem]  mt-10 justify-between mx-[5rem] ">
    <img src={Fav1} alt="" className="w-[14rem]" />
    <img src={Fav1} alt="" className="w-[14rem]" />
    <img src={Fav1} alt="" className="w-[14rem]" />
  </div>
  );
}

export function MyFavoritesExpo() {
  return (
    <div className="flex flex-wrap  h-[14rem] mb-16 mt-6 justify-between mx-[5rem] ">
      <VirtualEvents src={Fav1} author="Glody Mafo" like="100" date={Date()}/>
      <VirtualEvents src={Fav1} author="Glody Mafo" like="100" date={Date()} />
     
      <div className="border w-[30rem] ml-10 flex items-center justify-center text-7xl text-gray-500">
        <h1>+</h1>
      </div>
    </div>
  );
}

export function MyFavoritesExpoUv() {
  return (
    <div className="flex flex-wrap  h-[14rem] mb-16 mt-6 justify-between mx-[5rem] ">
      <VirtualEvents src={Fav1} author="Glody Mafo" like="100" date={Date()}/>
      <VirtualEvents src={Fav1} author="Glody Mafo" like="100" date={Date()} />
      <VirtualEvents src={Fav1} author="Glody Mafo" like="100" date={Date()} />
    </div>
  );
}
