import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "client/src/assets/images/peint1.jpg";
import axios from "axios";

function SignUp() {
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassord] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = axios.post("http://localhost:800/sign", {
        email,
        username,
        role,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(
        "Errer inattendu lors de votre inscription veuillez réessayer :",
        error
      );
    }
  };

  return (
    <div
      className=" bg-center bg-cover h-screen flex justify-center items-center mx-auto"
      style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}
    >
      <div className="flex w-2/4 pr-10 bg-white">
        <img className="w-2/4 pr-10" src={photo} alt="" />
        <div className="fex flex-col">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <h3 className="text-2xl font-medium pb-4">Créer un compte</h3>

          <form onSubmit={handleSignup}>
            <label className="text-base " for="e-mail">
              Adresse E-mail :
            </label>
          
            <input
              className="h-10 w-full bg-gray-100 border border border-green-500 pl-2"
              type="email"
              name="e-mail"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            
            <label className="text-base " for="UserName">
              Nom d'utilisateur :
            </label>
           
            <input
              className="h-10 w-full bg-gray-100 border border border-green-500 pl-2"
              type="texte"
              name="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          
            <label className="text-base" for="choix">
              Profil :
            </label>
           
            <select
              className="h-10 w-full bg-gray-100 border border border-green-500 pl-2"
              id="choix"
              name="choix"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="CURATOR">Curateur</option>
              <option value="ARTIST">Artiste</option>
              <option value="USER">Autre</option>
            </select>
            <label className="text-base " for="Password">
              Mot de passe :
            </label>
           
            <input
              className=" h-10 w-full bg-gray-100 border border border-green-500 pl-2"
              type="password"
              name="Password"
              value={password}
              onChange={(e) => setPassord(e.target.value)}
            />
            <br />

            <button
              className="bg-green-500 mt-6 w-full p-2 text-white font-bold mb-4 hover:bg-green-800 "
              type="submit"
            >
              CREER UN COMPTE
            </button>
            {/* <input
              className="bg-green-500 mt-6 w-full p-2 text-white font-bold mb-4 "
              type="button"
              action="submit"
              value="CREER UN COMPTE"
            /> */}
          </form>

          <p className="text-sm">
            Vous avez un compte ?
            <Link to="/connexion">
              <span className="text-green-500 font-semibold cursor-pointer mx-2">
                Connectez-vous.
              </span>
            </Link>
          </p>

          <p className="text-sm py-8">
            En créant un compte Afrikulture, je confirme avoir lu et accepté
            <a href="" className="underline">
              les conditions d'utilisation
            </a>
            et
            <a href="" className="underline">
              la politique de confidentialité
            </a>
            de Afrikulture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
