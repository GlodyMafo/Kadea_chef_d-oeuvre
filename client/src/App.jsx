import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "client/src/component/Pages/Home.jsx";
import Mediatheque from "./component/Pages/Mediatheque";
import Forum from "./component/Pages/Forum";
import Contact from "./component/Pages/Contact";

import Gallery from "./component/Pages/Gallerie";

import MediathequeRessource from "./component/Pages/MediathequeRessource";
import Footer from "./component/Pages/Footer";
import Visite from "./component/Pages/Visite";

import ArtisteOtherView from "./component/Pages/ArtisteOtherView";
import Curateur from "./component/Pages/Curateur";
import CurateurOtherView from "./component/Pages/CurateurOtherView";
import Admin from "./component/Pages/Admin";
import UserTable from "./component/general components/TableAdmin";
import Artiste from "./component/Pages/Artistes";
import Nav from "./component/Pages/NavBar";
import Login from "./component/general components/Login";
import SignUp from "./component/general components/SignUp";

function App() {
  return (
    <div className="font-Mont">

      <BrowserRouter>
        <div>
         <Nav/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/mediatheque" element={<Mediatheque/>} />
            <Route path="/gallerie" element={<Gallery/>} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/connexion" element={<Login/>} />
            <Route path="/inscription" element={<SignUp/>} />
            <Route path="/content" element={<MediathequeRessource/>} />
            <Route path="/artiste" element={<Artiste/>} />
            <Route path="/curateur" element={<Curateur/>} />
            <Route path="/visite" element={<Visite/>} />
           
          </Routes>
        </div>
      </BrowserRouter>

      <div>
      <Footer/>
      </div>

     
    </div>
  );
}

export default App;
