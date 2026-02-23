// On importe le composant Card que l'on a créé précédemment
// Chaque Card affichera un logement individuel
import Card from "./Card";

// On crée un composant React appelé Gallery
// Il reçoit une prop appelée "logements" (liste de logements)
function Gallery({ logements }) {

  // Le composant retourne du JSX
  return (

    // Div qui contient toutes les cartes
    // "gallery" est une classe CSS pour pouvoir styliser la galerie
    <div className="gallery">

      {/*
        On parcourt la liste de logements avec map
        Pour chaque logement, on crée une Card
        key = identifiant unique pour que React gère bien la liste
        logement={logement} = on passe le logement à la Card en prop
      */}
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}

    </div> // Fin de la div gallery
  );
}

// Permet d'utiliser ce composant dans d'autres fichiers
export default Gallery;