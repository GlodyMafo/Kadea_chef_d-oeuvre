import Button from "./Button";
import "client/src/index.css";
import { Link } from "react-router-dom";

import mask from "client/src/assets/images/Mask.jpg";
import girlMask from "client/src/assets/images/girlMask.jpg";
import GalleryHomePg from "./GallerieHomeBd";
import CarousselleExpo from "./CarousselleExpo";

import Afrique1 from "client/src/assets/images/Le-Cap-Afrique-du-Sud.jpg";
import Afrique2 from "client/src/assets/images/Les-chutes-Victoria-Victoria-Falls.jpeg";
import Afrique3 from "client/src/assets/images/Mont-Kilimandjaro-Tanzanie.jpeg";
import Afrique4 from "client/src/assets/images/Montagnes-des-Virunga.jpg";
import Afrique5 from "client/src/assets/images/Réserve-nationale-du-Massaï-Mara-Kenya.jpg";
import Afrique6 from "client/src/assets/images/Zanzibar-Tanzanie-vue-a-rienne.jpg";
import ProverbeDisplay from "./Proverbe";

function BodySection1() {
  return (
    <div className="w-full pt-20">
      <div className="relative mx-auto  w-[1300px]">
        <div className="flex w-full">
          <div className="w-[60%] p-12 bg-gray-100 border border-8 border-gray-400">
            <p className="text-green-500 font-semibold text-2xl pt-8 pb-6">
              PALETTE CULTURELLE AFRICAINE.
            </p>
            <h1 className="font-bold text-4xl pb-6">
              PERCEZ LES SECRETS DES TRADITIONS AFRICAINES.
            </h1>
            <p className="pb-6 pr-14 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              faucibus nisi ac arcu mattis, vitae imperdiet arcu tempus. Aenean
              fermentum sem vel tempus laoreet. <br />
              Aenean non lacinia nibh. Aliquam elementum arcu ut sapien porta,
              nec efficitur quam bibendum. Aliquam eget imperdiet nibh. Quisque
              non metus quis enim aliquet placerat eu vitae tellus. Aliquam
              elementum arcu ut sapien porta, nec efficitur quam bibendum.
              Aliquam eget imperdiet nibh. Quisque non metus quis enim aliquet
              placerat eu vitae tellus. Aenean non lacinia nibh. Aliquam
              elementum arcu ut sapien porta, nec efficitur quam bibendum.
              Aliquam eget imperdiet nibh. Quisque non metus quis enim aliquet
              placerat eu vitae tellus. Aliquam elementum arcu ut sapien porta,
              nec efficitur quam bibendum. Aliquam eget imperdiet nibh. Quisque
              non metus quis enim aliquet placerat eu vitae tellus.
            </p>
            <Link to="/mediatheque">
              <Button
                name="DECOUVRIR"
                class="bg-gray-600 text-white text-sm font-xl p-2.5 px-4 hover:bg-gray-800 ease duration-500 "
              />
            </Link>
          </div>
          <div className="w-[40%]   ml-14">
            <img src={mask} alt="" className="w-full " />
          </div>
        </div>
        <div className="w-[450px] border border-8 border-gray-400 absolute right-[180px] -bottom-28">
          <img src={girlMask} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BodySection1;

// Deuxième partie du body

export function BodySection2() {
  return (
    <div className="p-20">
      <div className="w-full pt-[8rem] ">
        <div className="ml-[30rem] ">
          <div className="relative  w-11/12 ">
            <div className="bg-gray-100 p-8 text-center text-2xl h-[10rem] w-3/4 italic">
              <ProverbeDisplay />
              <p className="not-italic pt-4"> _proverbes africains</p>
            </div>
            <div className="absolute bottom-[8.5rem] pl-8 ">
              <svg
                width="41"
                height="37"
                viewBox="0 0 41 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7109 2.92091C10.6946 7.46455 7.18739 12.9404 7.18739 19.3411C7.18739 21.3335 7.53134 22.3287 8.21568 22.3287L8.92141 22.1358C9.47744 21.9194 9.92476 21.8113 10.2687 21.8113C12.2772 21.8113 13.9577 22.5505 15.3033 24.029C16.6506 25.5075 17.3242 27.3285 17.3242 29.503C17.3242 31.5891 16.5935 33.3615 15.1411 34.8165C13.6869 36.2716 11.9332 36.9982 9.88021 36.9982C7.01452 36.9982 4.64961 35.8082 2.78727 33.4228C0.928497 31.0428 0 28.0498 0 24.4491C0 20.3743 0.787707 16.6474 2.37025 13.2649C3.95636 9.88422 6.36938 6.82808 9.62001 4.09649C12.8706 1.3667 14.9451 0 15.8433 0C16.4421 0 16.9339 0.292091 17.3189 0.876273C17.7038 1.45865 17.8963 1.96711 17.8963 2.39983L17.7056 2.91911L17.7109 2.92091ZM40.8075 2.92091C33.7912 7.46455 30.2858 12.9386 30.2858 19.3429C30.2858 21.3353 30.6297 22.3305 31.314 22.3305L32.0198 22.1376C32.5758 21.9213 33.0231 21.8131 33.3671 21.8131C35.3328 21.8131 37.0027 22.5523 38.3696 24.0308C39.7418 25.5093 40.4226 27.3303 40.4226 29.5048C40.4226 31.5909 39.6919 33.3633 38.2395 34.8183C36.7852 36.2734 35.0316 37 32.9786 37C30.1129 37 27.748 35.81 25.8856 33.4246C24.0269 31.0446 23.0984 28.0516 23.0984 24.4509C23.0984 20.3328 23.8968 16.5717 25.5043 13.1711C27.1082 9.76882 29.523 6.7217 32.7522 4.03518C35.9868 1.34686 38.0488 0.00180376 38.9452 0.00180376C39.5458 0.00180376 40.0376 0.293894 40.4244 0.878076C40.8075 1.46226 41 1.97071 41 2.40344L40.8075 2.92091Z"
                  fill="#12C081"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERIE D'OEUVRES D'ART */}

      <div className="px-14 pt-[10rem] ">
        <div className="flex justify-between items-center border-b pb-6 px-8">
          <p className="text-3xl font-semibold">Gallerie d'œuvres d'art</p>
          <Link to="/gallerie">
          <p className="text-2xl hover:text-green-500">Voir plus.</p>
          </Link>
        </div>
        <div className="p-8">
          <GalleryHomePg />
        </div>
      </div>
      {/* 
      GALLERIE D'EXPOSITIONS VIRTUELLES */}

      <div className="px-14 pt-[4rem] ">
        <div className=" border-b pb-6 ">
          <p className="text-3xl font-semibold">
            Dernières expositions virtuelles
          </p>
        </div>
        <div className="pt-2">
          <CarousselleExpo  />
        </div>
      </div>
    </div>
  );
}

export function BodySection3() {
  return (
    <div className="">
      <div className="w-3/5 mx-auto ">
        <div className="text-center text-xl">
          <h2 className="text-3xl font-semibold pb-6">Visiter l'afrique</h2>
          <p className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            tempus ipsum, ac ornare quam. Suspendisse potenti. Aenean luctus
            commodo mauris ut egestas. Phasellus dictum lorem a auctor
            tincidunt.
          </p>
          <a href="" className="text-green-500 font-lg">
            Lire plus.
          </a>
        </div>
      </div>
      <div className="Myslider">
        <div className="slide-tracking">
          <img className="images" src={Afrique1} alt="" />

          <img className="images" src={Afrique2} alt="" />

          <img className="images" src={Afrique3} alt="" />

          <img className="images" src={Afrique4} alt="" />

          <img className="images" src={Afrique5} alt="" />

          <img className="images" src={Afrique6} alt="" />

          <img className="images" src={Afrique1} alt="" />

          <img className="images" src={Afrique2} alt="" />

          <img className="images" src={Afrique3} alt="" />

          <img className="images" src={Afrique4} alt="" />

          <img className="images" src={Afrique5} alt="" />

          <img className="images" src={Afrique6} alt="" />

          <img className="images" src={Afrique1} alt="" />

          <img className="images" src={Afrique2} alt="" />

          <img className="images" src={Afrique3} alt="" />

          <img className="images" src={Afrique4} alt="" />

          <img className="images" src={Afrique5} alt="" />

          <img className="images" src={Afrique6} alt="" />

          <img className="images" src={Afrique1} alt="" />

          <img className="images" src={Afrique2} alt="" />

          <img className="images" src={Afrique3} alt="" />

          <img className="images" src={Afrique4} alt="" />

          <img className="images" src={Afrique5} alt="" />

          <img className="images" src={Afrique6} alt="" />
        </div>
      </div>
    </div>
  );
}
