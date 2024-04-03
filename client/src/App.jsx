import React, { useState } from "react";
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
import Curateur from "./component/Pages/Curateur";
import Artiste from "./component/Pages/Artistes";
import Nav from "./component/Pages/NavBar";
import Login from "./component/general components/Login";
import SignUp from "./component/general components/SignUp";
import Admin from "./component/Pages/Admin";
import PdfRending from "./component/general components/pdfRender";
import Error from "./component/Pages/Error";

function App() {

  const Token = JSON.parse(localStorage.getItem("myToken"));
  const [token, setToken] = useState(Token);



  const handleLogin = () => {

  };


  return (
    <div className="font-Mont">
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mediatheque" element={<Mediatheque /> }/>
            <Route path="/gallerie" element={token ? <Gallery /> : <Login />} />
            <Route path="/forum" element={token ? <Forum /> : <Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Login onLogin={handleLogin} />} />
            <Route path="/inscription" element={<SignUp />} />
            <Route path="/content" element={token ? <MediathequeRessource /> : <Login />}  />
            <Route path="/admin" element={token ? <Admin /> : <Login />} />
            <Route path="/artiste" element={token ? <Artiste /> : <Login />} />
            <Route path="/curateur" element={token ? <Curateur /> : <Login />} />
            <Route path="/visite" element={<Visite />} />
            <Route path="/read" element={<PdfRending />} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />

    
    </div>
  );
}

export default App;
