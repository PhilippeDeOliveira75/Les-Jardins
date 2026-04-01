import './contact.scss';

import { Map } from '@assets/import'


const CONTACT = {
  name: 'Les Jardins Du Val de Moselle',
  address: '12 Chemin des Jardins, 57000 Metz',
  phone: '03 87 45 21 09',
  email: 'contact@potager-moselle.fr',
  hours: [
    ['Lundi', 'Fermé'],
    ['Mardi', '14h00 – 19h00'],
    ['Mercredi', '14h00 – 19h00'],
    ['Jeudi', '14h00 – 19h00'],
    ['Vendredi', '14h00 – 19h00'],
    ['Samedi', '09h00 – 12h30'],
    ['Dimanche', 'Fermé'],
  ],
};

const mapsLink = "https://www.google.com/maps/place/Les+Jardins+Du+Val+de+Moselle/@49.1278715,6.1523662,17z/data=!3m1!4b1!4m6!3m5!1s0x4794d9508b27767f:0x207f8292875f15b0!8m2!3d49.1278715!4d6.1549411!16s%2Fg%2F1td41f6h?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D";

function Contact() {
  
  return (

    <section className="contact" id="contact">
      <h2 className="contact__title">Contactez-nous</h2>

      <div className="contact__grid">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__map"
          aria-label="Ouvrir dans Google Maps"
        >
          <img src={Map}
  alt="Localisation Les Jardins Du Val de Moselle"
  className="contact__map-img"
/>
          <div className="contact__overlay">
            <span>Itinéraire</span>
          </div>
        </a>

        <div className="contact__details">
          <InfoCard icon="🌿" title="Adresse">
            {CONTACT.address}
          </InfoCard>

          <InfoCard icon="📞" title="Téléphone">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          </InfoCard>

          <InfoCard icon="✉️" title="Email">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </InfoCard>

          <div className="contact__card contact__hours">
            <span className="contact__icon">🕐</span>
            <div className="contact__content">
              <h3>Horaires</h3>
              <ul>
                {CONTACT.hours.map(([day, time]) => (
                  <li key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="contact__card">
      <span className="contact__icon">{icon}</span>
      <div className="contact__content">
        <h3>{title}</h3>
        <div className="contact__text">{children}</div>
      </div>
    </div>
  );
}

export default Contact