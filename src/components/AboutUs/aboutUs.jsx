import './aboutUs.scss'

import { Champ } from '@assets/import';

function AboutUs () {

    return (

    <section className="about">
        <div className="about__content">
          <div className="about__text">
            <h2>À propos de nous</h2>
            <p> Les Jardins du Val de Moselle font pousser des légumes depuis six générations, avec le même attachement au goût et à la fraîcheur. À Metz et La Maxe, nous produisons sur 15 hectares en agriculture biologique, en privilégiant des pratiques qui préservent les sols, la biodiversité et l’environnement, tout en offrant une large une production au fil des saisons, des légumes croquants aux tomates bien mûres, sans oublier les fraises fraîchement cueillies.
                Aujourd’hui pilotée par Sébastien Obriot, l’exploitation continue d’avancer avec l’envie de proposer aux Messins de bons fruits et légumes sains, locaux et frais, cultivés dans le respect de l’environnement, du champ à l’assiette !
            </p>
          </div>
          <div className="about__image">
            <img src={ Champ } alt="Champ couché de soleil" />
          </div>
        </div>
      </section>
      
    )

}

export default AboutUs