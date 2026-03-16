import "../styles/host.scss";

//composant qui affiche le propriétaire du logement
//Il reçoit deux props : name et picture
function Host ({name, picture}){

    //return indique ce que React doit afficher sur la page
    return(

        //Conteneur du propriétaire
        <div className="logement__host">
            
            {/* Nom du propriétaire*/}
            <p className="logement__host-name">
                {name}
            </p>

            {/* Photo du propriétaire */}
            <img 
                src={picture} //chemin de l'image
                alt={name} //texte alternatif de l'image
                className="logement__host-picture" //classe CSS pour styliser l'image
            />

        </div>

    );
}
export default Host;