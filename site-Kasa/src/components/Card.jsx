// On importe le composant Link depuis react-router-dom
// Il permet de naviguer entre les pages sans recharger le site
import { Link } from "react-router-dom";

import "../styles/Card.scss";
// On crée un composant React appelé Card
// Il reçoit une prop appelée "logement"
function Card({ logement }) {

  // Le composant retourne du JSX (du HTML dans du JavaScript)
  return (

    // Link rend toute la carte cliquable
    // "to" définit vers quelle URL on va naviguer
    // `${logement.id}` insère dynamiquement l'id du logement dans l'URL
    <Link to={`/logement/${logement.id}`} className="card">

      {/* 
        On affiche l'image du logement 
        src = chemin de l'image
        alt = texte alternatif
        className = classe CSS pour le style
      */}
      <img 
        src={logement.cover} 
        alt={logement.title} 
        className="card__image"
      />

      {/*
        On affiche le titre du logement
        Les { } permettent d'insérer du JavaScript dans le JSX
      */}
      <h3 className="card__title">
        {logement.title}
      </h3>

    </Link> // Fin du lien (et donc de la carte)
  );
}

// Permet d'utiliser ce composant dans d'autres fichiers
export default Card;
