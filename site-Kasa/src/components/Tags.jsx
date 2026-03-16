import "../styles/tags.scss";


//Composant qui affiche les tags du logement
//Il reçoit une prop appelée tags
function Tags({tags}){

    //return indique ce que React doit afficher sur la page
    return(

        //Conteneur de tous les tags
        <div className="logement__tags">

            {/* map parcourt la liste des tags */}
            {tags.map((tag, index) => (

                //chaque tag devient un spam
                //key est nécessaire pour React
                <span key={index} className="logement__tag">

                    {/* affichage du texte du tag */}
                    {tag}

                </span>

            ))}

        </div>
    );
}

//export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Tags;