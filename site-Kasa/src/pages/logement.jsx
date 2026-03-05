// On importe ce dont on a besoin
import { useParams } from "react-router-dom"; // pour récupérer l'id dans l'URL
import logements from "../data/logements.json";  // ton fichier JSON avec tous les logements
import Slideshow from "../components/Slideshow"; // ton carrousel
import Page404 from "./Page404"; // page d'erreur

function Logement() {
  //Récupère l'id depuis l'URL
  const { id } = useParams();

  //Cherche le logement correspondant dans le JSON
  const logement = logements.find(item => item.id === id);

  //Si aucun logement trouvé, affiche la page 404
  if (!logement) return <Page404 />;

  //Sinon, affiche juste le titre et le carrousel
  return (
    <div>
      <h1>{logement.title}</h1>                 {/* Affiche le titre du logement */}
      <Slideshow pictures={logement.pictures} /> {/* Affiche les images dans le Slideshow */}
    </div>
  );
}

//On exporte le composant pour pouvoir l'utiliser ailleurs
export default Logement;