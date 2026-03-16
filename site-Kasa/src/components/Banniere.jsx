// On importe l'image de la bannière pour la page Accueil
import BanniereAccueil from "../assets/BanniereAccueil.svg";

// On importe l'image de la bannière pour la page À propos
import BanniereAPropos from "../assets/BanniereAPropos.svg";

import "../styles/Banniere.scss"

// On crée un composant React appelé Banniere
// Il reçoit une prop appelée "type"
// Cette prop va nous permettre de savoir quelle bannière afficher
function Banniere({ type }) {

  // On crée une constante "image"
  // Si le type est égal à "apropos"
  // Alors on utilise l'image BanniereAPropos
  // Sinon (dans tous les autres cas) on utilise BanniereAccueil
  const image = type === "apropos" 
    ? BanniereAPropos 
    : BanniereAccueil;

  // Le composant retourne une balise <img>
  // src reçoit l'image choisie dynamiquement
  // alt est le texte alternatif pour l’accessibilité
  return (
     <div
      className={`Banniere ${type === "apropos" ? "apropos" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {type !== "apropos" && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans d'autres fichiers
export default Banniere;