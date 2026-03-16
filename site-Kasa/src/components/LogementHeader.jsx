//On crée un composant React appelé Logement Header
//Il reçoit deux propos : title et location
function LogementHeader({title, location}){

    //return indique ce que React doit afficher sur la page
    return(

        //div qui contient les informations du logement
        <div className="logement__info">

            {/* Titre du logement */}
            {/* {title} affiche la valeur envoyé par le parent */}
            <h1 className="logement__title">
                {title}
            </h1>

            {/* Localisation du logement */}
            {/* {location} vient aussi des props*/}
            <p className="logement__location">
                {location}
            </p>
        </div>
    )
}
export default LogementHeader;