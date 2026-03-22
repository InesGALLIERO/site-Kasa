//On importe une image pour affciher "404"
import Logo404 from '../assets/404.svg'
//On importe le fichier de style pour la page 404
import '../styles/Page404.scss'

//On crée un composant applé Page404
function Page404() {

  //Ce que la page va afficher 
  return (
    <>
    {/* Conteneur principal */}
    <div className='page404'>

      {/* Image du code erreur 404 */}
      <img src={Logo404} alt='logo 404'/>

      <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>

      {/* lien pour retourner à l'accueil*/}
      <a href="/">Retourner sur la page d’accueil</a>
    </div>

    </>
    
  );
}

//Permet d'utiliser cette page ailleurs dans l'application
export default Page404;