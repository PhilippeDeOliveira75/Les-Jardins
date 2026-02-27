import './footer.scss'

function Footer() {

  return (

    <footer className="footer">

        <p>© {new Date().getFullYear()} Les Jardins du Val de Moselle — Tous droits réservés</p>
        <p>Producteur de légumes à Metz</p>

    </footer>

  )
}

export default Footer