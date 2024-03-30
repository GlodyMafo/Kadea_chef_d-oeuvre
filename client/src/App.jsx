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

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = (token, role) => {
    setToken(token);
    setRole(role);

    console.log(token);
    console.log(role);
  };

  // const currentUser=role
  // const isConnect=token

  return (
    <div className="font-Mont">
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mediatheque" element={<Mediatheque />} />
           
            <Route path="/gallerie" element={<Gallery />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/connexion"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/inscription" element={<SignUp />} />
            <Route path="/content" element={<MediathequeRessource />} />
          
            <Route path="/artiste" element={<Artiste />} />
            <Route path="/curateur" element={<Curateur />} />
            <Route path="/visite" element={<Visite />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
   
      </BrowserRouter>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;

function RedirectToConnexion() {
  const navigate = useNavigate();
  navigate("/connexion");
  return null;
}
