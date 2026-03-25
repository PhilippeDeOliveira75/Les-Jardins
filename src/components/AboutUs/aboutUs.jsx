import './aboutUs.scss';
import { Team } from '@assets/import';

function AboutUs() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__text">
          <h2>À propos de nous</h2>
            <p>
                Depuis six générations, nous cultivons la terre avec passion au cœur de la Moselle.
                Sur 15 hectares en agriculture biologique à Metz et La Maxe, nos fruits et légumes
                sont cultivés dans le respect des sols et de la biodiversité — frais, savoureux et
                de saison. Une seule promesse : vous offrir le meilleur du terroir local,
                directement du champ à votre assiette.
            </p>
        </div>
        <div className="about__image">
          <img src={Team} alt="L'équipe des Jardins du Val de Moselle" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;