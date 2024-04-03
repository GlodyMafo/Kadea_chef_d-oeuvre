import React from "react";
import PDF from "client/src/Ressources/Histoire_littéraire.pdf#toolbar=0";
import { Link } from "react-router-dom";

function PdfRending() {
  return (
    <div>
      <Link to="/content">
        <h1>Retour</h1>
      </Link>
      <embed className="w-full h-screen" src={PDF} type="" />
    </div>
  );
}

export default PdfRending;
