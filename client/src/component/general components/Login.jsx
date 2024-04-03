
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "client/src/assets/images/peint1.jpg";
import axios from "axios";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs vides
    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      const token = response.data;
      localStorage.setItem("myToken", JSON.stringify(token));
      onLogin(token);
      handleRedirect(token.user.role);
    } catch (error) {
      // Gestion des erreurs de connexion
      setError("Email ou mot de passe incorrect");
    }
  };

  const handleRedirect = (role) => {
    switch (role) {
      case "ADMIN":
        navigate("/admin");
        break;
      case "CURATOR":
        navigate("/curateur");
        break;
      case "ARTIST":
        navigate("/artiste");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div
      className=" bg-center bg-cover h-screen flex justify-center items-center mx-auto"
      style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}
    >
      <div className="w-2/5 bg-red-700 flex justify-center items-center content-center">
        <div className="flex pr-10 bg-white shadow-lg">
          <img className="w-2/4 pr-10" src={photo} alt="" />
          <div className="fex flex-col justify-center items-center">
            <div className="flex justify-end p-8">
              <Link to="/">
                <a className="text-3xl font-base  ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20L4 4M20 4L4 20"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </div>

            <h3 className="text-2xl font-medium pb-4 ">Se connecter</h3>
            <form onSubmit={handleSubmit}>
              <label className="text-base" htmlFor="e-mail">
                Adresse E-mail :
              </label>
              <input
                className="h-10 w-full bg-gray-100 px-2 border border-green-500"
                type="email"
                name="e-mail"
                placeholder="exemple@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="text-base" htmlFor="Password">
                Mot de passe :
              </label>
              <input
                className=" h-10 w-full bg-gray-100 px-2 border border border-green-500"
                type="password"
                name="Password"
                placeholder="Exemple: 12586M$Dld"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 pt-4">{error}</p>}
              <br />

              <button
                className="bg-green-500 mt-4 w-full p-2 text-white font-bold mb-4 cursor-pointer hover:bg-green-800 "
                type="submit"
              >
                CONNEXION
              </button>
            </form>
            <div className="flex justify-between">
              <p className="underline pb-4 text-sm cursor-pointer">
                Mot de passe oublié ?
              </p>
              <p className="text-sm">
                Vous n'avez pas de compte ?
                <Link to="/inscription">
                  <span className="text-green-500 font-semibold cursor-pointer mx-1">
                    Rejoignez-nous.
                  </span>
                </Link>
              </p>
            </div>

            <p className="text-sm pb-8">
              En me connectant à Afrikulture, je confirme avoir lu et accepté
              <a href="">les conditions d'utilisation</a> et
              <a href="">la politique de confidentialité</a> de Afrikulture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

