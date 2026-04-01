import './header.scss'

import { Logo } from '@assets/import'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate('/#contact')

    setTimeout(() => {
      const el = document.getElementById('contact')
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="header">
      
      <div className="header__logo">
        <img src={Logo} alt="logo jardins du val de moselle" />
        <h1>Les Jardins du Val de Moselle</h1>
      </div>

      <nav className="header__nav">

        <Link to="/">Accueil</Link>
        <Link to="/recettes">Recettes</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/produits">Produits</Link>

        <button onClick={scrollToContact}>
          Contact
        </button>

      </nav>

    </header>
  )
}

export default Header