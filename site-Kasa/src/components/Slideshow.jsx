import React, {useState} from "react";
import Arrow from "../assets/Arrow.svg"
import "../styles/slideshow.scss"

function Slideshow ({pictures}) {
    const [indexActuel, setIndexActuel] = useState(0);

    const droite = () => {
        if(indexActuel === pictures.length - 1){
            setIndexActuel(0)
        }else{
            setIndexActuel(indexActuel + 1);
        }
    };
    const gauche = () => {
        if(indexActuel === 0){
            setIndexActuel(pictures.length - 1);
        }else {
            setIndexActuel(indexActuel - 1);
        }
    };

    return(
        <div className="slideshow">

            <img 
                className="slideshow__image"
                src = {pictures[indexActuel]}
                alt={`slide ${indexActuel + 1}`}
            />

        
        
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