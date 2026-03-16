import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="header__container">
        <img src={logo} alt='logo Kasa' />

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/APropos">A propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;