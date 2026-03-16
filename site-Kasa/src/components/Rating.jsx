//On importe l'image de l'étoile active (étoile rouge)
import StarActive from "../assets/star-active.svg";

//On importe l'image de l'étoile inactive (étoile grise)
import StarInactive from "../assets/star-inactive.svg";  

import "../styles/rating.scss";

//on crée un composant React appelé Rating
//Il reçoit une prop appelée rating qui représente la note du logement
function Rating({rating}){

    //return indique ce que React doit afficher sur la page
    return(

        //div qui contient toutes les étoiles
        <div className="logement__rating">

            {/* 
            On crée un tableau contenant 5 valeurs : 1,2,3,4,5
            Chaque valeur représente une étoile
            map() va parcourir ce tableau pour créer 5 images
            */}
            {[1,2,3,4,5].map((star) => (

                //img affiche une étoile
                <img 

                    // key est nécessaire pour React quand on crée une liste d'éléments
                    key={star} 
                    /*
                    Condition pour choisir l'image :

                    si la valeur de l'étoile est inférieure ou égale au rating
                    = on affiche une étoile rouge

                    sinon
                    = on affiche une étoile grise
                    */

                    src={star <= rating ? StarActive : StarInactive} 

                    //texte alternatif pour l'accessibilité
                    alt="étoiles"
                />

            ))}

        </div>

    );
}
//permet d'utiliser ce composant dans d'autres fichiers
export default Rating;
