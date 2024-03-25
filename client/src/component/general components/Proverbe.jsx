import React, { useState, useEffect } from "react";

// tableau des proverbes
const elements = [
  "L'arbre qui tombe fait plus de bruit que la forêt qui pousse.",
  "Soulève ta charge jusqu'au genou, on t'aidera à la mettre sur la tête !",
  "Le séjour dans l'eau ne transforme pas un tronc d'arbre en crocodile.",
  "Qui avale une noix de coco, fait confiance en son anus.",
  "Au bout de la patience, il y a le ciel.",
  "L'argent est bien, mais l'homme est meilleur, parce qu'il répond quand on l'appelle.",
  "Mieux vaut marcher sans savoir où aller que rester assis sans rien faire.",
  "Eduquer une femme, c'est éduquer un village.",
  "La force de vie sacrée, invisible et puissante, contient la mémoire du passé et la vision du futur.",
  "Un homme sans culture, c'est comme un zèbre sans rayures.",
  "Si tu peux marcher, tu peux danser. Si tu peux parler, tu peux chanter...",
  "Le silence est parfois plus éloquent que les mots.",
  "Un veillard qui meurt, c'est comme une bibliothèque qui brûle.",
];

function ProverbeDisplay() {
  
  const [displayedElement, setDisplayedElement] = useState("L'arbre qui tombe fait plus de bruit que la forêt qui pousse");

  // Fonction pour mélanger les éléments du tableau

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    const shuffledElements = shuffleArray(elements.slice());
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedElement(shuffledElements[currentIndex]);
      currentIndex = (currentIndex + 1) % shuffledElements.length; // Passer au prochain élément ou revenir au début
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{displayedElement}</p>
    </div>
  );
}

export default ProverbeDisplay;
