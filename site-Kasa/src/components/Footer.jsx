import logoFooter from '../assets/logoFooter.svg'
import texteFooter from '../assets/texteFooter.svg'
import '../styles/Footer.scss'

function footer() {
  return (
    <footer>
      <img src={logoFooter} alt='logo Kasa Footer' />
      <img src={texteFooter} alt='Texte du Footer' />
    </footer>
  )
}

export default footer;