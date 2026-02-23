import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt='logo Kasa' />

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/APropos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header;