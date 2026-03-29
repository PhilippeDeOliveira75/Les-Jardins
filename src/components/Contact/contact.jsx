import './contact.scss';

const CONTACT_INFO = {
  name: 'Les Jardins Du Val de Moselle',
  address: '12 Chemin des Jardins, 57000 Metz',
  phone: '03 87 45 21 09',
  email: 'contact@potager-moselle.fr',
  hours: [
    { day: 'Lundi', time: 'Fermé' },
    { day: 'Mardi', time: '14h00 – 19h00' },
    { day: 'Mercredi', time: '14h00 – 19h00' },
    { day: 'Jeudi', time: '14h00 – 19h00' },
    { day: 'Vendredi', time: '14h00 – 19h00' },
    { day: 'Samedi', time: '09h00 – 12h30' },
    { day: 'Dimanche', time: 'Fermé' },
  ],
};

// Lien direct vers la fiche Google Maps du client
const mapsUrl = `https://www.google.com/maps/place/Les+Jardins+Du+Val+de+Moselle/@49.1277586,6.1552939,15z/data=!4m15!1m8!3m7!1s0x4794d9508b27767f:0x207f8292875f15b0!2sLes+Jardins+Du+Val+de+Moselle!8m2!3d49.1278715!4d6.1549411!10e5!16s%2Fg%2F1td41f6h!3m5!1s0x4794d9508b27767f:0x207f8292875f15b0!8m2!3d49.1278715!4d6.1549411!16s%2Fg%2F1td41f6h?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D`;

// Lien d'aperçu statique via l'embed public (sans clé API)
const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT_INFO.address
)}&output=embed&z=15`;

function Contact() {

  return (

    <section className="contact" id="contact">

      <h2 className="contact__title">Contactez-Nous</h2>

      <div className="contact__body">
        {/* Carte Google Maps cliquable */}
        <div className="contact__map-wrapper">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__map-link"
            aria-label="Ouvrir l'itinéraire dans Google Maps"
          >
            <iframe
              title="Carte du Potager de Moselle"
              className="contact__map-iframe"
              src={embedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay au survol */}
            <div className="contact__map-overlay">
              <span className="contact__map-cta">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Lancer l'itinéraire
              </span>
            </div>
          </a>
        </div>

        {/* Informations de contact */}
        <div className="contact__info">
          {/* Adresse */}
          <div className="contact__card">
            <div className="contact__card-icon">🌿</div>
            <div>
              <h3 className="contact__card-title">Adresse</h3>
              <p className="contact__card-text">{CONTACT_INFO.address}</p>
            </div>
          </div>

          {/* Téléphone */}
          <div className="contact__card">
            <div className="contact__card-icon">📞</div>
            <div>
              <h3 className="contact__card-title">Téléphone</h3>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="contact__card-text contact__card-link">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact__card">
            <div className="contact__card-icon">✉️</div>
            <div>
              <h3 className="contact__card-title">Email</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="contact__card-text contact__card-link">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="contact__card contact__card--hours">
            <div className="contact__card-icon">🕐</div>
            <div className="contact__card-wrapper">
              <h3 className="contact__card-title">Horaires d'ouverture</h3>
              <ul className="contact__hours-list">
                {CONTACT_INFO.hours.map(({ day, time }) => (
                  <li key={day} className="contact__hours-item">
                    <span className="contact__hours-day">{day}</span>
                    <span className="contact__hours-time">{time}</span>
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

export default Contact;
