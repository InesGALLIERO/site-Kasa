import logoFooter from '../assets/logoFooter.svg'

import '../styles/Footer.scss'

function footer() {
  return (
    <footer>
      <img src={logoFooter} alt='logo Kasa Footer' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default footer;