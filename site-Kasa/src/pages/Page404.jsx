 import Logo404 from '../assets/404.svg'
 import Oups from '../assets/Oups.svg'
 import '../styles/Page404.scss'

function Page404() {
  return (
    <>
    <div className='page404'>
      <img src={Logo404} alt='logo 404'/>
      <img src={Oups} alt='Oups'/>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>

    </>
    
  );
}

export default Page404;