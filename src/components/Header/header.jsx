import './header.scss'

import { Logo } from '@assets/import'

function Header() {

  return (

    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo jardins du val de moselle" />
        <h1>Les Jardins du Val de Moselle</h1>
      </div>
      <nav className="header__nav">
        <a href="#accueil">Accueil</a>
        <a href="#recettes">Recettes</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    
  )

}

export default Header