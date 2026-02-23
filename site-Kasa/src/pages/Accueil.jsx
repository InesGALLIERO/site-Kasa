// On importe le composant BanniereAccueil pour afficher la bannière en haut de la page
import BanniereAccueil from "../components/BanniereAccueil";

// On importe les données des logements depuis le fichier JSON
// C'est un tableau contenant tous les logements à afficher
import logements from "../data/logements.json";

// On importe le composant Gallery qui affichera les cartes des logements
import Gallery from "../components/Gallery";

// On crée le composant Accueil
function Accueil() {

  // Le composant retourne du JSX
  return (
    <>
      {/*
        BanniereAccueil est affiché en haut de la page
      */}
      <BanniereAccueil />

      {/*
        Gallery reçoit la prop "logements"
        On lui passe le tableau de logements importé depuis le JSON
        Gallery va ensuite créer une Card pour chaque logement
      */}
      <Gallery logements={logements} />

    </>
  );
}

// Permet d'utiliser ce composant dans d'autres fichiers
export default Accueil;