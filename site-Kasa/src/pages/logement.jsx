// On importe useParams depuis react-router-dom
// Cette fonction permet de lire les informations dans l'URL
import { useParams } from "react-router-dom";

//On importe les données
// On importe le fichier JSON qui contient la liste de tous les logements
import logements from "../data/logements.json";

//On importe les composants 
// On importe le composant qui affiche le carrousel d'images
import Slideshow from "../components/Slideshow";
// On importe le composant qui affiche le titre et la localisation 
import LogementHeader from "../components/LogementHeader";
// On importe le composant qui affiche les tags du logement
import Tags from "../components/Tags";
// On importe le composant qui affiche le nom du propriétaire et la photo 
import Host from "../components/Host";
// On importe le composant qui affiche la note du logement 
import Rating from "../components/Rating";
// On importe la page collapse qui affiche les menus déroulants pour la description et les équipements
import Collapse from "../components/Collapse";

// On importe la page d'erreur 404 si le logement n'existe pas
import Page404 from "./Page404";

// On importe le fichier de style CSS/SCSS de la page logement
import "../styles/logement.scss"


// Création du composant Logement
// Ce composant va afficher la page d'un logement
function Logement() {

  // Création du composant Logement
  // Ce composant va afficher la page d'un logement
  const params = useParams();

  // On récupère l'id contenu dans l'URL
  const id = params.id;

  // On cherche dans la liste des logements
  // celui qui possède le même id que dans l'URL
  const logement = logements.find(
    logementItem => logementItem.id === id
  );

  // Si aucun logement n'est trouvé
  // on affiche la page 404
  if (!logement) {
    return <Page404 />;
  }

  // On récupère le nom du propriétaire
  const hostName = logement.host.name;

  // On récupère la photo du propriétaire
  const hostPicture = logement.host.picture;

  // On transforme la liste des équipements en texte
  // Exemple : ["Wifi","TV","Cuisine"]
  // devient : "Wifi, TV, Cuisine"
  const equipmentsText = logement.equipments.join(", ");

  // return indique ce que React doit afficher sur la page
  return (

    // return indique ce que React doit afficher sur la page
    <div className="logement">

      {/* Composant qui affiche les images du logement */}
      <Slideshow pictures={logement.pictures} />


      <div className="logement__info">

        <div className="logement__info--left">
          {/* Titre du logement/localisation */}
          <LogementHeader
          title={logement.title}
          location={logement.location}
          />

          {/* tags*/}
          <Tags
          tags={logement.tags}
          />
        </div>

        <div className="logement__info--right">
          {/* propriétaire*/}
          <Host
            name={hostName} 
            picture={hostPicture}     
          />

          {/* note*/}
          <Rating
            rating={logement.rating}
          />
        </div>  

      </div>
      


      {/* menus déroulants */}
      <div className="logement__collapses">

        {/* Menu déroulant pour la description */}
        <Collapse
          title="Description"
          content={logement.description}
        />

        {/* Menu déroulant pour les équipements */}
        <Collapse
          title="Équipements"
          content={equipmentsText}
        />

      </div>

    </div>
  );
}
{/* Menu déroulant pour les équipements */}
export default Logement;