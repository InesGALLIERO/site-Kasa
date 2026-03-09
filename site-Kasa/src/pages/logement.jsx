// On importe useParams depuis react-router-dom
// Cette fonction permet de lire les informations dans l'URL
import { useParams } from "react-router-dom";

// On importe le fichier JSON qui contient la liste de tous les logements
import logements from "../data/logements.json";

// On importe le composant qui affiche le carrousel d'images
import Slideshow from "../components/Slideshow";

// On importe la page d'erreur 404 si le logement n'existe pas
import Page404 from "./Page404";

// On importe la page d'erreur 404 si le logement n'existe pas
import Collapse from "../components/Collapse";

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

      {/* Partie du haut de la page (titre, localisation, tags, propriétaire) */}
      <div className="logement__header">

        {/* Partie gauche : titre, localisation et tags */}
        <div className="logement__info">

          {/* Titre du logement */}
          <h1 className="logement__title">
            {logement.title}
          </h1>

          {/* Ville ou localisation du logement */}
          <p className="logement__location">
            {logement.location}
          </p>

          {/* Liste des tags du logement */}
          <div className="logement__tags">

            {/* map parcourt la liste des tags */}
            {/* et crée un élément pour chaque tag */}
            {logement.tags.map((tag, index) => (

              // Chaque tag est affiché dans un span
              <span key={index} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite : propriétaire et note */}
        <div className="logement__host-rating">

          {/* Informations sur le propriétaire */}
          <div className="logement__host">

            {/* Nom du propriétaire */}
            <p className="logement__host-name">{hostName}</p>

            {/* Photo du propriétaire */}
            <img
              src={hostPicture} // chemin de l'image
              alt={hostName} // texte alternatif si l'image ne charge pas
              className="logement__host-picture"
            />
          </div>
          
          {/* Note du logement */}
          <div className="logement__rating">
            {logement.rating} / 5
          </div>

        </div>

      </div>

      {/* Partie avec les menus déroulants */}
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