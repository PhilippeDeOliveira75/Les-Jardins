import './home.scss';
import { Champ } from '@assets/import'

import ProductCard from '@components/ProductCard/productCard';

const products = [
  { name: "Carottes", image: "/assets/carottes.jpg" },
  { name: "Tomates", image: "/assets/tomates.jpg" },
  { name: "Courgettes", image: "/assets/courgettes.jpg" },
  { name: "Poivrons", image: "/assets/poivrons.jpg" },
];

const services = [
  { title: "Légumes Bio", description: "Cultivés sans pesticides, 100% naturels." },
  { title: "Livraison Locale", description: "Directement du producteur à Metz." },
  { title: "Saison et Fraîcheur", description: "Toujours des légumes de saison." },
];

const testimonials = [
  { name: "Alice", message: "Les légumes sont incroyablement frais et délicieux !" },
  { name: "Marc", message: "Service rapide et légumes de qualité supérieure." },
];

export default function Home() {
  return (
    <main className="home">

      <section className="home__hero">
        <div className="home__hero-content">
          <h1>🥕 Bienvenue au Potager de Moselle</h1>
          <p>Légumes frais directement du producteur à votre assiette à Metz</p>
          <a href="#products" className="btn-primary">Voir nos légumes</a>
        </div>
      </section>

      <section className="home__products" id="products">
        <h2>Nos légumes de saison</h2>
        <div className="home__products-grid">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>

      <section className="home__about">
        <div className="home__about-content">
          <div className="home__about-text">
            <h2>À propos de nous</h2>
            <p>
              Nous sommes producteurs locaux à Metz en Moselle, passionnés par des légumes frais, sains et de saison.
              Notre objectif est de vous offrir le meilleur de la nature, directement à votre table.
            </p>
          </div>
          <div className="home__about-image">
            <img src={ Champ } alt="Champ couché de soleil" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home__services">
        <h2>Nos avantages</h2>
        <div className="home__services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="home__testimonials">
        <h2>Ce que disent nos clients</h2>
        <div className="home__testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p>"{t.message}"</p>
              <span>- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact rapide */}
      <section className="home__contact" id="contact">
        <h2>Contactez-nous</h2>
        <p>Adresse, téléphone, email ou formulaire ici</p>
        <a href="#contact-form" className="btn-primary">Nous contacter</a>
      </section>

    </main>
  );
}