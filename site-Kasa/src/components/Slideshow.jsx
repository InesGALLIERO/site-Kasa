import React, {useState} from "react";
import Arrow from "../assets/Arrow.svg"
import "../styles/Slideshow.scss"

function Slideshow ({pictures}) {

    //indexActuel = position actuelle dans le tableau 
    // ex: 0 = premiere image, 1 = deuxieme, ect
    const [indexActuel, setIndexActuel] = useState(0);

    const droite = () => {
        
        // CONDITION :
        // on vérifie si on est sur la DERNIÈRE image
        // pictures.length - 1 = index de la dernière image

        if(indexActuel === pictures.length - 1){

            // CAS 1 : on est à la fin
            // → on "boucle" → on revient au début 
            setIndexActuel(0)

        }else{

            // CAS 2 : on n'est PAS à la fin
            // → on avance simplement d'une image
            setIndexActuel(indexActuel + 1);
        }
    };
    const gauche = () => {

        // CONDITION :
        // on vérifie si on est sur la PREMIÈRE image
        if(indexActuel === 0){

            // CAS 1 : on est au début
            // → on "boucle" vers la fin
            setIndexActuel(pictures.length - 1);
        }else {

            // CAS 2 : on n'est PAS au début
            // → on recule d'une image
            setIndexActuel(indexActuel - 1);
        }
    };

    return(
        <div className="slideshow">

            <img 
                className="slideshow__image"

                // on affiche l'image correspondant à l'index actuel
                // => accès au tableau avec une position dynamique
                src = {pictures[indexActuel]}

                // +1 car index commence à 0 mais utilisateur voit 1
                alt={`slide ${indexActuel + 1}`}
            />
          {/* 
        CONDITION D'AFFICHAGE (render conditionnel)

        pictures.length > 1 signifie :
        → "est-ce qu'il y a plus d'une image ?"

        Si TRUE → on affiche les flèches + compteur
        Si FALSE → on n'affiche rien (inutile s'il y a 1 seule image)
        */}
        
        {pictures.length > 1 && (
            <>
                <button className="slideshow__arrow slideshow__arrow--left" onClick={gauche}>
                    <img src={Arrow} alt="flèche gauche" />
                </button>

                <button className="slideshow__arrow slideshow__arrow--right" onClick={droite}>
                    <img src={Arrow} alt="flèche droite" />
                </button>

                <p className="slideshow__counter">
                     {indexActuel + 1} / {pictures.length} 
                </p>
            </>
            
        )}
        </div>
    );
}
export default Slideshow