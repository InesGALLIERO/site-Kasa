import { useState } from "react";
import "../styles/Collapse.scss"
import Arrow from "../assets/Arrow.svg"

function Collapse ({ title, content }) {
    //useState est un hook de React qui permet de gérer l'état d'un composant fonctionnel. 
    // State pour gérer l'ouverture et la fermeture du collapse
    //"ouvert" = valeur actuelle (true = ouvert, false = fermé )
    //"setOuvert" = fonction pour modifier cette valeur
    //false = collapse fermé par défaut
    const [ouvert, setOuvert] = useState(false);
    
    return (
        <div className="collapse">
            <button  
                className="collapse-header"

                //au clic, on inverse la valeur :
                //si "ouvert" est false, il devient true (collapse s'ouvre)
                //si "ouvert" est true, il devient false (collapse se ferme)
                onClick={() => setOuvert(!ouvert)}
            >
                <span>{title}</span>

                <img
                    src={Arrow}
                    alt="flèche"

                    // Si "ouvert" est true => on ajoute la classe "rotate"
                    // Sinon => rien
                    // => permet de faire tourner la flèche lorsque le collapse est ouvert
                    className={`arrow ${ouvert ? "rotate" : ""}`}
                />
            </button>
            
            <div className={`collapse-content ${ouvert ? "open" : ""}`}>

                 {/* 
                même logique ici :
                si ouvert = true → classe "open" ajoutée
                => permet d'afficher le contenu (via CSS)
                */}
                <p>{content}</p>
            </div>
        </div>
    );
}
export default Collapse;