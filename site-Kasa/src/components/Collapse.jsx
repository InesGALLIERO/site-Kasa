import { useState } from "react";
import "../styles/Collapse.scss"
import Arrow from "../assets/Arrow.svg"

function Collapse ({ title, content }) {
    const [ouvert, setOuvert] = useState(false);
    
    return (
        <div className="collapse">
            <button 
                className="collapse-header"
                onClick={() => setOuvert(!ouvert)}
            >
                <span>{title}</span>

                <img
                    src={Arrow}
                    alt="flèche"
                    className={`arrow ${ouvert ? "rotate" : ""}`}
                />
            </button>
            
            <div className={`collapse-content ${ouvert ? "open" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}
export default Collapse;