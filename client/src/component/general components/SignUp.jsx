import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from "client/src/assets/images/peint1.jpg";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation des champs
    if (!email || !username || !role || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    // Validation du nom d'utilisateur
    const usernamePattern = /^[a-zA-Z]{2,10}$/;
    if (!usernamePattern.test(username)) {
      setError("Le nom d'utilisateur doit contenir entre 2 et 10 lettres sans caractères spéciaux.");
      return;
    }

    // Si toutes les validations sont réussies, envoyer les données
    try {
      const response = await axios.post("http://localhost:8000/sign", {
        email,
        username,
        role,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(
        "Erreur inattendue lors de votre inscription. Veuillez réessayer :",
        error
      );
    }
  };

  return (
    <div className="bg-center bg-cover h-screen flex justify-center items-center mx-auto" style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}>
      <div className="flex w-2/4 pr-10 bg-white">
        <img className="w-2/4 pr-10" src={photo} alt="" />
        <div className="flex flex-col">
          <div className="flex justify-end p-8">
            <Link to="/">
              <a className="text-3xl font-base  ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20L4 4M20 4L4 20" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Link>
          </div>

          <h3 className="text-2xl font-medium pb-4">Créer un compte</h3>

          <form onSubmit={handleSignup}>
            <label className="text-base" htmlFor="e-mail">Adresse E-mail :</label>
            <input className="h-10 w-full bg-gray-100 border border border-green-500 pl-2" type="email" name="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="text-base" htmlFor="UserName">Nom d'utilisateur :</label>
            <input className="h-10 w-full bg-gray-100 border border border-green-500 pl-2" type="text" name="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label className="text-base" htmlFor="choix">Profil :</label>
            <select className="h-10 w-full bg-gray-100 border border border-green-500 pl-2" id="choix" name="choix" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="CURATOR">Curateur</option>
              <option value="ARTIST">Artiste</option>
              <option value="USER">Autre</option>
            </select>

            <label className="text-base" htmlFor="Password">Mot de passe :</label>
            <input className=" h-10 w-full bg-gray-100 border border border-green-500 pl-2" type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <br />

            <button className="bg-green-500 mt-6 w-full p-2 text-white font-bold mb-4 hover:bg-green-800" type="submit">CREER UN COMPTE</button>
          </form>

          {error && <p className="text-red-500 pb-2">{error}</p>}

          <p className="text-sm">
            Vous avez un compte ?
            <Link to="/connexion">
              <span className="text-green-500 font-semibold cursor-pointer mx-2">Connectez-vous.</span>
            </Link>
          </p>

          <p className="text-sm py-8">
            En créant un compte Afrikulture, je confirme avoir lu et accepté
            <a href="" className="underline">les conditions d'utilisation</a>
            et
            <a href="" className="underline">la politique de confidentialité</a>
            de Afrikulture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;


