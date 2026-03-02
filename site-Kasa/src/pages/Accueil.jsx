// On importe le composant BanniereAccueil pour afficher la bannière en haut de la page
import BanniereAccueil from "../components/Banniere.jsx";

// On importe les données des logements depuis le fichier JSON
// C'est un tableau contenant tous les logements à afficher
import logements from "../data/logements.json";

// On importe le composant Gallery qui affichera les cartes des logements
import Gallery from "../components/Gallery.jsx";

// On crée le composant Accueil
function Accueil() {

  // Le composant retourne du JSX
  return (
    <>
      {/*
         On utilise le composant Banniere
        On lui passe la prop "type"
        Ici on indique "accueil"
        → donc la bannière affichée sera celle de l'accueil
      */}
      <BanniereAccueil type="accueil"/>

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